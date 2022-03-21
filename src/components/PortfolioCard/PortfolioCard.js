import React, { Component } from 'react';
import  { Navigate } from 'react-router-dom';
import { Box, Paper } from '@mui/material';
import './PortfolioCard.scss';

class PortfolioCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            redirect: "",
            fadeOut: false
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
                    fadeOut: true
                })
                setTimeout(()=>{
                    myself.setState({
                        redirect: pageUrl
                    })
                }, 500);
            }, 800);
        }, 200)
    }

    render() {
        const { large, content } = this.props;
        const { open, redirect, fadeOut } = this.state;

        if (redirect!=="") {
            return <Navigate push to={redirect} />
        }
        
        return (
            <>
                <Paper className={`portfolio-card ${large?"portfolio-card-large":""} ${open?"open":""} ${fadeOut?"fadeOut":""}`} ref={this.card} tabIndex={0}>
                    <Box className="portfolio-card-container" onClick={() => this.clickCard(content.pageUrl)}>
                        <Box className="portfolio-card-img" style={{backgroundImage: `url(/imgs/${content.imgUrl})`}} alt="Portfolio" />
                        <Box className={`portfolio-card-text-wrapper ${open?"open":""}`}>
                            <h4>{content.title}</h4>
                            <Box className="portfolio-card-content">
                                <p className={content.pageUrl ? "" : "mobile-show"}>{content.subTitle}</p>
                                {content.pageUrl ? <Box className="portfolio-card-btn">
                                    {content.btnText || "Read more"}
                                    <img src="/imgs/icons/arrow-right.svg" alt="Arrow right" height="14px"/>
                                </Box> : <Box className="portfolio-card-btn-placeholder" />}
                            </Box>
                        </Box>
                    </Box>
                </Paper>
                {open?<Box className="placeHolder-card" />:""}
            </>
        );
    }
}

export default PortfolioCard;
