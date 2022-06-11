import { Container, Box, colors, Grid, Paper, Typography } from "@mui/material";
import IndeedPage from "../IndeedPage";
import OtherWorks from "../OtherWorks";
import Blogs from "../Blogs";
// import PortfolioCard from '../PortfolioCard';
import Texts from "../../texts";
import { connectBgSx, introCardSx, sectionHeaderSX } from "./Home.style";

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
          <Box component="span" sx={{ color: colors.blue[800] }}>
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
        <Typography variant="h3">Work at Indeed</Typography>
      </Container>
      <Container>
        <IndeedPage />
        <OtherWorks />
      </Container>
    </Box>
    <Box component="section" id="blog" sx={{ minHeight: "auto", pb: "7rem" }}>
      <Container sx={sectionHeaderSX}>
        <Typography variant="h3">Blog</Typography>
      </Container>
      <Container>
        <Blogs />
      </Container>
    </Box>
    <Box component="section" id="projects">
      <Container sx={sectionHeaderSX}>
        <Typography variant="h3">Projects</Typography>
      </Container>
      <Container>
        <Box className="container-inner container-inner-wrap">
          <Grid
            container
            spacing={3}
            className="grid-container grid-container-left"
          >
            <Grid item xs={12}>
              {/* <PortfolioCard large content={Texts.OH} /> */}
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            className="grid-container grid-container-right"
          >
            <Grid item xs={12} sm={6} md={12}>
              {/* <PortfolioCard content={Texts.ITS} /> */}
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              {/* <PortfolioCard content={Texts.DealFindMe} /> */}
            </Grid>
          </Grid>
        </Box>
        <Box className="container-inner">
          <Grid container spacing={3} className="grid-container">
            <Grid item xs={12} sm={6} lg={4}>
              {/* <PortfolioCard content={Texts.Milu} /> */}
            </Grid>
            <Grid item xs={12} sm={6} lg={8}>
              {/* <PortfolioCard content={Texts.MovieEmodex} /> */}
            </Grid>
          </Grid>
        </Box>
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
        <Typography variant="h3">Lets chat</Typography>
        <Typography variant="h2" sx={{ mt: 4 }}>
          I am open to
          <br />
          <Box component="span" sx={{ color: colors.blue[800] }}>
            creative
          </Box>{" "}
          ideas!
        </Typography>
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
