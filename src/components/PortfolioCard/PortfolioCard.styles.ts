export const baseCardStyle = {
  width: ["100%", "50%", "31%"],
  flexGrow: 1,
  boxShadow: 3,
  borderRadius: 3,
};

export const wideCardStyleDesktop = {
  ...baseCardStyle,
  flexBasis: "100%",
  maxWidth: "none",
  height: "35rem",
  img: {
    maxWidth: "60%",
    height: "100%",
  },
};

export const cardActionAreaDefaultStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  height: "100%",
  justifyContent: "flex-start",
};

export const cardActionAreaWideStyleDesktop = {
  ...cardActionAreaDefaultStyle,
  flexDirection: "row",
};

export const cardContentDefaultStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const cardContentWideStyleDesktop = {
  ...cardContentDefaultStyle,
  alignSelf: "center",
  pl: 5,
  pr: 3,
};

export const btnStyle = {
  justifyContent: "flex-start",
  mt: 3,
  ml: "-0.3rem",
  mb: -3,
  ":hover": { background: "none" },
};
