import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import MediaIcons from '../MediaIcons';
import MenuScreen from '../MenuScreen';
import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            scrolled: false
        }
        this.scrollListener = null;
        this.toggleMenuScreen = this.toggleMenuScreen.bind(this);
        this.logoClickHandler = this.logoClickHandler.bind(this);
    }

    componentDidMount() {
        let lastScrollTop = 0,
            mySelf = this;

        // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
        this.scrollListener = () => { // or window.addEventListener("scroll"....
            let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > lastScrollTop) {
                // downscroll code
                mySelf.setState({
                    scrolled: true
                })
            } else {
                // upscroll code
                mySelf.setState({
                    scrolled: false
                })
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        }

        document.addEventListener("scroll", this.scrollListener, false);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.scrollListener);
    }

    toggleMenuScreen() {
        const { menuOpen } = this.state;

        this.setState({
            menuOpen: !menuOpen
        });
    }

    logoClickHandler(e) {
        const { pageId } = this.props;

        if (pageId === "home") {
            e.preventDefault();
            window.scrollTo({
                top: document.documentElement.offsetTop,
                left: 0,
                behavior: 'smooth',
            });
        }
    }

    render() {
        const { menuOpen, scrolled } = this.state;

        return (
            <React.Fragment>
                <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
                    {/* <div className="nav-container">
                        <div className="logo-wrapper">
                            <div className="nav-item logo">
                                <HashLink to="/home" className="logo-text" onClick={this.logoClickHandler}></HashLink>
                            </div>
                        </div>
                    </div> */}
                    <HashLink to="/home" className="nav-logo" onClick={this.logoClickHandler}></HashLink>
                </div>
                <MenuScreen open={menuOpen} openDirection="left" justifyDirection="left">
                    <div className="menu-item">
                        <HashLink to="/home#self-intro" onClick={this.toggleMenuScreen}>About Me</HashLink>
                    </div>
                    <div className="menu-item">
                        <HashLink to="/home#sec3" onClick={this.toggleMenuScreen}>Projects</HashLink>
                    </div>
                    <div className="menu-item">
                        <a href="https://drive.google.com/open?id=0B1dSWHM51dn-RGJBNlJZNFdaNW8" target="_blank" rel="noopener noreferrer" onClick={this.toggleMenuScreen}>Resume</a>
                    </div>
                    <MediaIcons />
                </MenuScreen>
                <div className={`nav-hamburger ${menuOpen ? 'open' : ''} ${scrolled && !menuOpen ? 'scrolled' : ''}`} onClick={this.toggleMenuScreen}>
                    <div className="nav-hamburger-bars"></div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;
