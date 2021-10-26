import './App.css';
import React, { Component } from 'react';
import Navbar from './mycomponents/Navbar';
import News from './mycomponents/News';


// use rcc for snippet
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}
