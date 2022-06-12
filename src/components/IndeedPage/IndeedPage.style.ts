import { colors } from "@mui/material";

export const topStorySx = {
  outer: {
    display: "flex",
    p: 6,
    borderRadius: 3,
    boxShadow: 3,
    mb: 6,
    alignItems: "center",
  },
  img: {
    flexShrink: 0,
    maxWidth: "450px",
    borderRadius: 3,
    overflow: "hidden",
  },
};

export const storyDivider = { py: 3, fontSize: "1.25rem" };

export const storiesSx = {
  wrapper: {
    display: "flex",
    gap: 3,
  },
  paper: {
    ...topStorySx.outer,
    boxShadow: 2,
    p: 3,
    flexBasis: "100%",
    flexDirection: "column",
  },
  titleWrapper: {
    position: "relative",
    display: "flex",
    gap: 3,
    height: "4rem",
    pl: 7,
    mb: 2,
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "-1.5rem",
      height: "4rem",
      width: "2rem",
      backgroundColor: colors.amber[800],
      opacity: 0.3,
      borderBottomLeftRadius: "0.5rem",
      borderBottomRightRadius: "0.5rem",
    },
    img: {
      width: "3rem",
      height: "3rem",
      alignSelf: "center",
    },
  },
};
