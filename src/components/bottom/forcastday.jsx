import React from 'react'

export default class Forecastday extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {day} = this.props;

        return <div className="forcastday-container">
            <div className="image"><img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt=""/></div>
            {/* <div className="text">{day.dt_txt}</div> */}
            <div className="text">{Math.floor(day.main.temp)}</div>
            <div className="muted-text">{day.weather[0].description}</div>
        </div>
    }
}