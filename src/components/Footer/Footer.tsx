import React from "react";
import { Box, Button, colors, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export interface FooterType {
  scrollAreaRef: React.RefObject<HTMLDivElement>;
}

const Footer: React.FC<FooterType> = ({ scrollAreaRef }) => (
  <Box
    component="footer"
    sx={{
      position: "relative",
      py: 10,
      maxWidth: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    {/* Copyright © 2016 - 2022 TC */}
    {/* <MediaIcons sx={{ ml: 2, mr: 0, my: 0 }} iconSx={{ width: '20px', height: '20px'}} /> */}
    <Button
      variant="text"
      onClick={() => scrollAreaRef.current?.scrollTo(0, 0)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: colors.grey[500],
        ":hover": {
          backgroundColor: "transparent",
          color: colors.blue[800],
          "> div": {
            boxShadow: `0 0 12px ${colors.grey[300]}`,
          },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: ".25rem",
          mb: 1,
          width: "4rem",
          boxShadow: 2,
          borderRadius: 2,
        }}
      >
        <KeyboardArrowUpIcon sx={{ fontSize: 32 }} />
        <KeyboardArrowUpIcon sx={{ fontSize: 32, mt: -3 }} />
      </Box>
      <Typography>Back to top</Typography>
    </Button>
  </Box>
);

export default Footer;
