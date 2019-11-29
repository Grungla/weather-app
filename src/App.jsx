import React, {Component} from 'react';
// import './App.css';
import TopSection from './components/top/top'
import "./sass/app.scss";

class App extends Component {
  render(){
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="top-section">
            <TopSection/>
          </div>
          <div className="bottom-section">Bottom</div>
        </div>
      </div>
    )
  }
}

export default App;
