import { styled } from "@mui/material/styles";
import Paper, { paperClasses } from "@mui/material/Paper";
import shadows from "@mui/material/styles/shadows";

const StyledAboutMeCard = styled(Paper)(({ theme }) => ({
  [`&.${paperClasses.root}`]: {
    display: "flex",
    flexDirection: "column",
    padding: "1.5rem",
    gap: "1.5rem",
    minWidth: "300px",
    borderRadius: "0.75rem",
    boxShadow: shadows[5],
    backdropFilter: "blur(10px)",
    [theme.breakpoints.up("md")]: {
      width: "30%",
    },
  },
  "& .aboutme-card-inner": {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "1.5rem",
  },
  "& .img1": {
    maxHeight: "2.5rem",
    maxWidth: "2.5rem",
  },
  "& .img2": {
    maxHeight: "2.5rem",
    maxWidth: "4rem",
  },
}));

export default StyledAboutMeCard;
