import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, colors } from "@mui/material";
import { styled } from "@mui/material/styles";

const PreloaderScreen = styled(Box)({
  height: "100vh",
  backgroundColor: colors.common.black,
  color: colors.common.white,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const PreloaderContent = styled(Box)({
  animationName: "fadeOutUpRight",
  animationDelay: "5s",
  animationDuration: "0.5s",
  animationFillMode: "forwards",
});

const PreloaderText = styled(Box)({
  position: "relative",
  boxSizing: "border-box",
  width: "3px",
  paddingLeft: "3px",
  overflow: "hidden",
  fontSize: "40px",
  whiteSpace: "nowrap",
  marginTop: 4,
  textTransform: "uppercase",
  animationName: "expand",
  animationDelay: "2s",
  animationDuration: "2s",
  animationFillMode: "forwards",
  fontWeight: 700,
  letterSpacing: "3px",

  "&::after": {
    position: "absolute",
    content: '""',
    height: "100%",
    width: "3px",
    right: 0,
    backgroundColor: colors.common.white,
    zIndex: 1,
    animationName: "blink",
    animationDuration: "4s",
    animationFillMode: "forwards",
  },

  "@keyframes blink": {
    "0%": { opacity: 1 },
    "8%": { opacity: 1 },
    "9%": { opacity: 0 },
    "17%": { opacity: 0 },
    "18%": { opacity: 1 },
    "26%": { opacity: 1 },
    "27%": { opacity: 0 },
    "35%": { opacity: 0 },
    "36%": { opacity: 1 },
    "42%": { opacity: 1 },
    "43%": { opacity: 0 },
    "49%": { opacity: 0 },
    "50%": { opacity: 1 },
    "99%": { opacity: 1 },
    "100%": { opacity: 0 },
  },

  "@keyframes expand": {
    "0%": { width: "3px" },
    "2%": { width: "3px" },
    "4%": { width: "35px" },
    "6%": { width: "35px" },
    "8%": { width: "63px" },
    "10%": { width: "63px" },
    "12%": { width: "87px" },
    "14%": { width: "87px" },
    "16%": { width: "111px" },
    "18%": { width: "111px" },
    "20%": { width: "140px" },
    "22%": { width: "140px" },
    "24%": { width: "153px" },
    "49%": { width: "153px" }, //pause
    "51%": { width: "194px" },
    "53%": { width: "194px" },
    "55%": { width: "223px" },
    "57%": { width: "223px" },
    "59%": { width: "238px" },
    "61%": { width: "238px" },
    "63%": { width: "267px" },
    "65%": { width: "267px" },
    "67%": { width: "294px" },
    "69%": { width: "294px" },
    "71%": { width: "324px" },
    "73%": { width: "324px" },
    "75%": { width: "365px" },
    "77%": { width: "365px" },
    "79%": { width: "379px" },
    "81%": { width: "379px" },
    "83%": { width: "418px" },
    "85%": { width: "418px" },
    "87%": { width: "461px" },
    "89%": { width: "461px" },
    "91%": { width: "491px" },
    "93%": { width: "491px" },
    "95%": { width: "520px" },
    "100%": { width: "520px" },
  },

  "@keyframes fadeOutUpRight": {
    "0%": { opacity: 1, transform: "translate(0)" },
    "100%": { opacity: 0, transform: "translate(0,-30px)" },
  },
});

const Preloader: React.FC = () => {
  const navigate = useNavigate();
  const [animationCount, setAnimationCount] = useState(0);
  const [redirect, setRedirect] = useState(
    window.matchMedia("(max-width: 599px)").matches
  ); // Go directly to home on phone

  const updateRedirect = () => {
    if (animationCount >= 1) {
      setRedirect(true);
    } else {
      setAnimationCount(animationCount + 1);
    }
  };

  useEffect(() => {
    if (redirect) {
      navigate("/home");
    }
  }, [redirect, navigate]);

  return (
    <PreloaderScreen>
      <PreloaderContent onAnimationEnd={updateRedirect}>
        <PreloaderText>Hello, this is Tim Chu</PreloaderText>
      </PreloaderContent>
    </PreloaderScreen>
  );
};

export default Preloader;
