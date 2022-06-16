import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


function Actualite() {
    const [data2, setData2] = useState([]);
    const newsAPI = () => {
        fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/fr.json')
        .then((response) => response.json())
        .then((valueData) => {
            setData2(valueData.articles);
        })
    }
  return (
      useEffect(() =>{
          newsAPI();
        },[]),
        <>    
        <div className='case-actu'>
            <div className='block-title-actu'>
                <h1 className='title-sante'>Info Santé</h1>
            </div>
            <div className='scroll-case-actu'>
                {
                    data2.map((valueNews,index)=>(
                        <div className="select-info" key={index}>
                            <div className="title-actu">{valueNews.title.length > 30 ? `${valueNews.title.substring(0, 30)}...` : valueNews.title}{}</div>
                            <div className="source-actu">{valueNews.source.name}</div>
                            <div className='redirection'>
                                {/* <a href={valueNews.url} target="BLANK_"> */}
                                    <FontAwesomeIcon icon={faAngleRight} className="icon-redirect"/>
                                {/* </a> */}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Actualite