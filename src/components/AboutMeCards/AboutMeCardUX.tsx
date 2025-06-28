import { Typography } from "@mui/material";
import StyledAboutMeCard from "./StyledAboutMeCard";

const AboutMeCardUX = () => (
  <StyledAboutMeCard>
    <Typography variant="h5" className="aboutme-card-heading">
      A Web Developer,
      <br />
      with a User-Centric Mindset
    </Typography>
    <Typography className="aboutme-card-content">
      My passion is to bridge design and engineering, deliver high quality UI
      code and galvanize front end team towards product vision that serves
      users' critical interests.
    </Typography>
  </StyledAboutMeCard>
);

export default AboutMeCardUX;
