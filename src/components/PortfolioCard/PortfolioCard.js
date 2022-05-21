import React, { Component } from 'react';
import  { Navigate } from 'react-router-dom';
import { Box, Button, colors, Paper, Typography } from '@mui/material';
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
                <Paper className={`portfolio-card ${large?"portfolio-card-large":""} ${open?"open":""} ${fadeOut?"fadeOut":""} come-in-container`} ref={this.card} tabIndex={0} sx={{
                    borderRadius: 2,
                    boxShadow: `0 0 12px ${colors.grey[200]}`
                }}>
                    <Box className="portfolio-card-container" sx={content.pageUrl ? { cursor: 'pointer' }: {}} onClick={() => this.clickCard(content.pageUrl)}>
                        <Box className="portfolio-card-img" style={{backgroundImage: `url(/imgs/${content.imgUrl})`}} alt="Portfolio" />
                        <Box className={`portfolio-card-text-wrapper ${open?"open":""}`}>
                            <Typography variant="h5">{content.title}</Typography>
                            <Box className="portfolio-card-content" sx={{ alignItems: 'baseline' }}>
                                <Typography variant="body2" color="text.secondary" className={content.pageUrl ? "" : "mobile-show"}>{content.subTitle}</Typography>
                                {content.pageUrl ? (
                                    <Button size="small" color="primary">
                                        {content.btnText || "Read more"}
                                        {/* <img src="/imgs/icons/arrow-right.svg" alt="Arrow right" height="14px"/> */}
                                    </Button>
                                ) : <Box className="portfolio-card-btn-placeholder" />}
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
