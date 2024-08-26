import { SystemStyleObject } from "@mui/system";

export const introCardSx: Record<string, SystemStyleObject> = {
  outer: {
    display: "flex",
    flexDirection: "column",
    p: 3,
    gap: 3,
    minWidth: "300px",
    backgroundColor: "rgba(255,255,255,0.98)",
    borderRadius: 3,
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
