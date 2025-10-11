import { Box, colors, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BlogCard, { type BlogType } from './BlogCard';

const blogList: BlogType[] = [
    {
        title: 'Make your React component downloadable',
        description:
            'Export a feature from your React based website to PDF or print it. Customize the exported layout with minimum effort.',
        img: '/imgs/react-download.png',
        link: 'https://docs.google.com/document/d/1W0vKXWG3b9ELRtNCNs_gXZ_lgSCqW3ZJP60FojWIasU/edit?usp=sharing',
    },
    {
        title: 'Work with GraphQL in Storybook',
        description:
            'Use apollo addon to mock queries, fragments and client only queries. Visualize queries, variables and results in the addon panel.',
        img: '/imgs/apollo-addon.png',
        link: 'https://docs.google.com/document/d/1Opyjs3dgO3iq2qVxhvvJBefHRaqiSfNvpB-g0IsPd4M/edit?usp=sharing',
    },
    {
        title: 'Engineering efficiency & code quality: Choose your test',
        description:
            'Find the most efficient and effective test among Unit tests, Storybook interaction tests, Chromatic, A11y tests, Integration/E2E tests',
        img: '/imgs/testing.png',
    },
    {
        title: 'Common practise in accessibility',
        description:
            'A11y can do you a lot more good than in WCAG paper. Look at this list of common practises to boost page usability.',
        img: '/imgs/a11y.png',
    },
    {
        title: 'Build flexible UI system and component library',
        description: 'Build a design system that is both complete and extentively flexible.',
        img: '/imgs/design-system.png',
    },
    {
        title: 'Tools and methodologies to prevent broken experiene',
        description:
            'Debugging and fixing incidents are stressful and costly. There are precautions we can make to mitigate this risk.',
        img: '/imgs/prevent-broken.png',
    },
];

const Blogs: React.FC = () => (
    <>
        <Typography variant="h4" sx={{ pb: 4 }}>
            Blogs
        </Typography>
        <Typography sx={{ mb: 5 }}>
            These are self studies, papers and presentations made both in and outside of Indeed.
            Send me a message if you're interested to read more.
        </Typography>
        <Box
            sx={{
                display: 'grid',
                gap: 3,
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            }}
        >
            {blogList.map((blog, id) => (
                <BlogCard key={`blog-accordion-${id}`} blog={blog} />
            ))}
            <MoreHorizIcon
                sx={{
                    display: ['none', null, null, 'block'],
                    mt: 'calc(50% - 12px)',
                    color: colors.grey[500],
                }}
            />
        </Box>
    </>
);

export default Blogs;
