import React from 'react';
import './style.scss'
import SunImg from '../../resources/images/sun.png'

export default class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        const {location, temp, isDay, text, iconURL } = this.props;
        return <div className="weather-container">
            <div className="header">{location}</div>
            <div className="inner-container">
                <div className="image"><img src={`http://openweathermap.org/img/wn/${iconURL}@2x.png`} alt=""/></div>
                <div className="current-weather">{Math.floor(temp)}º</div>
            </div>
            <div className="footer">{text}</div>
        </div>
    }
}