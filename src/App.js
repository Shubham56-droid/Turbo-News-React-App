import './App.css';
import React, { Component } from 'react';
import Navbar from './mycomponents/Navbar';
import News from './mycomponents/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



// use rcc for snippet
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
            <Switch>
                <Route  exact path="/">
                  <News key="general" pageSize={9} country="in" category="general"/>
                </Route>
                <Route  exact path="/health">
                  <News key="health" pageSize={9} country="in" category="health"/>
                </Route>
                <Route  exact path="/entertainment">
                  <News key="entertainment" pageSize={9} country="in" category="entertainment"/>
                </Route>
                <Route  exact path="/science">
                  <News key="science" pageSize={9} country="in" category="science"/>
                </Route>
                <Route  exact path="/sports">
                  <News key="sports" pageSize={9} country="in" category="sports"/>
                </Route>
                <Route  exact path="/technology">
                  <News key="technology" pageSize={9} country="in" category="technology"/>
                </Route>
            </Switch>
        </Router>
      </div>
    )
  }
}
