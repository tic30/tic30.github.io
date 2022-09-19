import { colors } from "@mui/material";

export const rolesContainerStyle = {
  display: "flex",
  gap: 6,
  ml: -2,
  pl: 2,
  py: 4,
  maxWidth: "100%",
  overflowX: "auto",
};

export const boxContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexBasis: "min-content",
  gap: 1,
  borderRadius: 5,
  pb: 1,
  boxShadow: 2,
  backgroundColor: colors.grey[50],
  transitionDuration: "0.5s",
  "&:hover, &:focus": {
    backgroundColor: colors.grey[200],
  },
  "&:hover > div, &:focus > div": {
    backgroundColor: colors.grey[50],
  },
};

export const boxStyle = {
  width: "8rem",
  height: "8rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 4,
  transitionDuration: "0.5s",
  transitionProperty: "background-color",
};

export const roleTitleStyle = {
  color: colors.grey[800],
  textAlign: "center",
  transitionDuration: "500ms",
};
