import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom';
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

    clickCard(pageUrl) {
        if(!pageUrl) return;
        const {x, y, width, height} = this.card.current.getBoundingClientRect();
        const thisCard = this.card.current;
        const myself = this;
        thisCard.style.left = `${x}px`;
        thisCard.style.top = `${y}px`;
        thisCard.style.width = `${width}px`;
        thisCard.style.height = `${height}px`;
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
            }, 800);
        }, 200)
    }

    render() {
        const { large, content } = this.props;
        const { open, redirect } = this.state;

        if (redirect!=="") {
            return <Redirect push to={redirect} />
        }
        
        return (
            <React.Fragment>
                <Paper className={`portfolio-card ${large?"portfolio-card-large":""} ${open?"open":""}`} ref={this.card}>
                    <div className="portfolio-card-container" onClick={() => this.clickCard(content.pageUrl)}>
                        <div className="portfolio-card-img" style={{backgroundImage: `url(/imgs/${content.imgUrl})`}} alt="Portfolio"></div>
                        <div className={`portfolio-card-text-wrapper ${open?"open":""}`}>
                            <h4>{content.title}</h4>
                            <div className="portfolio-card-content">
                                <p>{content.subTitle}</p>
                                <div className="portfolio-card-btn">
                                    {content.btnText}
                                    {content.pageUrl && <img src="/imgs/icons/arrow-right.svg" alt="Arrow right" height="14px"/>}
                                </div>
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
