import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom';
// import { Link } from "react-router-dom";
// import { ChatBubbleOutline } from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import './PortfolioCard.scss';

class PortfolioCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            redirect: ""
        }
        this.card = React.createRef();
        this.backdrop = React.createRef();
        this.clickCard = this.clickCard.bind(this);
    }

    // componentDidMount() {
    //     let lastScrollTop = 0,
    //         myself = this;

    //     // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    //     document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
    //         let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    //         if (st > lastScrollTop){
    //             // downscroll code
    //             myself.nav.current.classList.add("scrolled");
    //         } else {
    //             // upscroll code
    //             myself.nav.current.classList.remove("scrolled");
    //         }
    //         lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    //     }, false);
    // }

    // togglePopup() {
    //     const popupClasses = this.popup.current.classList,
    //         backdropClasses = this.backdrop.current.classList;
    //     if (popupClasses.contains("show1")) {
    //         popupClasses.remove("show1", "show2");
    //         backdropClasses.remove("show");
    //     } else {
    //         popupClasses.add("show1");
    //         backdropClasses.add("show");
    //         setTimeout(() => {
    //             popupClasses.add("show2");
    //         }, 300);
    //     }
    // }
    // componentDidMount() {
    //     this.card.current.style.width = `${this.card.current.offsetWidth}px`;
    //     this.card.current.style.height = `${this.card.current.offsetHeight}px`;
    // }

    clickCard(pageUrl) {
        const {x, y, width, height} = this.card.current.getBoundingClientRect();
        const thisCard = this.card.current;
        const myself = this;
        thisCard.style.left = `${x}px`;
        thisCard.style.top = `${y}px`;
        thisCard.style.width = `${width}px`;
        thisCard.style.height = `${height}px`;
        // thisCard.classList.add("open");
        this.setState({
            open: true
        })
        setTimeout(()=>{
            thisCard.style.left = "0";
            thisCard.style.top = "0";
            thisCard.style.width = `${window.innerWidth}px`;
            thisCard.style.height = `${window.innerHeight}px`;
        
            setTimeout(()=>{
                myself.setState({
                    redirect: pageUrl
                })
            }, 1000);
        }, 200)
    }

    render() {
        const { large, content } = this.props;
        const { open, redirect } = this.state;

        if (redirect!=="") {
            return <Redirect to={redirect} />
        }
        
        return (
            <React.Fragment>
                <Paper className={`portfolio-card ${large?"portfolio-card-large":""} ${open?"open":""}`} ref={this.card}>
                    <div className="portfolio-card-container" onClick={() => this.clickCard(content.pageUrl)}>
                        <img src={"/imgs/" + content.imgUrl} alt="Portfolio"/>
                        <div className="portfolio-card-text-wrapper">
                            <h4>{content.title}</h4>
                            <div className="portfolio-card-content">
                                <p>{content.subTitle}</p>
                                <div className="portfolio-card-btn">{content.btnText}</div>
                            </div>
                        </div>
                    </div>
                </Paper>
                {open?<div className="placeHolder-card"></div>:""}
            </React.Fragment>
        );
    }
}

export default PortfolioCard;
