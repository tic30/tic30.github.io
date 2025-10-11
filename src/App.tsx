import React, { useRef, useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import {
    ThemeProvider,
    createTheme,
    Box,
    type ThemeOptions,
    useMediaQuery,
    type Theme,
    colors,
    styled,
    useTheme,
} from '@mui/material';
import Home from './pages/Home';
import Preloader from './components/Preloader';
import Footer from './components/Footer';
import MenuScreen from './components/MenuScreen';
import { globalStyle } from './constants';
import { AnimatePresence } from 'motion/react';
// import ITS from './components/ITS';
// import Maintenance from './components/Maintenance';
// import DFM from './components/DFM';
const Projects = React.lazy(() => import('./components/Projects'));
const Storybook = React.lazy(() => import('./pages/Storybook'));
const IndeedMicroFE = React.lazy(() => import('./pages/IndeedMicroFE'));

const common: ThemeOptions = {
    typography: {
        fontFamily: "'Lato', sans-serif",
        fontSize: 14,
    },
};

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            paper: `#FFFFFFD9`,
        },
        text: {
            primary: colors.grey[900],
        },
        // success: {
        //   main: "#2e7d32",
        //   light: "#4caf50",
        //   dark: "#35574b",
        //   contrastText: "#fff",
        // },
        // warning: {
        //   main: "#995105",
        //   light: "#ff9800",
        //   dark: "#995105",
        //   contrastText: "#fff",
        // },
    },
    ...common,
});

// Borrowed from node_modules/@mui/material/styles/shadows.js
// const shadowKeyUmbraOpacity = 0.2;
// const shadowKeyPenumbraOpacity = 0.14;
// const shadowAmbientShadowOpacity = 0.12;
// function createShadow(...px: number[]) {
//   return [
//     `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(255,255,255,${shadowKeyUmbraOpacity})`,
//     `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(255,255,255,${shadowKeyPenumbraOpacity})`,
//     `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(255,255,255,${shadowAmbientShadowOpacity})`,
//   ].join(",");
// }

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            paper: `${colors.grey[900]}B3`,
        },
        text: {
            primary: colors.grey[50],
        },
    },
    // shadows: [
    //   "none",
    //   createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    //   createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    //   createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    //   createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    //   createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    //   ...Array(20).fill("none"),
    // ],
    ...common,
});

const StyledMainContent = styled(Box)(({ theme }) => ({
    width: '100%',
    overflowY: 'auto',
    backgroundColor: theme.palette.background.default,
}));

const PageContent: React.FC<{
    toggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ toggleDarkMode }) => {
    const location = useLocation();
    const scrollAreaRef = useRef<HTMLDivElement | null>(null);
    const theme = useTheme();
    const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    position: 'fixed',
                    width: '100%',
                    height: '100vh',
                    overflow: 'hidden',
                    flexDirection: isSmUp ? 'row' : 'column',
                    color: theme.palette.text.primary,
                    backgroundColor: theme.palette.text.primary,
                    ...globalStyle,
                }}
            >
                <MenuScreen scrollAreaRef={scrollAreaRef} toggleDarkMode={toggleDarkMode} />
                <StyledMainContent ref={scrollAreaRef}>
                    <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<Preloader />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/projects" element={<Projects />}>
                                <Route
                                    path="microfe"
                                    element={<IndeedMicroFE scrollAreaRef={scrollAreaRef} />}
                                />
                                <Route
                                    path="storybook"
                                    element={<Storybook scrollAreaRef={scrollAreaRef} />}
                                />
                                <Route index path="*" element={<Navigate to="microfe" replace />} />
                            </Route>
                            {/* <Route path="/its" element={<ITS />} />*/}
                            {/* <Route path="/m" exact element={Maintenance} /> */}
                            {/* <Route path="/dfm" element={DFM} /> */}
                            <Route path="*" element={<Navigate to="/home" />} />
                        </Routes>
                        <Footer scrollAreaRef={scrollAreaRef} />
                    </AnimatePresence>
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
