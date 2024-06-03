import React, { useState } from "react";
import './../../styles/modulos/tabs.scss';
import styled from "styled-components";
import WeatherList from './WeatherList';
import NoData from "./NoData";
export default function Tabs() {
    const titles = ['Temperature', 'Precipitation', 'Wind']
    const [activeTab, setActiveTab] = useState(0);    
    const seleccionar = (index) => {
        setActiveTab(index);
    };
    return (
        <Container className="container">
            <ul className="tabs">
                <li 
                    className={activeTab===0?"active":""} 
                    onClick={ ()=>seleccionar(0)}
                >
                    {titles[0]}
                </li>
                <li></li>
                <li className={activeTab===1 ? "active" : ""} onClick={ ()=>seleccionar(1)}>
                    {titles[1]}
                </li>
                <li></li>
                <li className={activeTab===2 ? "active" : ""} onClick={ ()=> seleccionar(2)}>
                    {titles[2]}
                </li>
                
            </ul>
            <div className="tab-content">
                {activeTab===0 && <WeatherList></WeatherList>}
                {activeTab===1 && <NoData
                    tab="precipitaciones"
                ></NoData>}
                {activeTab===2 && <NoData
                    tab="viento"
                ></NoData>}
            </div>
        </Container>
    );
}    

const Container = styled.div``