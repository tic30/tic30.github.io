import { Container, Box, Typography } from '@mui/material';
import Hero from '../../components/Hero';
import HeroIllustration from '../../components/Hero/HeroIllustration';
import EverpurePage from '../../components/EverpurePage';
import EverpureIllustration from '../../components/EverpurePage/EverpureIllustration';
import MfeIllustration from '../../components/EverpurePage/MfeIllustration';
import McpIllustration from '../../components/EverpurePage/McpIllustration';
import { illustrationVars } from '../../components/Misc/illustrationVars';
import IndeedPage from '../../components/IndeedPage';
import OtherWorks from '../../components/OtherWorks';
import Blogs from '../../components/Blogs';
import { sectionHeaderSX } from './Home.style';

const Home: React.FC = () => {
    return (
        <Box
            sx={{
                paddingTop: [8, 4],
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
                    paddingBlockStart: [2, 2, 4],
                    paddingBlockEnd: 8,
                }}
            >
                <Hero
                    visual={
                        <Box sx={(theme) => ({ display: 'flex', ...illustrationVars(theme) })}>
                            <HeroIllustration />
                        </Box>
                    }
                />
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
                    <EverpurePage
                        illustrations={{
                            rag: <EverpureIllustration />,
                            mfe: <MfeIllustration />,
                            mcp: <McpIllustration />,
                        }}
                    />
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
        </Box>
    );
};

export default Home;
