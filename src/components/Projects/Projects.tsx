import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { SystemStyleObject, Theme, useMediaQuery } from "@mui/system";
import React, { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { indeedProjects } from "../../constants";

const thumbnailCardRotate = 11;
const thumbnailCardSx: SystemStyleObject = {
  width: "200px",
  height: "25%",
  transformStyle: "preserve-3d",
  transform: `rotateY(${thumbnailCardRotate}deg) translateX(0)`,
  scale: `calc(1 - (${thumbnailCardRotate} / 100))`,
  transformOrigin: "20% center",
  transitionDuration: "200ms",
  transitionProperty: "transform, opacity",
  opacity: "0.8",
};
const titleSx: SystemStyleObject = {
  position: "absolute",
  inset: 0,
  p: 1,
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  textAlign: "center",
};

const Dock: React.FC = () => {
  const theme = useTheme();
  const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const location = useLocation();
  const currentPage = location.pathname.split("/").at(-1);
  const thumbnailCardHoverSx: SystemStyleObject = {
    "&:hover, &.active": {
      opacity: "1",
      transform: `rotateY(${thumbnailCardRotate - 5}deg) translateX(10px)`,
      "a, a:hover": {
        backgroundColor: theme.palette.background.default,
      },
    },
  };
  const btnSx: SystemStyleObject = {
    width: "100%",
    height: "100%",
    color: "#fff",
    p: 0,
    // "::after": {
    //   content: '""',
    //   position: "absolute",
    //   inset: 0,
    //   zIndex: 1,
    //   backgroundColor: "rgba(255, 255, 255, 0.7)",
    //   backdropFilter: "blur(3px)",
    // },
  };

  return (
    <Box
      sx={{
        display: isSmUp ? "block" : "none",
        position: "absolute",
        zIndex: 1,
        insetBlock: "0",
        height: "100vh",
        pl: "20px",
        background: theme.palette.text.primary,
      }}
    >
      <Box
        // component={motion.div}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        sx={{
          height: "80vh",
          mt: "10vh",
          position: "relative",
          perspective: "300px",
        }}
      >
        {indeedProjects.map((p, id) => (
          <Card
            // component={motion.div}
            // initial="initial"
            // animate="animate"
            // exit="exit"
            // layoutId={`project-${p.name}`}
            key={`project-thumbnail-${p.name}`}
            sx={{ ...thumbnailCardSx, ...thumbnailCardHoverSx }}
            className={currentPage === p.name ? "active" : ""}
          >
            <CardContent sx={{ p: 0, height: "100%" }}>
              <Button
                component={HashLink}
                to={`/projects/${p.name}`}
                sx={btnSx}
              >
                <Typography
                  variant="h6"
                  sx={{ backgroundColor: p.repColor, ...titleSx }}
                >
                  {p.title}
                </Typography>
              </Button>
            </CardContent>
          </Card>
        ))}
        <Card sx={thumbnailCardSx}>
          <CardContent sx={{ p: 0, height: "100%" }}>
            <Button sx={btnSx}>
              <Typography
                variant="h5"
                sx={{ backgroundColor: "#abc", ...titleSx }}
              >
                Coming...
              </Typography>
            </Button>
          </CardContent>
        </Card>
        <Card sx={thumbnailCardSx}>
          <CardContent sx={{ p: 0, height: "100%" }}>
            <Button sx={btnSx}>
              <Typography
                variant="h5"
                sx={{ backgroundColor: "#abc", ...titleSx }}
              >
                Coming...
              </Typography>
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

const Projects: React.FC = () => {
  const theme = useTheme();
  const scrollAreaRef = useRef(null);
  const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  return (
    <Box
      ref={scrollAreaRef}
      sx={{
        background: theme.palette.text.primary,
        overflowY: "auto",
      }}
    >
      <Dock />
      <Box sx={isSmUp ? { ml: "220px", pt: 2 } : {}}>
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            borderStartStartRadius: "1rem",
          }}
        >
          <Outlet context={scrollAreaRef} />
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
