import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../Header';
import Flyer from '../Flyer';
import ContactBubble from '../ContactBubble';
import PortfolioCard from '../PortfolioCard';
import Texts from '../../texts';
// import { isInViewport, detectScrollDirection } from '../../util';
import './ITS.scss';

class ITS extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dynamicFlyer: ""
		}
	}

	componentWillMount() {
		window.scrollTo(0,0);
	}

	render() {
		const { dynamicFlyer } = this.state

		return (
			<React.Fragment>
				<Header />
				<ContactBubble ref={this.contactBubble}/>
				<section id="its-sec1">
					<div className="container">
						<h1>{Texts.Hero.title}</h1>
						<p className="contentText">{Texts.Hero.content}</p>
					</div>
				</section>
				<section id="its-sec2">
					<div className="section-header">
						<h2>About me</h2>
					</div>
					<div className="container">
						{dynamicFlyer && <Flyer direction="left" animated="true" content={Texts[dynamicFlyer]} />}
						<Flyer direction="left" animated="false" content={Texts.SelfIntro} />
						<Flyer direction="right" animated="false" content={Texts.Company} callFlyer={this.callFlyer}/>
					</div>
				</section>
				<section id="its-sec3">
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
				<section id="its-sec4">
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

export default ITS;
