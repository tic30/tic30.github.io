import { colors } from "@mui/material";
import { SystemStyleObject } from "@mui/system";

export const introCardSx = {
  outer: {
    display: "flex",
    flexDirection: "column",
    p: 3,
    gap: 3,
    minWidth: "300px",
    width: "30%",
    backgroundColor: "rgba(255,255,255,0.98)",
    borderRadius: 2,
    boxShadow: 2,
  },
  inner: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 3,
  },
  img1: {
    maxHeight: "2.5rem",
    maxWidth: "2.5rem",
  },
  img2: {
    maxHeight: "2.5rem",
    maxWidth: "4rem",
  },
};

export const connectBgSx = {
  position: ["relative", "relative", "absolute"],
  height: "100%",
  top: 0,
  left: 0,
  right: 0,
  mb: [6, 6, "auto"],
  p: [0, 0, 6],
  zIndex: -1,
  display: "flex",
  justifyContent: ["center", "center", "end"],
  alignItems: "end",
} as SystemStyleObject;

export const sectionHeaderSX = {
  position: "relative",
  py: 8,
  "&::after": {
    position: "absolute",
    top: "8rem",
    content: '""',
    width: "5rem",
    maxWidth: "50%",
    height: "6px",
    transitionDuration: "0.2s",
    backgroundColor: colors.amber[800],
  },
  "&:hover": {
    "&::after": {
      width: "11rem",
    },
  },
};
