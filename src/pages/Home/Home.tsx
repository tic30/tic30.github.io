import { Container, Box, Typography } from '@mui/material';
import IndeedPage from '../../components/IndeedPage';
import OtherWorks from '../../components/OtherWorks';
import Blogs from '../../components/Blogs';
import { sectionHeaderSX } from './Home.style';
import { PageTransition } from '../../components/PageTransition';
import { TopSectionSlider } from '../../components/TopSectionSlider';

const Home: React.FC = () => {
    return (
        <Box
            sx={{
                paddingTop: ['6rem', '2rem'],
                paddingLeft: ['0', '6.25rem'],
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'left top',
                '& section:not(:first-child)': {
                    backgroundColor: 'background.light',
                },
            }}
        >
            <Box
                component="section"
                id="self-intro"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    paddingBlock: 8,
                }}
            >
                <Container
                    sx={{
                        mt: 0,
                        mb: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                    }}
                    maxWidth="xl"
                >
                    <Box sx={{ textTransform: 'uppercase' }}>
                        <Typography variant="h4" sx={{ color: 'text.secondary' }}>
                            Hey there, I'm
                        </Typography>
                        <Typography variant="h1" sx={{ lineHeight: 1, mb: 2 }}>
                            Tim Chu
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                lineHeight: 1.8,
                                color: 'text.secondary',
                            }}
                        >
                            A{' '}
                            <Box component="span" sx={{ color: 'text.success' }}>
                                front end
                            </Box>{' '}
                            biased full-stack engineer
                            <br />
                            and an innovative{' '}
                            <Box component="span" sx={{ color: 'text.warning' }}>
                                problem solver
                            </Box>
                            .
                        </Typography>
                    </Box>
                    <TopSectionSlider />
                </Container>
            </Box>
            <Box
                component="section"
                id="work"
                sx={{ borderStartStartRadius: ['2rem', '2rem', '5rem'] }}
            >
                <Container sx={sectionHeaderSX} maxWidth="xl">
                    <Typography variant="h2">My work</Typography>
                </Container>
                <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
                    <IndeedPage />
                    <OtherWorks />
                </Container>
            </Box>
            <Box
                component="section"
                id="blogs"
                sx={{ pb: '7rem', borderEndStartRadius: ['2rem', '2rem', '5rem'] }}
            >
                <Container maxWidth="xl">
                    <Blogs />
                </Container>
            </Box>
            <PageTransition />
        </Box>
    );
};

export default Home;
