import React from 'react';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Texts from '../../texts';
import './IndeedPage.scss';

export const ropeSx = {
	width: '0', borderRight: "5px solid", borderColor: grey[400]
};

const IndeedPage = () => (
    <Box className="container job-container">
        {Texts.IP.map((job, i) => (
            <Box key={i} sx={{ mb: '1.5rem' }}>
                {/* <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ ml: '20%', height: '1.5rem', ...ropeSx }} />
                    <Box sx={{ mr: '20%', height: '1.5rem', ...ropeSx }} />
                </Box> */}
                <Box className="job-container-inner">
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        ':not(:last-child)': {
                            mb: 7
                        }
                    }}>
                        <Typography variant='h4' sx={{ pb: 2, fontWeight: 'bold' }}>{job.title}</Typography>
                        {job.icons && (
                            <Box className="job-container-icons">
                                {job.icons.map((icon, j) => (
                                    <img key={`icon-${i}-${j}`} src={icon} alt="Icons" aria-hidden />
                                ))}
                            </Box>
                        )}
                        <Typography sx={{ mb: 3 }}>{job.subtitle}</Typography>
                    </Box>
                    {job.contents.length > 0 && job.contents.slice(0, 2).map((keyword, j) => (
                        <Box key={`jobcontent-top-${i}-${j}`} className={`jobcontent-top jobcontent-top-${j % 2 === 1 ? 'odd' : 'even'}`}>
                            <Box>
                                <h4>{keyword.title}</h4>
                                <p>{keyword.content}</p>
                            </Box>
                            <Box>
                                <img src={keyword.illustration} alt="Illustration" aria-hidden />
                            </Box>
                        </Box>
                    ))}
                    {job.contents.length > 0 && (
                        <Box sx={{ display: 'flex', mt: 10, flexDirection: ['column', 'column', 'row'] }}>
                            {job.contents.slice(2).map((keyword, j) => (
                                <Box key={`jobcontent-bottom-${i}-${j}`} sx={{ flexBasis: '33%', mb: 3, ':not(:last-of-type)': { mr: 3 } }}>
                                    <Box item xs={12} sx={{ display: 'flex', minHeight: ['auto', 'auto', '70px', '70px'] }}>
                                        <Box component="img" src={keyword.illustration} alt="Illustration" aria-hidden sx={{ mr: [1, 1, 3], width: '30px', alignSelf: 'flex-start' }} />
                                        <Typography variant='h5'>{keyword.title}</Typography>
                                    </Box>
                                    <Box item xs={12}>
                                        <p>{keyword.content}</p>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>
            </Box>
        ))}
    </Box>
);

export default IndeedPage;
