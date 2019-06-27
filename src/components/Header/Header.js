import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // preloaderShow: true
        }
        this.sec1nav = React.createRef("sec1nav")
    }

    render() {
        // const { preloaderShow } = this.props;
        return (
            <div className="nav" ref={this.sec1nav}>
                <Grid container className="nav-container">
                    <Grid item xs={12} sm>
                        <div className="nav-item">
                            <a href="#">About Me</a>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm>
                        <div className="nav-item">
                            <a href="#">Portfolio</a>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm className="logo-wrapper">
                        <div className="nav-item logo">
                            <Link to="/home" className="logo-text"></Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm>
                        <div className="nav-item">
                            <a href="#">Contact</a>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm>
                        <div className="nav-item">
                            <Link to="https://drive.google.com/open?id=0B1dSWHM51dn-RGJBNlJZNFdaNW8" target="_blank" rel="noreferrer">Resume</Link>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Header;
