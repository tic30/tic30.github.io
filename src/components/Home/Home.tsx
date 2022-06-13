import {
  Container,
  Box,
  colors,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import IndeedPage from "../IndeedPage";
import OtherWorks from "../OtherWorks";
import Blogs from "../Blogs";
import PortfolioCard from "../PortfolioCard";
import Texts from "../../texts";
import { connectBgSx, introCardSx, sectionHeaderSX } from "./Home.style";
import { LINKEDIN } from "../../constants";

const Home: React.FC = () => (
  <>
    <Box
      component="section"
      id="self-intro"
      sx={{
        minHeight: "100vh",
        backgroundImage: "url(/imgs/bgsec1.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
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
      >
        <Typography
          variant="h4"
          sx={{
            color: colors.grey[500],
          }}
        >
          Hey there, I'm
        </Typography>
        <Typography
          variant="h1"
          sx={{
            lineHeight: 1,
            mb: 2,
            color: colors.grey[800],
          }}
        >
          Tim Chu
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: colors.grey[500],
            lineHeight: 1.8,
          }}
        >
          An innovative{" "}
          <Box component="span" sx={{ color: colors.amber[800] }}>
            problem solver
          </Box>
          <br />
          and{" "}
          <Box component="span" sx={{ color: colors.green[700] }}>
            front end
          </Box>{" "}
          craftsman.
        </Typography>
      </Container>
      <Container sx={{ my: 0, display: "flex", gap: "2rem" }}>
        <Paper sx={introCardSx.outer}>
          <Typography variant="h5">
            I seek challenges,
            <br />
            in and out of work.
          </Typography>
          <Typography>{Texts.SelfIntro.content}</Typography>
          <Box sx={introCardSx.inner}>
            {Texts.SelfIntro.icons.map((item, id) => (
              <Box
                component="img"
                key={`flyer-left-icon${id}`}
                src={`/imgs/${item.src}`}
                alt="Flyer Icon"
                sx={introCardSx.img1}
              />
            ))}
          </Box>
        </Paper>
        <Paper sx={introCardSx.outer}>
          <Typography variant="h5">
            UX,
            <br />
            Front end, and Fun
          </Typography>
          <Typography>{Texts.Company.content}</Typography>
          <Box sx={introCardSx.inner}>
            {Texts.Company.icons.map((item, id) => (
              <Box
                component="img"
                key={`flyer-left-icon${id}`}
                src={`/imgs/${item.src}`}
                alt="Flyer Icon"
                sx={introCardSx.img2}
              />
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
    <Box component="section" id="work" sx={{ pb: "5rem" }}>
      <Container sx={sectionHeaderSX}>
        <Typography variant="h2">My work</Typography>
      </Container>
      <Container>
        <IndeedPage />
        <OtherWorks />
      </Container>
    </Box>
    <Box component="section" id="blog" sx={{ minHeight: "auto", pb: "7rem" }}>
      <Container sx={sectionHeaderSX}>
        <Typography variant="h2">Blog</Typography>
      </Container>
      <Container>
        <Blogs />
      </Container>
    </Box>
    <Box component="section" id="projects" sx={{ pb: "7rem" }}>
      <Container sx={sectionHeaderSX}>
        <Typography variant="h2">Projects</Typography>
      </Container>
      <Container sx={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        <PortfolioCard wide content={Texts.OH} />
        {/* <PortfolioCard content={Texts.ITS} /> */}
        <PortfolioCard content={Texts.DealFindMe} />
        <PortfolioCard content={Texts.Milu} />
        <PortfolioCard content={Texts.MovieEmodex} />
      </Container>
    </Box>
    <Box
      component="section"
      id="connect"
      sx={{
        position: "relative",
        display: ["flex", "flex", "block"],
        flexDirection: "column",
      }}
    >
      <Container sx={sectionHeaderSX}>
        <Typography variant="h2">Lets chat</Typography>
        <Typography variant="h3" sx={{ my: 4, lineHeight: 1.6 }}>
          I am open to
          <br />
          <Box component="span" sx={{ color: colors.amber[800] }}>
            creative
          </Box>{" "}
          ideas!
        </Typography>
        <Button
          sx={{ ml: -1, textTransform: "none" }}
          endIcon={<ArrowForward />}
          component="a"
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
        >
          Send me a LinkedIn message
        </Button>
      </Container>
      <Container sx={connectBgSx}>
        <Box
          component="img"
          src="/imgs/bgsec4.jpeg"
          alt="idea"
          sx={{
            height: ["200px", "300px"],
          }}
        />
      </Container>
    </Box>
  </>
);

export default Home;
