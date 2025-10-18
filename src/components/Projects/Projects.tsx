import React from 'react';
import { Box, Button, Paper, Typography, useTheme } from '@mui/material';
import { type SystemStyleObject } from '@mui/system';
import { Outlet, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { indeedProjects } from '../../constants';
import { PageTransition } from '../PageTransition';

const thumbnailCardRotate = 11;
const thumbnailCardSx: SystemStyleObject = {
    border: 'none',
    borderRadius: 4,
    width: ['25%', '200px'],
    height: ['auto', '25%'],
    transformStyle: 'preserve-3d',
    transform: ['none', `rotateY(${thumbnailCardRotate}deg) translateX(0)`],
    scale: `calc(1 - (${thumbnailCardRotate} / 100))`,
    transformOrigin: '20% center',
    transitionDuration: '200ms',
    transitionProperty: 'transform, opacity',
    opacity: '0.85',
};
const titleSx: SystemStyleObject = {
    position: 'absolute',
    inset: 0,
    p: 1,
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: ['0.875rem', '1rem', 'auto'],
};

const Dock: React.FC = () => {
    const theme = useTheme();
    const location = useLocation();
    const currentPage = location.pathname.split('/').at(-1);
    const thumbnailCardHoverSx: SystemStyleObject = {
        '&:hover, &.active': {
            opacity: '1',
            transform: ['none', `rotateY(${thumbnailCardRotate - 5}deg) translateX(10px)`],
        },
    };
    const btnSx: (active: boolean) => SystemStyleObject = (active) => ({
        width: '100%',
        height: '100%',
        p: 0,
        color: active ? theme.palette.text.invert : theme.palette.text.primary,
        backgroundColor: active
            ? theme.palette.background.invert
            : theme.palette.background.default,
        '&:hover': {
            backgroundColor: theme.palette.background.invert,
            color: theme.palette.text.invert,
        },
    });

    return (
        <Box
            sx={{
                position: ['static', 'sticky'],
                top: 0,
                zIndex: 1,
                height: ['auto', '100vh'],
                pl: ['0', '6.25rem'],
                pb: ['1rem', '0'],
                overflowX: 'visible',
                flexShrink: 0,
            }}
        >
            <Box
                sx={{
                    height: ['8rem', '80vh'],
                    mt: ['4.5rem', '10vh'],
                    px: '1.25rem',
                    position: 'relative',
                    perspective: [0, '300px'],
                    display: ['flex', 'block'],
                }}
            >
                {indeedProjects.map((p) => (
                    <Paper
                        key={`project-thumbnail-${p.name}`}
                        sx={{ ...thumbnailCardSx, ...thumbnailCardHoverSx }}
                        className={currentPage === p.name ? 'active' : ''}
                    >
                        <Button
                            component={HashLink}
                            to={`/projects/${p.name}`}
                            sx={btnSx(currentPage === p.name)}
                        >
                            <Typography variant="h6" sx={titleSx}>
                                {p.title}
                            </Typography>
                        </Button>
                    </Paper>
                ))}
                {Array.from({ length: 2 }).map((_, index) => (
                    <Paper key={`project-thumbnail-${index}`} sx={thumbnailCardSx}>
                        <Typography
                            variant="h6"
                            sx={{
                                ...titleSx,
                                p: 4,
                                backgroundColor: theme.palette.background.default,
                                fontColor: theme.palette.text.secondary,
                            }}
                        >
                            Coming...
                        </Typography>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};

const Projects: React.FC = () => (
    <Box sx={{ display: 'flex', flexDirection: ['column', 'row'] }}>
        <Dock />
        <Paper
            sx={{
                position: 'relative',
                zIndex: 1,
                mt: [0, 2],
                py: 4,
                border: 'none',
                borderRadius: 0,
                borderStartStartRadius: [0, '2rem', '5rem'],
                boxShadow: 'none',
                flexGrow: 1,
            }}
        >
            <Outlet />
        </Paper>
        <PageTransition />
    </Box>
);

export default Projects;
