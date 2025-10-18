import React from 'react';
import { Box, Button, Paper, Typography, useTheme } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export interface FooterType {
    scrollAreaRef: React.RefObject<HTMLDivElement | null>;
}

const Footer: React.FC<FooterType> = ({ scrollAreaRef }) => {
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                position: 'relative',
                py: [4, 4, 8],
                maxWidth: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Button
                variant="text"
                onClick={() => scrollAreaRef.current?.scrollTo(0, 0)}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: theme.palette.text.secondary,
                    '&, & *': {
                        transition: 'none',
                    },
                    ':hover': {
                        backgroundColor: 'transparent',
                        color: theme.palette.text.primary,
                        '> div': {
                            backgroundColor: theme.palette.background.default,
                            boxShadow: 3,
                        },
                    },
                }}
            >
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: '.25rem',
                        mb: 1,
                        width: '4rem',
                        borderRadius: 2,
                        boxShadow: 'none',
                    }}
                >
                    <KeyboardArrowUpIcon sx={{ fontSize: 32 }} />
                    <KeyboardArrowUpIcon sx={{ fontSize: 32, mt: -3 }} />
                </Paper>
                <Typography>Back to top</Typography>
            </Button>
        </Box>
    );
};

export default Footer;
