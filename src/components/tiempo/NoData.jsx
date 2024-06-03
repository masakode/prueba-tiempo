import React from 'react'
import './../../styles/generales/animaciones.scss'

const NoData =({tab}) => {
  return (
    <div className='bg-negro-5 box-NoData'>
        <h1 className='typing'>No hay datos disponibles sobre <span className='oblicuo'>{tab}</span></h1>        
    </div>
  )
}
export default NoData;
