import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.nav = React.createRef();
        this.toggleMobileNav = this.toggleMobileNav.bind(this);
        this.logoClickHandler = this.logoClickHandler.bind(this);
    }

    componentDidMount() {
        let lastScrollTop = 0,
            thisNav = this.nav.current;

        // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
        document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
            let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > lastScrollTop){
                // downscroll code
                thisNav.classList.add("scrolled");
            } else {
                // upscroll code
                thisNav.classList.remove("scrolled");
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

    logoClickHandler(e) {
        const { pageId } = this.props;

        if(pageId==="home") {
            e.preventDefault();
            window.scrollTo({
                top: document.documentElement.offsetTop,
                left: 0,
                behavior: 'smooth',
            });
        }
    }

    render() {
        return (
            <div className="nav" ref={this.nav}>
                <Grid container className="nav-container">
                    <Grid item xs={12} sm>
                        <div className="nav-item">
                            <HashLink to="#sec2"><Button>About Me</Button></HashLink>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm>
                        <div className="nav-item">
                            <HashLink to="#sec3"><Button>Projects</Button></HashLink>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm className="logo-wrapper">
                        <div className="nav-item logo">
                            <HashLink to="/home" className="logo-text" onClick={this.logoClickHandler}></HashLink>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm>
                        <div className="nav-item">
                            <HashLink to="#sec4"><Button>Contact</Button></HashLink>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm>
                        <div className="nav-item">
                            <HashLink to="https://drive.google.com/open?id=0B1dSWHM51dn-RGJBNlJZNFdaNW8" target="_blank" rel="noreferrer"><Button>Resume</Button></HashLink>
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
