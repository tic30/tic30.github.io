import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { useLocation, type Location } from 'react-router-dom';
import { useMediaQuery, useTheme, type Theme } from '@mui/material';

const DURATION = 0.8;
const EASE: [number, number, number, number] = [0.77, 0, 0.175, 1];
const STRIPE_SHIFT = 96;

type Phase = 'idle' | 'cover' | 'reveal';

const getViewportWidth = (): number => (typeof window === 'undefined' ? 0 : window.innerWidth);

export const PageFlip: React.FC<{
    render: (location: Location) => ReactNode;
}> = ({ render }) => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [phase, setPhase] = useState<Phase>('idle');
    const [showLoader, setShowLoader] = useState(false);
    const [pendingLocation, setPendingLocation] = useState(location);
    const theme = useTheme();

    const isLgUp = useMediaQuery((t: Theme) => t.breakpoints.up('lg'));
    const isSmUp = useMediaQuery((t: Theme) => t.breakpoints.up('sm'));
    const rollWidth = isLgUp ? 100 : isSmUp ? 60 : 40;

    const [viewportWidth, setViewportWidth] = useState(() => getViewportWidth());
    useEffect(() => {
        const update = () => setViewportWidth(getViewportWidth());
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);
    const rollDistance = Math.max(0, viewportWidth - rollWidth);

    const [lastLocation, setLastLocation] = useState(location);
    if (location !== lastLocation) {
        setLastLocation(location);
        if (location.pathname !== displayLocation.pathname) {
            setPendingLocation(location);
            setPhase('cover');
        }
    }

    const overlayStyle: CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '100vh',
        transformOrigin: 'left center',
        zIndex: 99,
        pointerEvents: 'none',
        backgroundColor: theme.palette.mode === 'dark' ? '#2A2F32' : '#F2F0EF',
        willChange: 'transform',
    };

    const rollBackground =
        theme.palette.mode === 'dark'
            ? 'linear-gradient(90deg, #1a1a1c 0%, #3f4348 20%, #8a8e94 45%, #b8bcc2 55%, #8a8e94 70%, #3f4348 88%, #1a1a1c 100%)'
            : 'linear-gradient(90deg, #0d0d0e 0%, #2a2c2e 20%, #55575a 45%, #6f7276 55%, #55575a 70%, #2a2c2e 88%, #0d0d0e 100%)';

    const rollContainerStyle: CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: rollWidth,
        height: '100vh',
        zIndex: 100,
        pointerEvents: 'none',
        overflow: 'hidden',
        borderRadius: '3px',
        background: rollBackground,
        boxShadow:
            '0 0 28px rgba(0, 0, 0, 0.55), inset 0 34px 26px -22px rgba(0, 0, 0, 0.9), inset 0 -34px 26px -22px rgba(0, 0, 0, 0.9)',
        willChange: 'transform',
    };

    const rollStripesStyle: CSSProperties = {
        position: 'absolute',
        top: 0,
        left: '-50%',
        width: '200%',
        height: '100%',
        backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0, transparent 6px, rgba(0, 0, 0, 0.32) 7px, rgba(0, 0, 0, 0.32) 8px)',
        pointerEvents: 'none',
    };

    const loaderStyle: CSSProperties = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        width: 100,
        height: 100,
        transform: 'translate(-50%, -50%)',
        zIndex: 101,
        pointerEvents: 'none',
    };

    const loaderSrc =
        theme.palette.mode === 'dark' ? '/imgs/icons/tc_icon_dark.png' : '/imgs/icons/tc_icon.png';

    const rollCapStyle = (position: 'top' | 'bottom'): CSSProperties => ({
        position: 'absolute',
        left: -3,
        right: -3,
        height: 10,
        [position]: -4,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, #7a4a1a 0%, #3a1e0a 65%, #1a0d04 100%)',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.6)',
        pointerEvents: 'none',
    });

    return (
        <>
            {render(displayLocation)}
            {phase !== 'idle' && (
                <>
                    <motion.div
                        key="scroll-overlay"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: phase === 'reveal' ? 0 : 1 }}
                        transition={{ duration: DURATION, ease: EASE }}
                        onAnimationComplete={() => {
                            if (phase === 'cover') {
                                setDisplayLocation(pendingLocation);
                                setPhase('reveal');
                            } else {
                                setPhase('idle');
                            }
                        }}
                        style={overlayStyle}
                    />
                    {showLoader && <img src={loaderSrc} alt="Loading…" style={loaderStyle} />}
                    <motion.div
                        key="scroll-roll"
                        initial={{ x: -rollWidth }}
                        animate={{ x: phase === 'reveal' ? -rollWidth : rollDistance }}
                        transition={{ duration: DURATION, ease: EASE }}
                        onUpdate={(latest) => {
                            const x = latest.x as number;
                            setShowLoader(x + rollWidth / 2 > window.innerWidth / 2);
                        }}
                        style={rollContainerStyle}
                    >
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: phase === 'reveal' ? 0 : -STRIPE_SHIFT }}
                            transition={{ duration: DURATION, ease: EASE }}
                            style={rollStripesStyle}
                        />
                        <div style={rollCapStyle('top')} />
                        <div style={rollCapStyle('bottom')} />
                    </motion.div>
                </>
            )}
        </>
    );
};
