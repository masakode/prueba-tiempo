import React, { useState } from 'react';
import DataDay from './WeatherDataDay';
import sunny from '../../assets/images/sunny.png';
import cloudy from '../../assets/images/partly_cloudy.png';


export default function WeatherList() {
    const [activeDay, setActiveDay] = useState(0);    
    const seleccionar = (index) => {
        setActiveDay(index);
    };

    return (
        <>
            <ul className='data-daily'>
                <li                    
                    className={activeDay===0?"active":""} 
                    onClick={ ()=>seleccionar(0)}
                >
                    <DataDay
                        hora='10:00'
                        dia="Fri"
                        imagen={sunny}
                        max='22º'
                        min='9º'

                    ></DataDay>
                </li>
                <li                    
                    className={activeDay===1?"active":""} 
                    onClick={ ()=>seleccionar(1)}
                >
                    <DataDay
                        hora='13:00'
                        dia="Sat"
                        imagen={cloudy}
                        max='24º'
                        min='7º'

                    ></DataDay>
                </li>
                <li                    
                    className={activeDay===2?"active":""} 
                    onClick={ ()=>seleccionar(2)}
                >
                    <DataDay
                        hora='16:00'
                        dia="Sun"
                        imagen={sunny}
                        max='23º'
                        min='5º'

                    ></DataDay>
                </li>
                <li                    
                    className={activeDay===3?"active":""} 
                    onClick={ ()=>seleccionar(3)}
                >
                    <DataDay
                        hora='19:00'
                        dia="Mon"
                        imagen={cloudy}
                        max='19º'
                        min='1º'

                    ></DataDay>
                </li>
                <li                    
                    className={activeDay===4?"active":""} 
                    onClick={ ()=>seleccionar(4)}
                >
                    <DataDay
                        hora='22:00'
                        dia="Tue"
                        imagen={sunny}
                        max='17º'
                        min='2º'

                    ></DataDay>
                </li>
                <li                    
                    className={activeDay===5?"active":""} 
                    onClick={ ()=>seleccionar(5)}
                >
                    <DataDay
                        hora='01:00'
                        dia="Wed"
                        imagen={sunny}
                        max='19º'
                        min='3º'

                    ></DataDay>
                </li>
                <li                    
                    className={activeDay===6?"active":""} 
                    onClick={ ()=>seleccionar(6)}
                >
                    <DataDay
                        hora='04:00'
                        dia="Thu"
                        imagen={cloudy}
                        max='20º'
                        min='6º'

                    ></DataDay>
                </li>
                <li                    
                    className={activeDay===7?"active":""} 
                    onClick={ ()=>seleccionar(7)}
                >
                    <DataDay
                        hora='07:00'
                        dia="Fri"
                        imagen={cloudy}
                        max='19º'
                        min='6º'

                    ></DataDay>
                </li>

            </ul>
        </>
    );
}
