import { Box, Typography } from "@mui/material";
import Texts from "../../texts";
import StyledAboutMeCard from "./StyledAboutMeCard";

const AboutMeCardUX = () => (
  <StyledAboutMeCard>
    <Typography variant="h5">
      UX,
      <br />
      front end, and perfection
    </Typography>
    <Typography>
      Bridge design and engineering, craft comprehensive ux-eng-quality
      guidelines and galvanize team towards product vision.
    </Typography>
    <Box className="aboutme-card-inner">
      {Texts.Company.icons.map((item, id) => (
        <Box
          component="img"
          key={`flyer-left-icon${id}`}
          src={`/imgs/${item.src}`}
          alt="Flyer Icon"
          className="img2"
        />
      ))}
    </Box>
  </StyledAboutMeCard>
);

export default AboutMeCardUX;
