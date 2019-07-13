import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../Header';
import Flyer from '../Flyer';
import ContactBubble from '../ContactBubble';
import PortfolioCard from '../PortfolioCard';
import Texts from '../../texts';
import { isInViewport, detectScrollDirection } from '../../util';
import './Home.scss';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dynamicFlyer: "",
			timeouts: []
		}
		this.contactBubble = React.createRef();
		this.hand = React.createRef();
		this.smile = React.createRef();
		this.footer = React.createRef();
		this.logoHover = this.logoHover.bind(this);
		this.logoHoverEnd = this.logoHoverEnd.bind(this);
		this.callFlyer = this.callFlyer.bind(this);
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
		})
	}

	componentDidMount() {
		const { timeouts } = this.state
		const myself = this;
		const allCards = document.querySelectorAll(".portfolio-card");
		const contactBubble = this.contactBubble.current;

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

		document.addEventListener("scroll", this.scrollEvent, false)

		detectScrollDirection((dir)=> {
			if(dir==="up" && (window.innerHeight + window.scrollY + 300) <= document.body.offsetHeight && document.querySelector(".contact-bubble-popup-container").classList.contains("show1")){
				contactBubble.togglePopup();
			}
		});
	}

	scrollEvent() {
		const allCards = document.querySelectorAll(".portfolio-card");

		allCards.forEach((item) => {
			if(isInViewport(item)) {
				item.classList.add("come-in");
			}
		});

		if((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !document.querySelector(".contact-bubble-popup-container").classList.contains("show1")){
			this.contactBubble.current.togglePopup();
		}
	}

	componentWillUnmount() {
		const { timeouts } = this.state
		timeouts.forEach((item) => {
			clearTimeout(item);
		})
		document.removeEventListener("scroll", this.scrollEvent, false);
	}

	render() {
		const { dynamicFlyer } = this.state

		return (
			<React.Fragment>
				<Header />
				<ContactBubble ref={this.contactBubble}/>
				<section id="sec1">
					<div className="container">
						<div id="img-container" onMouseEnter={this.logoHover} onMouseLeave={this.logoHoverEnd}>
							<img id="chu-logo" src="/imgs/chu-logo.png" alt="Loading Logo..." />
							<div id="hand" ref={this.hand}><img src="/imgs/hand.png" alt="Loading hand..." /></div>
							<img id="smile" src="/imgs/smile.png" alt="Loading smile..." ref={this.smile} />
						</div>
						<h1>{Texts.Hero.title}</h1>
						<p className="contentText">{Texts.Hero.content}</p>
					</div>
				</section>
				<section id="sec2">
					<div className="section-header">
						<h2>About me</h2>
					</div>
					<div className="container">
						{dynamicFlyer && <Flyer direction="left" animated="true" content={Texts[dynamicFlyer]} />}
						<Flyer direction="left" animated="false" content={Texts.SelfIntro} />
						<Flyer direction="right" animated="false" content={Texts.Company} callFlyer={this.callFlyer}/>
					</div>
				</section>
				<section id="sec3">
					<div className="section-header">
						<h2>Projects</h2>
					</div>
					<div className="container">
						<div className="container-inner">
							<Grid container spacing={3} className="grid-container grid-container-left">
								<Grid item xs={12}>
									<PortfolioCard large content={Texts.ITS} />
								</Grid>
							</Grid>
							<Grid container spacing={3} className="grid-container grid-container-right">
								<Grid item xs={12}>
									<PortfolioCard content={Texts.DealFindMe} />
								</Grid>
								<Grid item xs={12}>
									<PortfolioCard content={Texts.Milu} />
								</Grid>
							</Grid>
						</div>
						<div className="container-inner">
							<Grid container spacing={3} className="grid-container">
								<Grid item xs={12} sm={6} md={4}>
									<PortfolioCard content={Texts.EthereumWallet} />
								</Grid>
								<Grid item xs={12} sm={6} md={8}>
									<PortfolioCard content={Texts.MovieEmodex} />
								</Grid>
							</Grid>
						</div>
					</div>
				</section>
				<section id="sec4">
					<div className="section-header">
						<h2>Lets chat</h2>
						<h1>I am open to<br/>creative ideas!</h1>
					</div>
					<footer ref={this.footer}>Copyright © 2016 - 2019 Chu, Tianxin. All rights reserved.</footer>
				</section>
			</React.Fragment>
		);
	}
}

export default Home;
