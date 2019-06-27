import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Preloader from './components/Preloader';
import Home from './components/Home';
import ITS from './components/ITS';
import Dij from './components/Dij';
import './App.css';

class App extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		preloaderShow: true
	// 	}

	// 	this.preloaderContinue = this.preloaderContinue.bind(this);
	// }
	// preloaderContinue(){
	// 	this.setState({
	// 		preloaderShow:false
	// 	})
	// }
	render() {
		// const {preloaderShow} = this.state;
		return (
			<Router>
				<React.Fragment>
					<Route path="/" exact component={Preloader} />
					<Route path="/home" component={Home} />
					<Route path="/its/" component={ITS} />
					<Route path="/siemens/" component={Dij} />
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
