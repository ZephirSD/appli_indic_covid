import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';


function Actualite() {
    const [data2, setData2] = useState([]);
    const [lienSrc, setLienSrc] = useState('');
    const [redirCondi, setRedirecondi] = useState(false);
    const newsAPI = () => {
        fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/fr.json')
        .then((response) => response.json())
        .then((valueData) => {
            setData2(valueData.articles);
        })
    }
    const boolRedirc = (e) => {
        const lien = e.currentTarget.getAttribute("data-url");
        setLienSrc(lien);
        setRedirecondi(current => !current);
    }
  return (
      useEffect(() =>{
          newsAPI();
        },[]),
        <>    
        <div className='case-actu'>
            <div className='block-title-actu'>
                <button className='button-retour-info' onClick={boolRedirc} style={!redirCondi ? {display: 'none'} : {display: 'block'}}>
                    <FontAwesomeIcon icon={faAngleLeft} className="retour-info"/>
                </button>
                <h1 className='title-sante'>Info Santé</h1>
            </div>
            <div className='scroll-case-actu' style={redirCondi ? {overflow: 'hidden'} : {overflow: 'auto'}}>
                {
                    !redirCondi ?
                    data2.map((valueNews,index)=>(
                        <div className="select-info" key={index}>
                            <div className="title-actu">{valueNews.title.length > 30 ? `${valueNews.title.substring(0, 30)}...` : valueNews.title}{}</div>
                            <div className="source-actu">{valueNews.source.name}</div>
                            <div className='redirection'>
                                <button onClick={boolRedirc} type={'button'} data-url={valueNews.url} className="button-redirect">
                                    <FontAwesomeIcon icon={faAngleRight} className="icon-redirect"/>
                                </button>
                            </div>
                        </div>
                    ))
                    : <iframe title='test' src={lienSrc} className='iframe-display'></iframe>
                }   
            </div>
        </div>
    </>
  )
}

export default Actualite