import React, { Component } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Cancel from '@mui/icons-material/Cancel';
import { animateScroll } from 'react-scroll'
import { grey } from '@mui/material/colors';
import Header from '../Header';
import Flyer from '../Flyer';
// import ContactBubble from '../ContactBubble';
import PortfolioCard from '../PortfolioCard';
import IndeedPage, { ropeSx } from '../IndeedPage';
import Footer from '../Footer';
import Texts from '../../texts';
import { isInViewport } from '../../util';
import './Home.scss';

const shuttersSx = {
	borderBottomLeftRadius: '10px',
	borderBottomRightRadius: '10px',
	m: 'auto',
	height: '10px'
};

class Home extends Component {
	static scrollEvent() {
		const allCards = document.querySelectorAll(".portfolio-card");

		allCards.forEach((item) => {
			if (isInViewport(item)) {
				item.classList.add("come-in");
			}
		});
	}

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
	}

	componentDidMount() {
		const { timeouts } = this.state
		const myself = this;
		const allCards = document.querySelectorAll(".portfolio-card");

		const timeout2 = setTimeout(() => {
			myself.logoHover();
			myself.logoHoverEnd();
		}, 2000);
		this.setState({
			timeouts: [...timeouts, timeout2]
		})

		allCards.forEach((item) => {
			if (isInViewport(item)) {
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

	callFlyer(e) {
		const data = e.currentTarget.getAttribute("data-target");
		this.setState({
			dynamicFlyer: data
		}, () => {
			if (data === 'Indeed') {
				animateScroll.scrollTo(document.querySelector('#sec2').offsetTop - 50, { duration: 400 });
			}
		})
	}

	closeFlyer() {
		this.setState({
			dynamicFlyer: "Indeed"
		})
	}

	logoHoverEnd() {
		const { timeouts } = this.state
		const myself = this;
		const timeout1 = setTimeout(() => {
			myself.hand.current.classList.remove("visible", "animated", "handTada");
			myself.smile.current.classList.remove("visible");
		}, 800);
		this.setState({
			timeouts: [...timeouts, timeout1]
		})
	}
	
	logoHover() {
		this.hand.current.classList.remove("animated", "handTada");
		this.hand.current.classList.add("visible", "animated", "handTada");
		this.smile.current.classList.add("visible");
	}

	render() {
		const { dynamicFlyer } = this.state
		const flyerActive = !!dynamicFlyer && dynamicFlyer !== 'Indeed';

		return (
			<>
				<Header pageId="home" />
				{/* <ContactBubble ref={this.contactBubble}/> */}
				<Box component="section" id="sec1">
					<Box className="container">
						<Box id="img-container" onMouseEnter={this.logoHover} onMouseLeave={this.logoHoverEnd}>
							<img id="chu-logo" src="/imgs/chu-logo.png" alt="Loading Logo..." />
							<Box id="hand" ref={this.hand}><img src="/imgs/hand.png" alt="Loading hand..." /></Box>
							<img id="smile" src="/imgs/smile.png" alt="Loading smile..." ref={this.smile} />
						</Box>
						<Box sx={{ maxWidth: '350px', mt: [4, 8], mb: 5 }}>
							<Typography className='contentText' sx={{ textTransform: 'uppercase' }}>Hey there, I'm</Typography>
							<Box component="h1" sx={{ textTransform: 'uppercase' }}>Tim Chu</Box>
							<Typography className='contentText'>An open-minded problem solver, UX explorer and front end coder.</Typography>
						</Box>
					</Box>
					<Box className="section-header" id="self-intro">
						<h2>About me</h2>
					</Box>
					<Box className="container container-flyer">
						{flyerActive && <Flyer direction="left" animated content={Texts[dynamicFlyer]} />}
						<Flyer direction="left" animated={false} content={Texts.SelfIntro} />
						<Box className="flyer-divider">
							{flyerActive && <Box className="closeBtn" onClick={this.closeFlyer}><Cancel /></Box>}
						</Box>
						<Flyer direction="right" animated={false} content={Texts.Company} callFlyer={this.callFlyer} current={dynamicFlyer} />
					</Box>
					{dynamicFlyer !== 'Indeed' && (
						<Container sx={{ position: 'absolute', top: '100%', left: '0', right: '0' }}>
							<Box sx={{ width: '98%', backgroundColor: grey[200], ...shuttersSx }} />
							<Box sx={{ width: '95%', backgroundColor: grey[300], ...shuttersSx }} />
						</Container>
					)}
				</Box>
				{dynamicFlyer === 'Indeed' && (
					<Box component="section" id="sec2">
						<Box className="container" sx={{ position: 'absolute', top: '-100px', width: '100%', display: 'flex', justifyContent: 'space-between', py: '0 !important', left: 0, right: 0, px: ['1rem', '1rem', '1rem', 0] }}>
							<Box sx={{ ml: '20%', height: '100px', ...ropeSx }} />
							<Box sx={{ mr: '20%', height: '100px', ...ropeSx }} />
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
						<h1>I am open to<br /><span className="text-blue">creative</span> ideas!</h1>
					</Box>
					<Box className="container"
						sx={{
							position: ['relative', 'relative', 'absolute'],
							height: '100%',
							top: 0,
							left: 0,
							right: 0,
							margin: 'auto',
							mb: [6, 6, 'auto'],
							p: 0,
							display: 'flex',
							justifyContent: ['center', 'center', 'end'],
							alignItems: 'center'
						}}
					>
						<Box component="img" src="/imgs/bgsec4.jpeg" alt="idea" sx={{
							height: ['200px', '300px']
						}} />
					</Box>
				</Box>
				<Footer />
			</>
		);
	}
}

export default Home;
