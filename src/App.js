import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import ITS from './components/ITS';
import Dij from './components/Dij';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="pageTop" className="App">
        <Router>
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/its/" component={ITS} />
              <Route path="/siemens/" component={Dij} />
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
