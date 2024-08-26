import React from "react";
import { Box, Button, colors, Typography, useTheme } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import shadows from "@mui/material/styles/shadows";

export interface FooterType {
  scrollAreaRef: React.RefObject<HTMLDivElement>;
}

const Footer: React.FC<FooterType> = ({ scrollAreaRef }) => {
  const theme = useTheme();

  return (
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
          color: theme.palette.text.secondary,
          ":hover": {
            backgroundColor: "transparent",
            color: theme.palette.text.primary,
            "> div": {
              boxShadow: shadows[3],
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
            boxShadow: shadows[1],
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
};

export default Footer;
