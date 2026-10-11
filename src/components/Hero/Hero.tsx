import { Box, Button, Container, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { HashLink } from 'react-router-hash-link';
import { RESUME } from '../../constants';

const EASE = [0.16, 1, 0.3, 1] as const;

const stack: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const rise: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const ctaSx = {
    borderRadius: 3,
    px: 3,
    py: 1.25,
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: 700,
    whiteSpace: 'nowrap',
    boxShadow: 'none',
    '@media (prefers-reduced-motion: no-preference)': {
        transition: 'transform 0.15s ease',
        '&:active': { transform: 'scale(0.98)' },
    },
    '&:hover': { boxShadow: 'none' },
};

interface HeroProps {
    /** Right-column visual (illustration or portrait). Omit to render a single column. */
    visual?: React.ReactNode;
}

/**
 * Asymmetric split hero: copy on the left, optional visual on the right.
 * Entry motion is a single staggered rise that collapses to static under
 * prefers-reduced-motion.
 */
const Hero: React.FC<HeroProps> = ({ visual }) => {
    const reduce = useReducedMotion();

    return (
        <Container
            component={motion.div}
            variants={stack}
            initial={reduce ? false : 'hidden'}
            animate="show"
            maxWidth="xl"
            sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: 'minmax(0, 1fr)',
                    md: visual ? 'minmax(0, 1fr) minmax(0, 1fr)' : 'minmax(0, 1fr)',
                },
                alignItems: 'center',
                columnGap: { md: 8 },
                rowGap: { xs: 5, md: 0 },
                pt: { xs: 2, md: 4 },
                pb: { xs: 4, md: 6 },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    maxWidth: '40rem',
                    minWidth: 0,
                }}
            >
                <Typography
                    component={motion.p}
                    variants={rise}
                    variant="h6"
                    sx={{ color: 'text.secondary', fontWeight: 400, m: 0 }}
                >
                    Hi, I&apos;m
                </Typography>
                <Typography
                    component={motion.h1}
                    variants={rise}
                    variant="h1"
                    sx={{
                        fontSize: ['3.25rem', '4.25rem', '5.5rem'],
                        fontWeight: 700,
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                        m: 0,
                    }}
                >
                    Tim Chu
                </Typography>
                <Typography
                    component={motion.p}
                    variants={rise}
                    variant="h6"
                    sx={{
                        fontWeight: 400,
                        lineHeight: 1.6,
                        color: 'text.secondary',
                        maxWidth: '34rem',
                        m: 0,
                    }}
                >
                    A{' '}
                    <Box component="span" sx={{ color: 'text.primary', fontWeight: 700 }}>
                        front end
                    </Box>{' '}
                    biased full-stack engineer. Member of Technical Staff at Everpure, 8+ years
                    building React platforms and design systems.
                </Typography>
                <Box
                    component={motion.div}
                    variants={rise}
                    sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, pt: 1 }}
                >
                    <Button
                        component={HashLink}
                        smooth
                        to="/#work"
                        variant="contained"
                        color="primary"
                        size="large"
                        disableElevation
                        endIcon={<ArrowDownwardIcon />}
                        sx={ctaSx}
                    >
                        My work
                    </Button>
                    <Button
                        component="a"
                        href={RESUME}
                        target="_blank"
                        rel="noreferrer"
                        variant="outlined"
                        color="inherit"
                        size="large"
                        endIcon={<OpenInNewIcon />}
                        sx={{ ...ctaSx, borderColor: 'divider' }}
                    >
                        Resume
                    </Button>
                </Box>
            </Box>
            {visual ? (
                <Box
                    component={motion.div}
                    variants={rise}
                    sx={{
                        justifySelf: { xs: 'start', md: 'end' },
                        width: { xs: '100%', sm: '28rem', md: '100%' },
                        minWidth: 0,
                        maxWidth: '100%',
                    }}
                >
                    {visual}
                </Box>
            ) : null}
        </Container>
    );
};

export default Hero;
