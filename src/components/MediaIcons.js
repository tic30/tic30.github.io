import React from 'react';
import { Box, Link } from '@mui/material';

const MediaIcons = ({
    sx,
    iconSx,
    ...props
}) => {
    const iconFullSx = {
        width: '35px',
        height: '35px',
        opacity: 0.8,
        borderRadius: '50%',
        boxShadow: 1,
        mr: 3,
        'img': {
            filter: 'invert(1) grayscale(1) contrast(99)'
        },
        ':hover img': {
            filter: 'none'
        },
        ...iconSx
    };

    return (
        <Box
            sx={{
                display: 'flex',
                m: 6,
                alignItems: 'center',
                ...sx
            }}
            {...props}
        >
            <Link href="https://www.linkedin.com/in/tim-chu-980881a4" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn" sx={iconFullSx}>
                <Box component="img" src="/imgs/icons/linkedin.svg" alt="LinkedIn Icon" />
            </Link>
            <Link href="https://github.com/tic30" target="_blank" rel="noopener noreferrer" title="Connect with me on GitHub" sx={iconFullSx}>
                <Box component="img" src="/imgs/icons/github.svg" alt="GitHub Icon" />
            </Link>
            <Link href="mailto:173341277@qq.com?subject=Let\'s&nbsp;talk,&nbsp;Tim!" target="_blank" rel="noopener noreferrer" title="Email me" sx={{ ...iconFullSx, mr: [2, 4] }}>
                <Box component="img" src="/imgs/icons/email.svg" alt="Email Icon" />
            </Link>
        </Box>
    );
};

export default MediaIcons;
