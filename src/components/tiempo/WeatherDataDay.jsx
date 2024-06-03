import React from 'react'
const DataDay =({ hora, dia, imagen, max, min }) => {
  return (
    <>
    <span>{hora}</span>
    <div className='weather-group'>
      <p>{dia}</p>
      <img 
        src= {imagen} 
        alt="tiempo" />
      <p>
        <span>{max}</span>
        <span>{min}</span>
      </p>
    </div>
    </>
  )
}

export default DataDay;