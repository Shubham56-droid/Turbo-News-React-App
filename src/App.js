import './App.css';
import React, { Component } from 'react';
import Navbar from './mycomponents/Navbar';
import News from './mycomponents/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './mycomponents/Footer';



// use rcc for snippet
export default class App extends Component {
  pageSize=this.pageSize;
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div className="main">
        <Router>
          <Navbar/>
            <Switch>
                <Route  exact path="/">
                  <News key="general" pageSize={this.pageSize} country="in" category="general" apiKey={this.apiKey}/>
                </Route>
                <Route  exact path="/health">
                  <News key="health" pageSize={this.pageSize} country="in" category="health" apiKey={this.apiKey}/>
                </Route>
                <Route  exact path="/entertainment">
                  <News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" apiKey={this.apiKey}/>
                </Route>
                <Route  exact path="/science">
                  <News key="science" pageSize={this.pageSize} country="in" category="science" apiKey={this.apiKey}/>
                </Route>
                <Route  exact path="/sports">
                  <News key="sports" pageSize={this.pageSize} country="in" category="sports" apiKey={this.apiKey}/>
                </Route>
                <Route  exact path="/technology">
                  <News key="technology" pageSize={this.pageSize} country="in" category="technology" apiKey={this.apiKey}/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
      </div>
    )
  }
}
