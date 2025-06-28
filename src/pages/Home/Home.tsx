import {
  Container,
  Box,
  colors,
  Typography,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SummarizeIcon from "@mui/icons-material/Summarize";
import IndeedPage from "../../components/IndeedPage";
import OtherWorks from "../../components/OtherWorks";
import Blogs from "../../components/Blogs";
import AboutMeCardUX from "../../components/AboutMeCards/AboutMeCardUX";
import { connectBgSx, sectionHeaderSX } from "./Home.style";
import { customColors, GITHUB, LINKEDIN, RESUME } from "../../constants";
import transition from "../../transition";
import AboutMeCardReact from "../../components/AboutMeCards/AboutMeCardReact";
import AboutMeCardJS from "../../components/AboutMeCards/AboutMeCardJS";

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage:
          theme.palette.mode === "dark"
            ? "url(/imgs/bgsec1-dark.jpg)"
            : "url(/imgs/bgsec1.png)",
        backgroundSize: theme.palette.mode === "dark" ? "cover" : "contain",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "right bottom",
        ...(theme.palette.mode === "dark"
          ? {}
          : {
              "& section:not(:first-child)": {
                backgroundColor: theme.palette.background.default,
              },
            }),
      }}
    >
      <Box
        component="section"
        id="self-intro"
        sx={{
          minHeight: "100vh",
          paddingTop: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Container
          sx={{
            my: 0,
            display: "flex",
            flexDirection: "column",
            "*": {
              textTransform: "uppercase",
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
            An innovative{" "}
            <Box component="span" sx={{ color: customColors.orange }}>
              problem solver
            </Box>
            <br />
            and{" "}
            <Box component="span" sx={{ color: colors.green[700] }}>
              front end
            </Box>{" "}
            engineer.
          </Typography>
        </Container>
        <Container
          sx={{
            mt: 3,
            display: "grid",
            gap: 3,
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
          maxWidth="xl"
        >
          <AboutMeCardUX />
          <AboutMeCardReact />
          <AboutMeCardJS />
        </Container>
      </Box>
      <Box component="section" id="work">
        <Container sx={sectionHeaderSX} maxWidth="xl">
          <Typography variant="h2">My work</Typography>
        </Container>
        <Container maxWidth="xl" sx={{ overflow: "hidden" }}>
          <IndeedPage />
          <OtherWorks />
        </Container>
      </Box>
      <Box component="section" id="blogs" sx={{ pb: "5rem" }}>
        <Container maxWidth="xl">
          <Blogs />
        </Container>
      </Box>
      <Box
        component="section"
        id="connect"
        sx={{
          position: "relative",
          display: ["flex", "flex", "block"],
          flexDirection: "column",
          minHeight: "calc(100vh - 250px)",
        }}
      >
        <Container sx={sectionHeaderSX} maxWidth="xl">
          <Typography variant="h2">Lets chat</Typography>
          <Typography variant="h4" sx={{ my: 4, lineHeight: 1.6 }}>
            I am open to{" "}
            <Box component="span" sx={{ color: customColors.orange }}>
              creative
            </Box>{" "}
            ideas!
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
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
            sx={{ mt: 1, textTransform: "none" }}
            endIcon={<ArrowForward />}
            component="a"
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
          >
            Send me a LinkedIn message
          </Button>
        </Container>
        <Container sx={connectBgSx} maxWidth="xl">
          {theme.palette.mode !== "dark" && (
            <Box
              component="img"
              src="/imgs/bgsec4.jpeg"
              alt="idea"
              sx={{
                height: ["200px", "400px"],
              }}
            />
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default transition(Home);
