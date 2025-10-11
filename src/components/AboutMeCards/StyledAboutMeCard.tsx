import { styled } from "@mui/material/styles";
import Paper, { paperClasses } from "@mui/material/Paper";
import { blue, purple, green } from "@mui/material/colors";

const StyledAboutMeCard = styled(Paper)(({ theme }) => ({
  [`&.${paperClasses.root}`]: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "0.75rem",
    overflow: "hidden",
    boxShadow: theme.shadows[3],
    backdropFilter: "blur(10px)",
  },
  "& .aboutme-card-heading": {
    padding: "1.2rem 1.5rem",
    background:
      theme.palette.mode === "dark"
        ? `linear-gradient(to right, ${purple[600]}80, ${blue[500]}80)`
        : `linear-gradient(to right, ${green[200]}80, ${blue[500]}80)`,
    lineHeight: 1.6,
  },
  "& .aboutme-card-content": {
    padding: "1.5rem",
  },
}));

export default StyledAboutMeCard;
