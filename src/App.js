import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme, Box } from '@mui/material';
import Preloader from './components/Preloader';
import Home from './components/Home';
import ITS from './components/ITS';
import IndeedMicroFE from './components/IndeedMicroFE';
import Header from './components/Header';
// import Maintenance from './components/Maintenance';
// import DFM from './components/DFM';
import './App.scss';

const theme = createTheme({
	typography: {
		fontFamily: "'Roboto', sans-serif"
	}
});

const App = () => (
	<ThemeProvider theme={theme}>
		<Router>
			<Box sx={{ display: 'flex', position: 'fixed', width: '100%', height: '100%', overflow: 'hidden', pt: '4.5rem' }}>
				<Header />
				<Box sx={{ width: '100%', overflowY: 'auto' }}>
					<Routes>
						<Route path="/" exact element={<Preloader />} />
						<Route path="/home" element={<Home />} />
						<Route path="/its" element={<ITS />} />
						<Route path="/microfe" element={<IndeedMicroFE />} />
						{/* <Route path="/m" exact element={Maintenance} /> */}
						{/* <Route path="/dfm" element={DFM} /> */}
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</Box>
			</Box>
		</Router>
	</ThemeProvider>
);

export default App;
