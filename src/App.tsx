import React, { useRef, useState } from "react";
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
  ThemeOptions,
  useMediaQuery,
  Theme,
  colors,
  styled,
  useTheme,
} from "@mui/material";
import Home from "./pages/Home";
import Storybook from "./pages/Storybook";
import IndeedMicroFE from "./pages/IndeedMicroFE";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
import MenuScreen from "./components/MenuScreen";
import { globalStyle } from "./constants";
// import ITS from './components/ITS';
// import Maintenance from './components/Maintenance';
// import DFM from './components/DFM';

const common: ThemeOptions = {
  typography: {
    fontFamily: "'Lato', sans-serif",
    fontSize: 14,
  },
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: `#FFFFFFD9`,
    },
    text: {
      primary: colors.grey[900],
    },
  },
  ...common,
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: `${colors.grey[900]}B3`,
    },
    text: {
      primary: colors.grey[50],
    },
  },
  ...common,
});

const StyledMainContent = styled(Box)(({ theme }) => ({
  width: "100%",
  overflowY: "auto",
  backgroundColor: theme.palette.background.default,
}));

const PageContent: React.FC<{
  toggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ toggleDarkMode }) => {
  const scrollAreaRef = useRef(null);
  const theme = useTheme();
  const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          flexDirection: isSmUp ? "row" : "column",
          color: theme.palette.text.primary,
          ...globalStyle,
        }}
      >
        <MenuScreen
          scrollAreaRef={scrollAreaRef}
          toggleDarkMode={toggleDarkMode}
        />
        <StyledMainContent ref={scrollAreaRef}>
          <Routes>
            <Route path="/" element={<Preloader />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/storybook"
              element={<Storybook scrollAreaRef={scrollAreaRef} />}
            />
            <Route
              path="/microfe"
              element={<IndeedMicroFE scrollAreaRef={scrollAreaRef} />}
            />
            {/* <Route path="/its" element={<ITS />} />*/}
            {/* <Route path="/m" exact element={Maintenance} /> */}
            {/* <Route path="/dfm" element={DFM} /> */}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
          <Footer scrollAreaRef={scrollAreaRef} />
        </StyledMainContent>
      </Box>
    </>
  );
};

const App: React.FC = () => {
  const [darkMode, toggleDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <PageContent toggleDarkMode={toggleDarkMode} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
