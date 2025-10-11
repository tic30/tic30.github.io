import { type CSSProperties } from 'react';
import { motion } from 'motion/react';
import { type Theme, useMediaQuery, useTheme } from '@mui/material';

export const PageTransition = ({
    slideIn = true,
    slideOut = true,
    leftOffset = '6.25rem',
}: {
    slideIn?: boolean;
    slideOut?: boolean;
    leftOffset?: string;
}) => {
    const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
    const theme = useTheme();
    const style: CSSProperties = {
        position: 'fixed',
        top: 0,
        left: leftOffset,
        width: '100%',
        height: '100vh',
        zIndex: 99,
        backgroundColor: theme.palette.text.primary,
    };

    return (
        <>
            {slideIn && isSmUp && (
                <motion.div
                    className="slide-in"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ ...style, transformOrigin: 'bottom' }}
                />
            )}
            {slideOut && isSmUp && (
                <motion.div
                    className="slide-out"
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{ ...style, transformOrigin: 'top' }}
                />
            )}
        </>
    );
};
