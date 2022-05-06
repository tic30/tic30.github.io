import { Box } from '@mui/material';
import React from 'react';
import MediaIcons from '../MediaIcons';
import './Footer.scss';

const Footer = () => (
    <Box component="footer" className="common-footer">
        <Box className="container" sx={{ display: 'flex', justifyContent: 'space-between'}}>
            Copyright © 2016 - 2022 TC
            {/* <MediaIcons sx={{ ml: 2, mr: 0, my: 0 }} iconSx={{ width: '20px', height: '20px'}} /> */}
        </Box>
    </Box>
);

export default Footer;
