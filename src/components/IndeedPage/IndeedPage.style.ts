export const topStorySx = {
  outer: {
    display: "flex",
    p: 6,
    borderRadius: 3,
    boxShadow: 3,
    mb: 5,
    gap: 5,
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
    mb: 0,
    boxShadow: 2,
    p: 3,
    flexDirection: "column",
  },
  titleWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 1,
    mb: 2,
    img: {
      width: "3rem",
      height: "3rem",
      alignSelf: "center",
    },
  },
};
