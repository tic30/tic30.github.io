import { Box, Button, Card, CardContent, Paper, Typography, useTheme } from '@mui/material';
import { type SystemStyleObject, type Theme, useMediaQuery } from '@mui/system';
import React, { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { indeedProjects } from '../../constants';

const thumbnailCardRotate = 11;
const thumbnailCardSx: SystemStyleObject = {
    border: 'none',
    borderRadius: 4,
    width: '200px',
    height: '25%',
    transformStyle: 'preserve-3d',
    transform: `rotateY(${thumbnailCardRotate}deg) translateX(0)`,
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
};

const Dock: React.FC = () => {
    const theme = useTheme();
    const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
    const location = useLocation();
    const currentPage = location.pathname.split('/').at(-1);
    const thumbnailCardHoverSx: SystemStyleObject = {
        '&:hover, &.active': {
            opacity: '1',
            transform: `rotateY(${thumbnailCardRotate - 5}deg) translateX(10px)`,
            //             'a:hover': {
            //                 background: `linear-gradient(235deg, ${green[200]}80, ${green[200]}00 70.71%),
            //   linear-gradient(100deg, ${blue[200]}80, ${blue[200]}00 70.71%)`,
            //             },
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
                display: isSmUp ? 'block' : 'none',
                position: 'absolute',
                zIndex: 1,
                insetBlock: '0',
                height: '100vh',
                pl: '7.5rem',
            }}
        >
            <Box
                sx={{
                    height: '80vh',
                    mt: '10vh',
                    position: 'relative',
                    perspective: '300px',
                }}
            >
                {indeedProjects.map((p) => (
                    <Card
                        key={`project-thumbnail-${p.name}`}
                        sx={{ ...thumbnailCardSx, ...thumbnailCardHoverSx }}
                        className={currentPage === p.name ? 'active' : ''}
                    >
                        <CardContent sx={{ p: 0, height: '100%' }}>
                            <Button
                                component={HashLink}
                                to={`/projects/${p.name}`}
                                sx={btnSx(currentPage === p.name)}
                            >
                                <Typography variant="h6" sx={titleSx}>
                                    {p.title}
                                </Typography>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
                {Array.from({ length: 2 }).map((_, index) => (
                    <Card key={`project-thumbnail-${index}`} sx={thumbnailCardSx}>
                        <CardContent sx={{ p: 0, height: '100%' }}>
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
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

const Projects: React.FC = () => {
    const scrollAreaRef = useRef(null);
    const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

    return (
        <Box
            ref={scrollAreaRef}
            sx={{
                overflowY: 'auto',
            }}
        >
            <Dock />
            <Box sx={isSmUp ? { ml: '20rem', pt: 2 } : {}}>
                <Paper
                    sx={{
                        border: 'none',
                        borderRadius: 0,
                        borderStartStartRadius: '5rem',
                    }}
                >
                    <Outlet context={scrollAreaRef} />
                </Paper>
            </Box>
        </Box>
    );
};

export default Projects;
