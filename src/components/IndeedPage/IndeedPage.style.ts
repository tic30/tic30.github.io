import { colors } from "@mui/material";

export const topStorySx = {
  outer: {
    display: "flex",
    p: 6,
    borderRadius: 2,
    boxShadow: `0 0 12px ${colors.grey[200]}`,
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
    p: 3,
    flexBasis: "100%",
    flexDirection: "column",
  },
  titleWrapper: {
    position: "relative",
    display: "flex",
    gap: 3,
    height: "4rem",
    pl: 3,
    mb: 2,
    borderLeft: "3px solid",
    borderColor: colors.amber[800],
    img: {
      width: "3rem",
      height: "3rem",
      alignSelf: "center",
    },
  },
};
