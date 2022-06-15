import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Indicateur({title, num_base, total, colorIndic}) {
  return (
    <>
        <div className='case-indic'>
            <div className='title-indic'>
                {title}
            </div>
            <div className='numbase-indic' style={num_base > 0 ? {color: colorIndic} : {color: 'white'}}>
                <FontAwesomeIcon icon={faArrowUp} className="icon-up" style={num_base > 0 ? {color: colorIndic, visibility:'visible'} : {visibility: 'hidden'}}/>
                {num_base}
            </div>
            <div className='total-indic' style={title === 'Tests effectués' ? {color: 'white'} : {color: '#253140'}}>
                {total}
            </div>
        </div>
    </>
  )
}

export default Indicateur