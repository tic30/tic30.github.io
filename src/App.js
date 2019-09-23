import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Preloader from './components/Preloader';
import Home from './components/Home';
import ITS from './components/ITS';
import DFM from './components/DFM';
import './App.scss';

class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<Route path="/" exact component={Preloader} />
					<Route path="/home" component={Home} />
					<Route path="/its" component={ITS} />
					<Route path="/dfm" component={DFM} />
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
