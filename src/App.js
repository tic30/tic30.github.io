import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
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
					<Switch>
						<Route path="/" exact component={Preloader} />
						<Route path="/home" component={Home} />
						<Route path="/its" component={ITS} />
						<Route path="/dfm" component={DFM} />
					</Switch>
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
