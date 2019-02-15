import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home/Home';
import ITS from './components/ITS';
import Dij from './components/Dij';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			preloaderShow: true
		}

		this.preloaderContinue = this.preloaderContinue.bind(this);
	}
	preloaderContinue(){
		this.setState({
			preloaderShow:false
		})
	}
	render() {
		const {preloaderShow} = this.state;
		return (
			<div id="pageTop" className="App">
				<Header preloaderShow={preloaderShow}></Header>
				<Router>
					<div>
						<Route path="/" exact render={(props) => <Home {...props} preloaderShow={preloaderShow} preloaderContinue={this.preloaderContinue}/>}/>
						<Route path="/its/" component={ITS} />
						<Route path="/siemens/" component={Dij} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
