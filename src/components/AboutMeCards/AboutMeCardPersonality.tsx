import { Box, Typography } from "@mui/material";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import PublicIcon from "@mui/icons-material/Public";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import LightTooltip from "../Misc/LightTooltip";
import StyledAboutMeCard from "./StyledAboutMeCard";

const AboutMeCardPersonality = () => (
  <StyledAboutMeCard>
    <Typography variant="h5">
      Grow
      <br />
      team and company <br />
      with thoughtful impact
    </Typography>
    <Typography>
      I endeavor to seek innovation and growth, bring value to communities and
      make measurable impacts that solve real problems.
    </Typography>
    <Box className="aboutme-card-inner">
      {/* {Texts.SelfIntro.icons.map((item, id) => (
              <Box
                component="img"
                key={`flyer-left-icon${id}`}
                src={`/imgs/${item.src}`}
                alt="Flyer Icon"
                sx={introCardSx.img1}
              />
            ))} */}
      <LightTooltip
        title="Collaborate across time zones and build an efficient team across globe"
        tabIndex={0}
      >
        <PublicIcon fontSize="large" />
      </LightTooltip>
      <LightTooltip title="Advocate high accessibility standards" tabIndex={0}>
        <AccessibleForwardIcon fontSize="large" />
      </LightTooltip>
      <LightTooltip
        title="Mentor college students and help them build career paths in UX/Eng/HCI"
        tabIndex={0}
      >
        <SpaOutlinedIcon fontSize="large" />
      </LightTooltip>
      <LightTooltip
        title="Connect cross functional and diverse colleagues and build trust"
        tabIndex={0}
      >
        <Diversity2OutlinedIcon fontSize="large" />
      </LightTooltip>
    </Box>
  </StyledAboutMeCard>
);

export default AboutMeCardPersonality;
