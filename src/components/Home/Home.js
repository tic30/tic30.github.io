import React, { Component } from 'react';
import Header from '../Header';
import Flyer from '../Flyer';
import Texts from '../../texts';
import './Home.scss';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// preloaderShow:this.props.preloaderShow
		}
	}
	render() {
		// const { preloaderContinue, preloaderShow } = this.props
		return (
			<React.Fragment>
				{/* {preloaderShow && (<Preloader continueEvent={preloaderContinue}></Preloader>)} */}
				{/* section 1 */}
				<Header />
				<section id="sec1">
					<div className="container">
						<div id="img-container">
							<img id="chu-logo" src="/imgs/chu-logo.png" alt="Loading Logo..." />
							<div id="hand"><img src="/imgs/hand.png" alt="Loading hand..." /></div>
							<img id="smile3" src="/imgs/smile.png" alt="Loading smile..." />
						</div>
						<h1>{Texts.Hero.title}</h1>
						<p>{Texts.Hero.content}</p>
					</div>
					{/* <div id="sec1-content">
						<img id="chu-logo" src="imgs/icons/chu-logo.png" alt="Loading Logo..." />
						<div id="hand"><img src="imgs/icons/hand.png" alt="Loading hand..." /></div>
						<img id="smile3" src="imgs/icons/smile.png" alt="Loading smile..." />
						<p id="sec1-p">I'M A <span className="sec1-p-span" id="coe" data-toggle="tooltip" data-placement="bottom" title="Now seeking 2019 full time opportunity.">Front End Engineer&nbsp;</span>FROM<span className="sec1-p-span" id="uiux" data-toggle="tooltip" data-placement="bottom" title="@ Mountain View, CA">&nbsp;CMU</span></p>
					</div>
					<div className="arrow_box"></div> */}
				</section>
				<section id="sec2">
					<div className="container">
						<div className="slope"></div>
						<Flyer direction="left" animated="false" content={Texts.SelfIntro} />
						<Flyer direction="right" animated="false" content={Texts.Company} />
					</div>
				</section>
				{/* /end of section 1 */}
				<section></section>
			</React.Fragment>
		);
	}
}

export default Home;
