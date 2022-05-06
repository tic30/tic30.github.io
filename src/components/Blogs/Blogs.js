import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Accordion as MuiAccordion, AccordionSummary as MuiAccordionSummary, AccordionDetails as MuiAccordionDetails, Typography, colors } from '@mui/material';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    boxShadow: `0 1px 5px ${colors.grey[300]}`,
    '&:first-child': {
        borderTopLeftRadius: '0.25rem',
        borderTopRightRadius: '0.25rem'
    },
    '&:last-child': {
        borderBottomLeftRadius: '0.25rem',
        borderBottomRightRadius: '0.25rem'
    },
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
}));

const blogList = [{
    title: 'Coming soon',
    preview: '...'
}]

export default function Blogs() {
    const [expanded, setExpanded] = React.useState('blog-accordion-0');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            {blogList.map((blog, id) => {
                const accordionId = `blog-accordion-${id}`
                return (
                    <Accordion
                        key={accordionId}
                        expanded={expanded === accordionId}
                        onChange={handleChange(accordionId)}
                    >
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>{blog.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {blog.preview}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </>
    );
}
