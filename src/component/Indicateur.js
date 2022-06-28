import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Indicateur({title, num_base, total, colorIndic}) {
    const [numBaseState, setNumBaseState] = useState();
    const [totalState, setTotalState] = useState();
    const requestNumBaseProps = async () => {
        const resultNumBase = await num_base;
        if(resultNumBase !== undefined){
            let strNumBase = resultNumBase.toLocaleString();
            setNumBaseState(strNumBase);
        }

    }
    const requestTotalProps = async () => {
        const resultTotal = await total;
        if(resultTotal !== undefined){
            let strTotal = resultTotal.toLocaleString();
            setTotalState(strTotal);
        }
    }
    useEffect(() => {
        requestNumBaseProps();
        requestTotalProps();
    })
  return (
    <>
        <div className='case-indic'>
            <div className='title-indic'>
                {title}
            </div>
            <div className='numbase-indic' style={num_base > 0 ? {color: colorIndic} : {color: 'white'}}>
                <FontAwesomeIcon icon={faArrowUp} className="icon-up" style={num_base > 0 ? {color: colorIndic, visibility:'visible'} : {visibility: 'hidden'}}/>
                {numBaseState}
            </div>
            <div className='total-indic' style={title === 'Tests effectués' ? {color: 'white'} : {color: '#253140'}}>
                {totalState}
            </div>
        </div>
    </>
  )
}

export default Indicateur