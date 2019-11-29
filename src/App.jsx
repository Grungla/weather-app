import React, {Component} from 'react';
// import './App.css';
import TopSection from './components/top/'
import BottomSection from './components/bottom/'
import "./sass/app.scss";

import axios from 'axios';

const WEATHER_KEY = 'c2425f486d512f18e2db27f067856f6b'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cityName:"Toronto,ca",
      units:"metric",
      isLoading:true
    };
  }

  updateWeather(){
    const {cityName, units} = this.state;
    const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${WEATHER_KEY}&units=${units}`;

    axios.get(URL).then((res)=>{
      console.log("DATA", res)
      return res.data;
    }).then(data=>{
      const current = data.list[0];
      this.setState({
        isLoading:false, 
        temp:current.main.temp, 
        isDay:true, 
        text: current.weather[0].description, 
        iconURL:current.weather[0].icon,
        forcastdays: data.list.slice(1,5)
      });
    }).catch((err)=>{
      if(err)
        console.error("Cannot fetch Weather Data from API, ", err);
    })
  }

  componentDidMount(){    
    const { eventEmitter } = this.props;

    this.updateWeather();

    eventEmitter.on("updateWeather", data =>{
      this.setState({ cityName: data }, () => this.updateWeather());
      console.log("LocationName:", data)
    })
  }

  render(){
    const {isLoading, cityName, temp, isDay, text, iconURL, forcastdays} = this.state;
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="top-section">
            {isLoading && <h3>Loading Weather...</h3>}
            {!isLoading && (
              <TopSection 
                location={cityName} 
                temp={temp} 
                isDay={isDay} 
                text={text} 
                iconURL={iconURL} 
                eventEmitter={this.props.eventEmitter}
              />
            )}
          </div>
          <div className="bottom-section">
            {!isLoading && (
              <BottomSection forcastdays={forcastdays}/>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App;

//6167865
//c2425f486d512f18e2db27f067856f6b
// api.openweathermap.org/data/2.5/forecast?id=6167865&appid=c2425f486d512f18e2db27f067856f6b&units=metric