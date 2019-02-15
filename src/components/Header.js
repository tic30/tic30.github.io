import React, { Component } from 'react';
import '../css/chu-custom.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // preloaderShow: true
        }
        this.sec1nav = React.createRef("sec1nav")
        this.showHeader = this.showHeader.bind(this);
    }
    showHeader() {
        // this.sec1nav.show?
    }
    render() {
        const { preloaderShow } = this.props;
        return (
            <React.Fragment>
                {preloaderShow ? "" : (this.showHeader)}
                <React.Fragment>
                    <div className="sec1nav" ref={this.sec1nav}>
                        <ul className="nav-ul">
                            <li className="sec1nav-brand">
                                <a href="#pageTop" className="local-scroll"><div className="steady">T</div><div className="zoom">im&nbsp;</div><div className="steady">C</div><div className="zoom">hu</div><br /><hr /></a>
                            </li>
                            <li className="nav-img-wrapper"><a href="#chu-menu">
                                <img className="nav-img nav-img1" id="chu-menu" src="imgs/icons/chu-menu.png" alt="Loading menu..." />
                                <img className="nav-img nav-img2" src="imgs/icons/arrow01.png" alt="Loading menu..." />
                            </a></li>
                        </ul>
                        <div className="dd"><i className="fa fa-angle-up" aria-hidden="true" style={{ marginRight: '10px' }}></i>Top</div>
                    </div>


                    <div id="sidebar-wrapper">
                        <div className="page-overlay"></div>
                        <div className="sidebar-nav">
                            <div className="sec-title sidebar-brand">
                                <h2>Explore</h2>
                            </div>
                            <div className="closeButton">
                                <a href="#menu-close">
                                    <img className="nav-img nav-img1 inverted" id="menu-close" src="imgs/icons/close.png" alt="Loading close..." />
                                    <img className="nav-img nav-img2 inverted" src="imgs/icons/arrow01.png" alt="Loading close2..." />
                                </a>
                            </div>
                            <div className="myTable">
                                <div className="row slider-item">
                                    <div className="td-inner td-o">
                                        <a href="#sec2" className="local-scroll"><img src="imgs/icons/summary.png" alt="Loading menu..." /><div className="td-words">Summary</div></a>
                                    </div>
                                </div>
                                <div className="row slider-item">
                                    <div className="td-inner td-b">
                                        <a href="#sec4" className="local-scroll"><img src="imgs/icons/portfolio.png" alt="Loading menu..." /><div className="td-words">Portfolio</div></a>
                                    </div>
                                </div>
                                <div className="row slider-item">
                                    <div className="td-inner td-r">
                                        <a href="#sec5" className="local-scroll"><img src="imgs/icons/contact.png" alt="Loading menu..." /><div className="td-words">Contacts</div></a>
                                    </div>
                                </div>
                                <div className="row slider-item">
                                    <div className="td-inner td-g">
                                        <a href="https://drive.google.com/open?id=0B1dSWHM51dn-RGJBNlJZNFdaNW8" target="_blank" rel="noopener noreferrer"><img src="imgs/icons/resume.png" alt="Loading menu..." /><div className="td-words">Resume</div></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </React.Fragment>
        );
    }
}

export default Header;
