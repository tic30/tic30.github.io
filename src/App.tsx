import React, { useRef } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  Box,
  colors,
  ThemeOptions,
  useMediaQuery,
  Theme,
} from "@mui/material";
import Preloader from "./components/Preloader";
import Home from "./components/Home";
// import ITS from './components/ITS';
// import IndeedMicroFE from './components/IndeedMicroFE';
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Maintenance from './components/Maintenance';
// import DFM from './components/DFM';

const headingFont = {
  fontFamily: "'Lato', sans-serif",
  fontWeight: 700,
};
const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: headingFont,
    h2: headingFont,
    h4: headingFont,
    body1: {
      color: colors.grey[600],
    },
  },
  shadows: [
    "none",
    `0 0 12px ${colors.grey[100]}`,
    `0 0 12px ${colors.grey[200]}`,
    `5px 5px 20px ${colors.grey[300]}`,
    ...Array<string>(21).fill("none"),
  ] as ThemeOptions["shadows"],
});

const PageContent: React.FC = () => {
  const scrollAreaRef = useRef(null);
  const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          flexDirection: isSmUp ? "row" : "column",
        }}
      >
        <Header scrollAreaRef={scrollAreaRef} />
        <Box ref={scrollAreaRef} sx={{ width: "100%", overflowY: "auto" }}>
          <Routes>
            <Route path="/" element={<Preloader />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/its" element={<ITS />} />
							<Route path="/microfe" element={<IndeedMicroFE />} /> */}
            {/* <Route path="/m" exact element={Maintenance} /> */}
            {/* <Route path="/dfm" element={DFM} /> */}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
          <Footer scrollAreaRef={scrollAreaRef} />
        </Box>
      </Box>
    </>
  );
};

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <PageContent />
    </Router>
  </ThemeProvider>
);

export default App;
