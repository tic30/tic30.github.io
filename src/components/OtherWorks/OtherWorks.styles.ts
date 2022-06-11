import { colors } from "@mui/material";

export const rolesContainerStyle = {
  display: "flex",
  gap: 6,
};

export const boxContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexBasis: "min-content",
  gap: 1,
  borderRadius: 5,
  pb: 1,
  boxShadow: 3,
  backgroundColor: colors.grey[50],
  transitionDuration: "500ms",
  transitionProperty: "background-color",
  "&:hover, &:focus": {
    backgroundColor: colors.grey[900],
  },
  "&:hover p, &:focus p": {
    color: colors.grey[50],
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
};

export const roleTitleStyle = {
  color: colors.grey[800],
  textAlign: "center",
};
