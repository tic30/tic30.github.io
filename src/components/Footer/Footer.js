import React from 'react';
import { Box, colors, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MediaIcons from '../MediaIcons';
// import './Footer.scss';

const Footer = ({
    scrollAreaRef
}) => (
    <Box 
        component="footer"
        sx={{
            position: 'relative',
            py: 10,
            color: colors.grey[500],
            maxWidth: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            ':hover': {
                cursor: 'pointer',
                color: colors.blue[800],
                '> div': {
                    border: `2px solid ${colors.blue[800]}`
                }
            }
        }}
        tabIndex="0"
        onClick={() => scrollAreaRef.current?.scrollTo(0,0)}
    >
        {/* Copyright © 2016 - 2022 TC */}
        {/* <MediaIcons sx={{ ml: 2, mr: 0, my: 0 }} iconSx={{ width: '20px', height: '20px'}} /> */}
        <Box 
            sx={{
                p: '.25rem',
                mb: 1,
                width: '4rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: `2px solid ${colors.grey[300]}`,
                borderRadius: '.5rem'
            }}
        >
            <KeyboardArrowUpIcon sx={{ fontSize: 32 }}/>
            <KeyboardArrowUpIcon sx={{ fontSize: 32, mt: -3 }}/>
        </Box>
        <Typography>Back to top</Typography>
    </Box>
);

export default Footer;
