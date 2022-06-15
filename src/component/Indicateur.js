import React from 'react'

function Indicateur({title, num_base, total}) {
  return (
    <>
        <div className='case-indic'>
            <div className='title-indic'>
                {title}
            </div>
            <div className='numbase-indic'>
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