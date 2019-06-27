import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Preloader.scss';

class Preloader extends Component {
    state = {
        redirect: false
    }

    setRedirect = () => {
        setTimeout(() => {
            this.setState({
                redirect: true
            })        
        }, 2000);
    }
    
    renderRedirect = () => {
        if (this.state.redirect) {
            this.props.history.push(`/home`)
        }
    }

    render() {
        return (
            <div className="preloader-wrapper">
                {this.renderRedirect()}
                <div className="preloader-header" onAnimationEnd={this.setRedirect}>
                    <div className="preloader-header-text">Hello, this is Tim Chu</div>
                </div>
                <div className="preloader-button-wrapper"><Link className="btn preloader-button" to="/home">Continue...</Link></div>
            </div>
        );
    }
}

export default Preloader;
