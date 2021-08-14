import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Preloader from './components/Preloader';
import Home from './components/Home';
import ITS from './components/ITS';
// import Maintenance from './components/Maintenance';
// import DFM from './components/DFM';
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
						{/* <Route path="/m" exact component={Maintenance} /> */}
						{/* <Route path="/dfm" component={DFM} /> */}
						<Redirect to="/" />
					</Switch>
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
