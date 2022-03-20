import React from 'react';
import { Box, Typography } from '@mui/material';
import Texts from '../../texts';
import './IndeedPage.scss';

const IndeedPage = () => (
    <div className="container job-container">
        {Texts.IP.map((job, i) => (
            <div key={i} className="job-container-inner">
                <Box sx={{
                    mb: 10,
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Typography variant='h4' sx={{ pb: 2, fontWeight: 'bold' }}>{job.title}</Typography>
                    {job.icons && (
                        <div className="job-container-icons">
                            {job.icons.map((icon, j) => (
                                <img key={`icon-${i}-${j}`} src={icon} alt="Icons" aria-hidden />
                            ))}
                        </div>
                    )}
                    <Typography>{job.subtitle}</Typography>
                </Box>
                {job.contents.length > 0 && job.contents.slice(0, 2).map((keyword, j) => (
                    <div key={`jobcontent-top-${i}-${j}`} className={`jobcontent-top jobcontent-top-${j % 2 === 1 ? 'odd' : 'even'}`}>
                        <div>
                            <h4>{keyword.title}</h4>
                            <p>{keyword.content}</p>
                        </div>
                        <div>
                            <img src={keyword.illustration} alt="Illustration" aria-hidden />
                        </div>
                    </div>
                ))}
                {job.contents.length > 0 && (
                    <Box sx={{ display: 'flex', mt: 10, flexDirection: ['column', 'column', 'row'] }}>
                        {job.contents.slice(2).map((keyword, j) => (
                            <Box key={`jobcontent-bottom-${i}-${j}`} sx={{ flexBasis: '33%', mb: 3, ':not(:last-of-type)': { mr: 3 } }}>
                                <Box item xs={12} sx={{ display: 'flex', minHeight: ['auto', 'auto', '70px', '70px'] }}>
                                    <Box component="img" src={keyword.illustration} alt="Illustration" aria-hidden sx={{ mr: [1, 1, 3], width: '40px', alignSelf: 'flex-start' }} />
                                    <Typography variant='h5'>{keyword.title}</Typography>
                                </Box>
                                <Box item xs={12}>
                                    <p>{keyword.content}</p>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                )}
            </div>
        ))}
    </div>
);

export default IndeedPage;
