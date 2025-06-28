import { Typography } from "@mui/material";
import StyledAboutMeCard from "./StyledAboutMeCard";

const AboutMeCardReact = () => (
  <StyledAboutMeCard>
    <Typography variant="h5" className="aboutme-card-heading">
      React, TypeScript, <br /> Storybook, GraphQL
    </Typography>
    <Typography className="aboutme-card-content">
      I advocate for a modern, scalable and maintainable front end stack,
      focusing on engineering efficiency and cross functional collaboration.
    </Typography>
  </StyledAboutMeCard>
);

export default AboutMeCardReact;
