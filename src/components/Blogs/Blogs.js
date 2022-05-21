import * as React from 'react';
import { Box } from '@mui/material';
import BlogCard from './BlogCard';

const blogList = [{
    title: 'Common practise in accessibility',
    description: 'A11y can do you a lot more good than in WCAG paper. Look at this list of common practises to boost page usability.',
    // link: '#',
    img: '/imgs/a11y.gif'
}, {
    title: 'Think our of the box - design systems',
    description: 'Build a design system that is both complete and extentively flexible.',
    img: '/imgs/design-system.png'
}];

export default function Blogs() {
    return (
        <Box sx={{ display: 'flex', gap: 3 }}>
            {blogList.map((blog, id) => {
                const blogComponentId = `blog-accordion-${id}`
                return (
                    <BlogCard key={blogComponentId} blog={blog} />
                )
            })}
        </Box>
    );
}
