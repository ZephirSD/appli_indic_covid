import React, { useEffect, useState } from 'react'
import Indicateur from './Indicateur'

function Header() {
    const [data, setData] = useState([]);
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
        },[]),
        <>
            <div className='header'>
                <Indicateur title={'Cas'} num_base={data.todayCases} total={data.cases}/>
                <Indicateur title={'Guerisons'} num_base={data.todayDeaths} total={data.recovered}/>
                <Indicateur title={'Décès'} num_base={data.todayDeaths} total={data.deaths}/>
                <Indicateur title={'Tests effectués'} total={data.tests}/>
            </div>
        </>
    )
}

export default Header