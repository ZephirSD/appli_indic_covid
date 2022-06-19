import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import Indicateur from './Indicateur';

function Header() {
    const [data, setData] = useState([]);
    const screenMobile = "(max-width: 720px)";
    const [queryMobile, setQueryMobile] = useState({
        matches: window.innerWidth < 720 ? true : false,
    })
    const diseaseAPI = () => {
        fetch('https://disease.sh/v3/covid-19/countries/R%C3%A9union?yesterday=true&twoDaysAgo=true&strict=true&allowNull=0')
        .then((response) => response.json())
        .then((valueData) => {
            setData(valueData);
        })
    }
    return (
        useEffect(()=>{
            diseaseAPI();
            let screenQuery = window.matchMedia(screenMobile);
            screenQuery.addEventListener('change',setQueryMobile);
        },[]),
        <>
        {
            queryMobile && !queryMobile.matches ? (
            <div className='header'>
                <Indicateur title={'Cas'} num_base={data.todayCases} total={data.cases} colorIndic={'#D97777'}/>
                <Indicateur title={'Guérisons'} num_base={data.todayRecovered} total={data.recovered} colorIndic={'#9ED599'}/>
                <Indicateur title={'Décès'} num_base={data.todayDeaths} total={data.deaths} colorIndic={'#D97777'}/>
                <Indicateur title={'Tests effectués'} total={data.tests}/>
            </div>
            ) : 
            (
                <Swiper
                    spaceBetween={20}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    className="swiperHeader"
                >
                    <SwiperSlide>
                        <Indicateur title={'Cas'} num_base={data.todayCases} total={data.cases} colorIndic={'#D97777'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Indicateur title={'Guérisons'} num_base={data.todayRecovered} total={data.recovered} colorIndic={'#9ED599'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Indicateur title={'Décès'} num_base={data.todayDeaths} total={data.deaths} colorIndic={'#D97777'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Indicateur title={'Tests effectués'} total={data.tests}/>
                    </SwiperSlide>
                </Swiper>
            )
        }
        </>
    )
}

export default Header