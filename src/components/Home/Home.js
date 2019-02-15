import React, { Component } from 'react';
import Preloader from './Preloader';
import '../../css/chu-custom.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// preloaderShow:this.props.preloaderShow
		}
	}
	render() {
		const { preloaderContinue, preloaderShow } = this.props
		return (
			<React.Fragment>
				{preloaderShow && (<Preloader continueEvent={preloaderContinue}></Preloader>)}
				{/* section 1 */}
				<section id="sec1" className="text-uppercase">
					<div id="sec1-content">
						<img id="chu-logo" src="imgs/icons/chu-logo.png" alt="Loading Logo..." />
						<div id="hand"><img src="imgs/icons/hand.png" alt="Loading hand..." /></div>
						<img id="smile3" src="imgs/icons/smile.png" alt="Loading smile..." />
						<p id="sec1-p">I'M A <span className="sec1-p-span" id="coe" data-toggle="tooltip" data-placement="bottom" title="Now seeking 2019 full time opportunity.">Front End Engineer&nbsp;</span>FROM<span className="sec1-p-span" id="uiux" data-toggle="tooltip" data-placement="bottom" title="@ Mountain View, CA">&nbsp;CMU</span></p>
					</div>
					<div className="arrow_box"></div>
				</section>
				{/* /end of section 1 */}
			</React.Fragment>
		);
	}
}

export default Home;
