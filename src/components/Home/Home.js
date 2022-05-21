import React, { Component, useEffect } from 'react';
import { Container, Box, colors, Grid, Paper, Typography } from '@mui/material';
import Cancel from '@mui/icons-material/Cancel';
import { animateScroll } from 'react-scroll'
import { grey } from '@mui/material/colors';
import Flyer from '../Flyer';
// import ContactBubble from '../ContactBubble';
import PortfolioCard from '../PortfolioCard';
import IndeedPage, { ropeSx } from '../IndeedPage';
import Blogs from '../Blogs';
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

const fadeInAnimation = {
	opacity: 0,
	animationName: 'fadeInUp',
	animationDuration: '0.5s',
	animationTimingFunction: 'ease-in-out',
	animationFillMode: 'forwards'
}

const introCardSx = {
	outer: {
		display: 'flex',
		flexDirection: 'column',
		p: 3,
		gap: 3,
		minWidth: '300px',
		width: '35%',
		backgroundColor: 'rgba(255,255,255,0.98)',
		borderRadius: 2,
		boxShadow: `0 0 12px ${colors.grey[200]}`
	},
	inner: {
		display: 'flex',
		flexDirection: 'row-reverse',
		justifyContent: 'flex-end',
		alignItems: 'center',
		gap: 3
	},
	img1: {
		maxHeight: '2.5rem',
		maxWidth: '2.5rem'
	},
	img2: {
		maxHeight: '2.5rem',
		maxWidth: '4rem'
	}
};

// class Home extends Component {
// 	static scrollEvent() {
// 		const allCards = document.querySelectorAll(".portfolio-card");

// 		allCards.forEach((item) => {
// 			if (isInViewport(item)) {
// 				item.classList.add("come-in");
// 			}
// 		});
// 	}

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			dynamicFlyer: "Indeed",
// 			timeouts: []
// 		}
// 		// this.contactBubble = React.createRef();
// 		this.hand = React.createRef();
// 		this.smile = React.createRef();
// 		this.footer = React.createRef();
// 		this.logoHover = this.logoHover.bind(this);
// 		this.logoHoverEnd = this.logoHoverEnd.bind(this);
// 		this.callFlyer = this.callFlyer.bind(this);
// 		this.closeFlyer = this.closeFlyer.bind(this);
// 	}

// 	componentDidMount() {
// 		const { timeouts } = this.state
// 		const myself = this;
// 		const allCards = document.querySelectorAll(".portfolio-card");

// 		const timeout2 = setTimeout(() => {
// 			myself.logoHover();
// 			myself.logoHoverEnd();
// 		}, 2000);
// 		this.setState({
// 			timeouts: [...timeouts, timeout2]
// 		})

// 		allCards.forEach((item) => {
// 			if (isInViewport(item)) {
// 				item.classList.add("come-in");
// 			}
// 		});

// 		window.addEventListener("scroll", this.scrollEvent);
// 	}

// 	componentWillUnmount() {
// 		const { timeouts } = this.state
// 		timeouts.forEach((item) => {
// 			clearTimeout(item);
// 		})
// 		window.removeEventListener("scroll", this.scrollEvent);
// 	}

// 	callFlyer(e) {
// 		const data = e.currentTarget.getAttribute("data-target");
// 		this.setState({
// 			dynamicFlyer: data
// 		}, () => {
// 			if (data === 'Indeed') {
// 				animateScroll.scrollTo(document.querySelector('#sec2').offsetTop - 50, { duration: 400 });
// 			}
// 		})
// 	}

// 	closeFlyer() {
// 		this.setState({
// 			dynamicFlyer: "Indeed"
// 		})
// 	}

// 	logoHoverEnd() {
// 		const { timeouts } = this.state
// 		const myself = this;
// 		const timeout1 = setTimeout(() => {
// 			myself.hand.current.classList.remove("visible", "animated", "handTada");
// 			myself.smile.current.classList.remove("visible");
// 		}, 800);
// 		this.setState({
// 			timeouts: [...timeouts, timeout1]
// 		})
// 	}

// 	logoHover() {
// 		this.hand.current.classList.remove("animated", "handTada");
// 		this.hand.current.classList.add("visible", "animated", "handTada");
// 		this.smile.current.classList.add("visible");
// 	}

// 	render() {
// 		const { dynamicFlyer } = this.state
// 		const flyerActive = !!dynamicFlyer && dynamicFlyer !== 'Indeed';

const Home = ({
	scrollAreaRef
}) => {
	const scrollEvent = () => {
		const allCards = document.querySelectorAll(".come-in-container");

		allCards.forEach((item) => {
			if (isInViewport(item)) {
				item.classList.add("come-in");
			}
		});
	};

	useEffect(() => {
		scrollAreaRef.current?.addEventListener("scroll", scrollEvent);

		return () => scrollAreaRef.current?.removeEventListener("scroll", scrollEvent);
	}, []);

	return (
		<>
			{/* <ContactBubble ref={this.contactBubble}/> */}
			<Box component="section" id="self-intro" sx={{
				minHeight: '100vh',
				backgroundImage: 'url(/imgs/bgsec1.png)',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-evenly'
			}}>
				<Container sx={{
					my: 0,
					display: 'flex',
					flexDirection: 'column',
					'*': {
						textTransform: 'uppercase'
					}
				}}>
					<Typography variant="h4" sx={{
						color: colors.grey[500]
					}}>Hey there, I'm</Typography>
					<Typography variant="h1" sx={{
						lineHeight: 1,
						mb: 2
					}}>Tim Chu</Typography>
					<Typography variant='h6' sx={{
						color: colors.grey[500],
						lineHeight: 1.8
					}}>An open-minded problem solver,<br/>User Experience explorer &<br/>front end coder.</Typography>
					{/* <Box
						id="img-container" 
						onMouseEnter={this.logoHover} 
						onMouseLeave={this.logoHoverEnd}
					>
						<img id="chu-logo" src="/imgs/chu-logo.png" alt="Loading Logo..." />
						<Box id="hand" ref={this.hand}><img src="/imgs/hand.png" alt="Loading hand..." /></Box>
						<img id="smile" src="/imgs/smile.png" alt="Loading smile..." ref={this.smile} />
					</Box> */}
				</Container>
				<Container sx={{ my: 0, display: 'flex', gap: '2rem' }}>
					<Paper sx={introCardSx.outer}>
						<Typography variant="h5">I seek challenges,<br/>in and out of work.</Typography>
						<Typography>{Texts.SelfIntro.content}</Typography>
						<Box sx={introCardSx.inner}>
							{Texts.SelfIntro.icons.map((item, id) => (
								<Box
									component="img"
									key={`flyer-left-icon${id}`}
									src={`/imgs/${item.src}`}
									alt="Flyer Icon"
									sx={introCardSx.img1}
								/>
							))}
						</Box>
					</Paper>
					<Paper sx={introCardSx.outer}>
						<Typography variant="h5">UX,<br/>Front end, and Fun</Typography>
						<Typography>{Texts.Company.content}</Typography>
						<Box sx={introCardSx.inner}>
							{Texts.Company.icons.map((item, id) => (
								<Box
									component="img"
									key={`flyer-left-icon${id}`}
									src={`/imgs/${item.src}`}
									alt="Flyer Icon"
									sx={introCardSx.img2}
								/>
							))}
						</Box>
					</Paper>
					{/* {flyerActive && <Flyer direction="left" animated content={Texts[dynamicFlyer]} />}
						<Flyer direction="left" animated={false} content={Texts.SelfIntro} />
						<Box className="flyer-divider">
							{flyerActive && <Box className="closeBtn" onClick={this.closeFlyer}><Cancel /></Box>}
						</Box>
						<Flyer direction="right" animated={false} content={Texts.Company} callFlyer={this.callFlyer} current={dynamicFlyer} /> */}
				</Container>
				{/* {dynamicFlyer !== 'Indeed' && (
						<Container sx={{ position: 'absolute', top: '100%', left: '0', right: '0' }}>
							<Box sx={{ width: '98%', backgroundColor: grey[200], ...shuttersSx }} />
							<Box sx={{ width: '95%', backgroundColor: grey[300], ...shuttersSx }} />
						</Container>
					)} */}
				<Box sx={{
					position: 'absolute',
					width: '100%',
					bottom: 0,
					height: '8%',
					background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,0.5) 70%, rgba(255,255,255) 100%)'
				}}/>
			</Box>
			{/* {dynamicFlyer === 'Indeed' && ( */}
			<Box component="section" id="work" sx={{ pb: '5rem' }}>
				{/* <Container sx={{ position: 'absolute', top: '-100px', width: '100%', display: 'flex', justifyContent: 'space-between', py: '0 !important', left: 0, right: 0, px: ['1rem', '1rem', '1rem', 0] }}>
						<Box sx={{ ml: '20%', height: '100px', ...ropeSx }} />
						<Box sx={{ mr: '20%', height: '100px', ...ropeSx }} />
					</Box> */}
				<Container className="section-header">
					<Typography variant="h3">Work at Indeed</Typography>
				</Container>
				<Container>
					<IndeedPage />
				</Container>
			</Box>
			{/* )} */}
			<Box component="section" id="blog" sx={{ minHeight: 'auto', pb: '7rem' }}>
				<Container className="section-header">
					<Typography variant="h3">Blog</Typography>
				</Container>
				<Container>
					<Blogs />
				</Container>
			</Box>
			<Box component="section" id="projects">
				<Box className="section-header">
					<Typography variant="h3">Projects</Typography>
				</Box>
				<Container>
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
				</Container>
			</Box>
			<Box component="section" id="connect" sx={{
				display: ['flex', 'flex', 'block'],
				flexDirection: 'column'
			}}>
				<Box className="section-header">
					<Typography variant="h3">Lets chat</Typography>
					{/* <Box sx={{ display: 'flex', justifyContent: 'space-between'}}> */}
					<Typography variant="h2">I am open to<br /><span className="text-blue">creative</span> ideas!</Typography>
				</Box>
				<Container
					sx={{
						position: ['relative', 'relative', 'absolute'],
						height: '100%',
						top: 0,
						left: 0,
						right: 0,
						margin: 'auto',
						mb: [6, 6, 'auto'],
						p: [0, 0, 6],
						display: 'flex',
						justifyContent: ['center', 'center', 'end'],
						alignItems: 'end'
					}}
				>
					<Box component="img" src="/imgs/bgsec4.jpeg" alt="idea" sx={{
						height: ['200px', '300px']
					}} />
					{/* </Box> */}
				</Container>
				{/* </Box> */}
			</Box>
			{/* <Footer /> */}
		</>
	);
}

export default Home;
