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
const Projects = React.lazy(() => import('./components/Projects'));
const Storybook = React.lazy(() => import('./pages/Storybook'));
const IndeedMicroFE = React.lazy(() => import('./pages/IndeedMicroFE'));

const common: ThemeOptions = {
    typography: {
        fontFamily: "'Lato', sans-serif",
        fontSize: 14,
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backgroundImage:
                        'linear-gradient(135deg, rgba(255,255,255,0.20), rgba(255,255,255,0.06))',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backgroundImage:
                        'linear-gradient(135deg, rgba(255,255,255,0.20), rgba(255,255,255,0.06))',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
                },
            },
        },
    },
};

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            light: 'rgba(255, 255, 255, 0.4)',
            darker: 'rgba(20, 20, 20, 0.1)',
            paper: 'rgba(255, 255, 255, 0.2)',
            invert: 'rgba(20, 20, 20, 0.9)',
        },
        text: {
            primary: colors.grey[900],
            invert: colors.grey[50],
        },
    },
    ...common,
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            light: 'rgba(255, 255, 255, 0.2)',
            darker: 'rgba(240, 240, 240, 0.7)',
            paper: 'rgba(255, 255, 255, 0.2)',
            invert: 'rgba(240, 240, 240, 0.8)',
        },
        text: {
            primary: colors.grey[50],
            invert: colors.grey[900],
        },
    },
    ...common,
});

const StyledMainContent = styled(Box)(({ theme }) => ({
    width: '100%',
    overflowY: 'auto',
    backgroundColor: theme.palette.background.default,
    backgroundImage:
        theme.palette.mode === 'dark' ? 'url(/imgs/bgsec1-dark.png)' : 'url(/imgs/bgsec1.png)',
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
