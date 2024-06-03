import React from 'react'
import './../../styles/modulos/weather-app.scss';
import sunny from '../../assets/images/sunny.png';

export default function Header() {
  return (
    <header className='weather-cab'>
        <div className='weather-cab-box'>
            <ul>
                <li>
                    <img
                        src= {sunny} 
                        alt="Soleado"
                        title="Soleado"
                        width={64}
                        height={64}
                    />
                </li>
                <li className='degree-head'>
                    9
                    <div className='CorF'>
                        <ul>
                            <li>ºC</li>
                            <li>ºF</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <ul className='data-weather'>
                        <li>
                            {'Precipitation'}: {0}%
                        </li>
                        <li>
                           {'Humidity'}: {49}% 
                        </li>
                        <li>
                            {'Wind'}: {'10 km/h'}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className='weather-cab-box'>
            <ul className='head-weather'>
                <li>
                    <h1>{'Weather'}</h1>
                </li>
                <li>{'Friday'} 09:00</li>
                <li>{'Sunny'}</li>
            </ul>
        </div>
        
    </header>
  )
}
