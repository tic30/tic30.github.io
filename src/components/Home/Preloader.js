import React, { Component } from 'react';
import preloader from '../../imgs/chu-preloader.gif';
import '../../css/chu-custom.css';

class Preloader extends Component {
    
    render() {
        const {continueEvent} = this.props;
        return (
            <div className="preloader-wrapper text-center">
                <img src={preloader} alt="Loading preloader..." />
                <div className="preloader-button-wrapper"><button className="btn preloader-button" onClick={continueEvent}>Continue...</button>--</div>
            </div>
        );
    }
}

export default Preloader;
