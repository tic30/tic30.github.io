import { SystemStyleObject } from "@mui/system";

export const connectBgSx = {
  position: ["relative", "relative", "absolute"],
  height: "100%",
  top: 0,
  left: 0,
  right: 0,
  mb: [6, 6, "auto"],
  p: [0, 0, 6],
  display: "flex",
  justifyContent: ["center", "center", "end"],
  alignItems: "end",
} as SystemStyleObject;

export const sectionHeaderSX = {
  position: "relative",
  py: 8,
  zIndex: 1,
} as SystemStyleObject;
