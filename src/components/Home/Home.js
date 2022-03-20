import React, { Component } from 'react';
import { Box, Container, Grid } from '@mui/material';
import Cancel from '@mui/icons-material/Cancel';
import Header from '../Header';
import Flyer from '../Flyer';
// import ContactBubble from '../ContactBubble';
import PortfolioCard from '../PortfolioCard';
import IndeedPage, { ropeSx } from '../IndeedPage';
import Footer from '../Footer';
import Texts from '../../texts';
import { isInViewport } from '../../util';
import { animateScroll } from 'react-scroll'
import { grey } from '@mui/material/colors';
import './Home.scss';

const shuttersSx = {
	borderBottomLeftRadius: '10px',
	borderBottomRightRadius: '10px',
	m: 'auto',
	height: '10px' 
};

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dynamicFlyer: "Indeed",
			timeouts: []
		}
		// this.contactBubble = React.createRef();
		this.hand = React.createRef();
		this.smile = React.createRef();
		this.footer = React.createRef();
		this.logoHover = this.logoHover.bind(this);
		this.logoHoverEnd = this.logoHoverEnd.bind(this);
		this.callFlyer = this.callFlyer.bind(this);
		this.closeFlyer = this.closeFlyer.bind(this);
		this.scrollEvent = this.scrollEvent.bind(this);
	}

	logoHover() {
		this.hand.current.classList.remove("animated", "handTada");
		this.hand.current.classList.add("visible", "animated", "handTada");
		this.smile.current.classList.add("visible");
	}

	logoHoverEnd() {
		const { timeouts } = this.state
		const myself = this;
		const timeout1 = setTimeout(function () {
			myself.hand.current.classList.remove("visible", "animated", "handTada");
			myself.smile.current.classList.remove("visible");
		}, 800);
		this.setState({
			timeouts: [...timeouts, timeout1]
		})
	}

	callFlyer(e) {
		const data = e.currentTarget.getAttribute("data-target");
		this.setState({
			dynamicFlyer: data
		}, () => {
			if(data === 'Indeed') {
				animateScroll.scrollTo(document.querySelector('#sec2').offsetTop - 50, { duration: 400 });
			}
		})
	}

	closeFlyer() {
		this.setState({
			dynamicFlyer: "Indeed"
		})
	}

	scrollEvent() {
		const allCards = document.querySelectorAll(".portfolio-card");

		allCards.forEach((item) => {
			if(isInViewport(item)) {
				item.classList.add("come-in");
			}
		});
	}

	componentDidMount() {
		const { timeouts } = this.state
		const myself = this;
		const allCards = document.querySelectorAll(".portfolio-card");

		const timeout2 = setTimeout(function () {
			myself.logoHover();
			myself.logoHoverEnd();
		}, 2000);
		this.setState({
			timeouts: [...timeouts, timeout2]
		})

		allCards.forEach((item) => {
			if(isInViewport(item)) {
				item.classList.add("come-in");
			}
		});

		window.addEventListener("scroll", this.scrollEvent);
	}

	componentWillUnmount() {
		const { timeouts } = this.state
		timeouts.forEach((item) => {
			clearTimeout(item);
		})
		window.removeEventListener("scroll", this.scrollEvent);
	}

	render() {
		const { dynamicFlyer } = this.state
		const flyerActive = !!dynamicFlyer && dynamicFlyer !== 'Indeed';

		return (
			<React.Fragment>
				<Header pageId="home"/>
				{/* <ContactBubble ref={this.contactBubble}/> */}
				<Box component="section" id="sec1">
					<Box className="container">
						<Box id="img-container" onMouseEnter={this.logoHover} onMouseLeave={this.logoHoverEnd}>
							<img id="chu-logo" src="/imgs/chu-logo.png" alt="Loading Logo..." />
							<Box id="hand" ref={this.hand}><img src="/imgs/hand.png" alt="Loading hand..." /></Box>
							<img id="smile" src="/imgs/smile.png" alt="Loading smile..." ref={this.smile} />
						</Box>
						<h1>{Texts.Hero.title}</h1>
						<p className="contentText">This is <span className="text-blue">Tim Chu</span>, an open-minded problem solver, UX explorer and front end coder.</p>
					</Box>
					<Box className="section-header" id="self-intro">
						<h2>About me</h2>
					</Box>
					<Box className="container container-flyer">
						{flyerActive && <Flyer direction="left" animated={true} content={Texts[dynamicFlyer]}/>}
						<Flyer direction="left" animated={false} content={Texts.SelfIntro} />
						<Box className="flyer-divider">                
							{flyerActive && <Box className="closeBtn" onClick={this.closeFlyer}><Cancel /></Box>}
						</Box>
						<Flyer direction="right" animated={false} content={Texts.Company} callFlyer={this.callFlyer} current={dynamicFlyer}/>
					</Box>
					{dynamicFlyer !== 'Indeed' && (
						<Container sx={{ position: 'absolute', top: '100%', left: '0', right: '0'}}>
							<Box sx={{ width: '98%', backgroundColor: grey[200], ...shuttersSx }}></Box>
							<Box sx={{ width: '95%', backgroundColor: grey[300], ...shuttersSx }}></Box>
						</Container>
					)}
				</Box>
				{dynamicFlyer === 'Indeed' && (
					<Box component="section" id="sec2">
						<Box className="container" sx={{ position: 'absolute', top: '-100px', width: '100%', display: 'flex', justifyContent: 'space-between', py: '0 !important', left: 0, right: 0, px: ['1rem', '1rem', '1rem', 0] }}>
							<Box sx={{ ml: '20%', height: '100px', ...ropeSx }}></Box>
							<Box sx={{ mr: '20%', height: '100px', ...ropeSx }}></Box>
						</Box>
						<IndeedPage />
					</Box>
				)}
				<Box component="section" id="sec3">
					<Box className="section-header">
						<h2>Projects</h2>
					</Box>
					<Box className="container">
						<Box className="container-inner container-inner-wrap">
							<Grid container spacing={3} className="grid-container grid-container-left">
								<Grid item xs={12}>
									<PortfolioCard large content={Texts.OH} />
								</Grid>
							</Grid>
							<Grid container spacing={3} className="grid-container grid-container-right">
								<Grid item xs={12} sm={6} md={12}>
									<PortfolioCard content={Texts.ITS} />
								</Grid>
								<Grid item xs={12} sm={6} md={12}>
									<PortfolioCard content={Texts.DealFindMe} />
								</Grid>
							</Grid>
						</Box>
						<Box className="container-inner">
							<Grid container spacing={3} className="grid-container">
								<Grid item xs={12} sm={6} lg={4}>
									<PortfolioCard content={Texts.Milu} />
								</Grid>
								<Grid item xs={12} sm={6} lg={8}>
									<PortfolioCard content={Texts.MovieEmodex} />
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Box>
				<Box component="section" id="sec4" sx={{
					display: ['flex', 'flex', 'block'],
					flexDirection: 'column'
				}}>
					<Box className="section-header">
						<h2>Lets chat</h2>
						<h1>I am open to<br/><span className="text-blue">creative</span> ideas!</h1>
					</Box>
					<Box component="img" src="/imgs/bgsec4.jpeg" alt="idea" sx={{
						position: ['relative', 'relative', 'absolute'],
						right: ['0', '0', '50px', '200px'],
						top: 0,
						bottom: 0,
						margin: 'auto',
						mb: [6, 6, 'auto'],
						maxHeight: ['200px', '300px']
					}}/>
				</Box>
				<Footer />
			</React.Fragment>
		);
	}
}

export default Home;
