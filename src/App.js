import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Preloader from './components/Preloader';
import Home from './components/Home';
import ITS from './components/ITS';
import IndeedMicroFE from './components/IndeedMicroFE';
// import Maintenance from './components/Maintenance';
// import DFM from './components/DFM';
import './App.scss';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
	typography: {
		fontFamily: "'Roboto', sans-serif"
	}
});

const App = () => (
	<ThemeProvider theme={theme}>
		<Router>
			<React.Fragment>
				<Switch>
					<Route path="/" exact component={Preloader} />
					<Route path="/home" component={Home} />
					<Route path="/its" component={ITS} />
					<Route path="/microfe" exact component={IndeedMicroFE} />
					{/* <Route path="/m" exact component={Maintenance} /> */}
					{/* <Route path="/dfm" component={DFM} /> */}
					<Redirect to="/" />
				</Switch>
			</React.Fragment>
		</Router>
	</ThemeProvider>
);

export default App;
