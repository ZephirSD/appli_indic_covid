import React from 'react'
import Actualite from './Actualite'
import Carte from './Carte'

function CaseCarteInfo() {
  return (
    <>
      <div className='grid-case-info-carte'>
        <Actualite/>
        <div className='div-carte'>
            <Carte/>
        </div>
      </div>    
    </>
  )
}

export default CaseCarteInfo