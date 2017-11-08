import React, { Component } from 'react';
import HeaderComponent from './Components/Header/Header';
import Slider from './Components/Slider/Slider';
import AboutUs from './Components/AboutUs/AboutUs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderComponent/>
          <Slider/>
          <AboutUs/>
      </div>
    );
  }
}

export default App;
