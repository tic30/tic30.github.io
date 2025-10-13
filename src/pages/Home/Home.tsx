import {
    Container,
    Box,
    colors,
    Typography,
    Button,
    IconButton,
    useTheme,
    Paper,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SummarizeIcon from '@mui/icons-material/Summarize';
import IndeedPage from '../../components/IndeedPage';
import OtherWorks from '../../components/OtherWorks';
import Blogs from '../../components/Blogs';
import { sectionHeaderSX } from './Home.style';
import { customColors, GITHUB, LINKEDIN, RESUME } from '../../constants';
import { PageTransition } from '../../components/PageTransition';
import { TopSectionSlider } from '../../components/TopSectionSlider';

const Home: React.FC = () => {
    const theme = useTheme();

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
                    backgroundColor: theme.palette.background.light,
                },
            }}
        >
            <Box
                component="section"
                id="self-intro"
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    paddingBottom: '3rem',
                }}
            >
                <Container
                    sx={{
                        mt: 0,
                        mb: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        '*': {
                            textTransform: 'uppercase',
                        },
                    }}
                    maxWidth="xl"
                >
                    <Typography variant="h4" sx={{ color: theme.palette.text.secondary }}>
                        Hey there, I'm
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            lineHeight: 1,
                            mb: 2,
                        }}
                    >
                        Tim Chu
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            lineHeight: 1.8,
                            color: theme.palette.text.secondary,
                        }}
                    >
                        A{' '}
                        <Box component="span" sx={{ color: colors.green[700] }}>
                            front end
                        </Box>{' '}
                        biased full-stack engineer
                        <br />
                        and an innovative{' '}
                        <Box component="span" sx={{ color: customColors.orange }}>
                            problem solver
                        </Box>
                        .
                    </Typography>
                </Container>
                <Container maxWidth="xl">
                    <TopSectionSlider />
                </Container>
            </Box>
            <Box component="section" id="work" sx={{ borderTopRightRadius: '5rem' }}>
                <Container sx={sectionHeaderSX} maxWidth="xl">
                    <Typography variant="h2">My work</Typography>
                </Container>
                <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
                    <IndeedPage />
                    <OtherWorks />
                </Container>
            </Box>
            <Box component="section" id="blogs" sx={{ pb: '5rem' }}>
                <Container maxWidth="xl">
                    <Blogs />
                </Container>
            </Box>
            <Box
                component="section"
                id="connect"
                sx={{
                    position: 'relative',
                    display: ['flex', 'flex', 'block'],
                    flexDirection: 'column',
                    minHeight: 'calc(100vh - 250px)',
                }}
            >
                <Container sx={sectionHeaderSX} maxWidth="xl">
                    <Typography variant="h2" sx={{ marginBlockEnd: 6 }}>
                        Lets chat
                    </Typography>
                    <Paper
                        sx={{
                            borderRadius: '0.75rem',
                            display: 'flex',
                            flexWrap: ['wrap', 'nowrap'],
                            backgroundColor: theme.palette.background.default,
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            sx={{
                                flex: '1 0 60%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <Box sx={{ margin: [2, 6] }}>
                                <Typography
                                    variant="h4"
                                    sx={{ marginBlockEnd: 4, lineHeight: 1.6 }}
                                >
                                    I am open to{' '}
                                    <Box component="span" sx={{ color: customColors.orange }}>
                                        creative
                                    </Box>{' '}
                                    ideas!
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <IconButton
                                        size="large"
                                        href={RESUME}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Resume"
                                    >
                                        <SummarizeIcon fontSize="large" aria-hidden />
                                    </IconButton>
                                    <IconButton
                                        size="large"
                                        href={LINKEDIN}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="LinkedIn"
                                    >
                                        <LinkedInIcon fontSize="large" aria-hidden />
                                    </IconButton>
                                    <IconButton
                                        size="large"
                                        href={GITHUB}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="GitHub"
                                    >
                                        <GitHubIcon fontSize="large" aria-hidden />
                                    </IconButton>
                                </Box>
                                <Button
                                    size="large"
                                    sx={{ mt: 1, textTransform: 'none', alignSelf: 'flex-start' }}
                                    endIcon={<ArrowForward />}
                                    component="a"
                                    href={LINKEDIN}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Send me a LinkedIn message
                                </Button>
                            </Box>
                        </Box>
                        <Box
                            component="img"
                            src="/imgs/bgsec4.jpeg"
                            alt="idea"
                            sx={{
                                aspectRatio: '1/1',
                                width: ['100%', '40%', '40%'],
                            }}
                        />
                    </Paper>
                </Container>
            </Box>
            <PageTransition />
        </Box>
    );
};

export default Home;
