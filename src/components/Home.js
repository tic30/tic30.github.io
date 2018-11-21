import React, { Component } from 'react';
import preloader from '../imgs/chu-preloader.gif';
import '../css/chu-custom.css'

class Home extends Component {
  render() {
    return (
      <div className="preloader-wrapper text-center">
        <img src={preloader} alt="Loading preloader..." />
        <div className="preloader-button-wrapper"><button className="btn preloader-button">Continue...</button>--</div>
      </div>
    );
  }
}

export default Home;
