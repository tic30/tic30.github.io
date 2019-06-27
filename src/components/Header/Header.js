import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.nav = React.createRef();
        this.toggleMobileNav = this.toggleMobileNav.bind(this);
    }

    componentDidMount() {
        let lastScrollTop = 0,
            myself = this;

        // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
        document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
            let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > lastScrollTop){
                // downscroll code
                myself.nav.current.classList.add("scrolled");
            } else {
                // upscroll code
                myself.nav.current.classList.remove("scrolled");
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        }, false);
    }

    toggleMobileNav() {
        const navClasses = this.nav.current.classList;
        if (navClasses.contains("stuck")) {
            navClasses.remove("stuck");
        } else {
            navClasses.add("stuck");
        }
    }

    render() {
        return (
            <div className="nav" ref={this.nav}>
                <Grid container className="nav-container">
                    <Grid item xs={12} sm>
                        <div className="nav-item">
                            <a href="#">About Me</a>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm>
                        <div className="nav-item">
                            <a href="#">Projects</a>
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
                            <Button href="https://drive.google.com/open?id=0B1dSWHM51dn-RGJBNlJZNFdaNW8" target="_blank" rel="noreferrer">Resume</Button>
                        </div>
                    </Grid>
                </Grid>
                <div className="nav-hamburger" onClick={this.toggleMobileNav}>
                    <div className="nav-hamburger-bars"></div>
                </div>
            </div>
        );
    }
}

export default Header;
