import React, { useEffect, useMemo, useState } from "react";
import { Box, colors, Theme, Typography, useMediaQuery } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import { SystemStyleObject } from "@mui/system";
import useScrollDirection from "../../hooks/useScrollDirection";

export interface SubMenuItemType {
  icon?: React.ReactNode;
  title: React.ReactNode;
  pageUrl: string;
  external?: boolean;
}
export interface MenuItemType {
  icon?: React.ReactNode;
  text: React.ReactNode;
  link: string;
  subMenuItems?: SubMenuItemType[];
  external?: boolean;
}
export interface MenuScreenType {
  open: boolean;
  setOpen: (newStatus: boolean) => void;
  menuList: MenuItemType[];
  scrollAreaRef: React.RefObject<HTMLDivElement>;
}

const MenuScreen: React.FC<MenuScreenType> = ({
  open,
  setOpen,
  menuList = [],
  scrollAreaRef,
}) => {
  const [openDelay, setOpenDelay] = useState(false);
  const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const scrollDir = useScrollDirection(scrollAreaRef.current);

  useEffect(() => {
    setOpenDelay(false);
    setTimeout(() => setOpenDelay(true), 200);
  }, [open]);

  const innerSx = useMemo(
    () => ({
      flexDirection: open ? "row" : "column",
      alignItems: "center",
      borderRadius: 1,
      p: open ? "0.5rem 0.35rem" : 1,
      mb: open ? 3 : 1,
      height: open ? "2.5rem" : "3.5rem",
      width: open ? "auto" : "4.25rem",
      justifyContent: open ? "flex-start" : "center",
      textDecoration: "none",
      "&:hover": {
        cursor: "pointer",
      },
      "&, &:focus": {
        display: "flex",
      },
      "> svg": {
        color: colors.grey[100],
        ...(open ? { mx: 2 } : {}),
      },
      span: {
        fontSize: open ? "1rem" : "0.75rem",
        color: colors.common.white,
        display: openDelay ? "block" : "none",
        opacity: openDelay ? 1 : 0,
      },
      "&:hover, &:focus": {
        backgroundColor: colors.grey[100],
        "> svg, > span": {
          color: colors.grey[900],
        },
      },
    }),
    [openDelay, isSmUp] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.code === "Space" || e.code === "Enter") {
      setOpen(!open);
    }
  };

  const wrapperMobileStyle = {
    overflow: "hidden",
    height: open ? "100%" : "3.5rem",
    width: open ? "100%" : "5.5rem",
    marginTop: scrollDir === "DOWN" ? "-3.5rem" : 0,
  } as SystemStyleObject;

  const wrapperSmUpStyle = {
    height: "100%",
    width: open ? "24rem" : "5.5rem",
  } as SystemStyleObject;

  const bgColor = `linear-gradient(
    to left,
    ${colors.common.black}, ${colors.grey[900]}
  )` as SystemStyleObject;

  const hambergurSmUpStyle = {
    "&:hover": {
      background: bgColor,
      "> div": {
        background: open ? bgColor : colors.grey[100],
      },
      "> div::after": {
        background: colors.grey[100],
      },
    },
  } as SystemStyleObject;

  return (
    <Box
      sx={{
        background: bgColor,
        p: 1,
        transition: "0.2s",
        flexShrink: 0,
        zIndex: 10,
        ...(isSmUp ? wrapperSmUpStyle : wrapperMobileStyle),
      }}
    >
      <Box
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={() => setOpen(!open)}
        sx={{
          boxSizing: "border-box",
          height: "4.5rem",
          width: "calc(100% + 1rem)",
          transition: "width 0.2s",
          mt: -1,
          ml: -1,
          mb: 2,
          p: 3,
          background: "white",
          ...(isSmUp ? hambergurSmUpStyle : {}),
          ...(open
            ? {
                background: bgColor,
              }
            : {}),
        }}
      >
        <Box
          sx={{
            width: "20px",
            height: "2px",
            margin: "8px 8px 16px",
            backgroundColor: colors.grey[900],
            position: "relative",
            transition: "background-color 320ms ease-in-out",
            "&::before, &::after": {
              content: '" "',
              display: "block",
              width: "120%",
              height: "2px",
              backgroundColor: open ? colors.grey[100] : colors.grey[900],
              position: "absolute",
              transition:
                "transform 320ms ease-in-out, background-color 200ms ease-in-out",
            },
            "&::before": {
              transformOrigin: "top right",
              backgroundColor: open ? "white" : "transparent",
              transform: open ? "rotate(45deg) translate(4px, 14px)" : "",
            },
            "&::after": {
              transformOrigin: "bottom right",
              top: "8px",
              transform: open ? "rotate(-45deg) translate(4px, -14px)" : "",
            },
          }}
        />
      </Box>
      {menuList.map((item, id) => (
        <Box
          key={`menu-item-${id}`}
          sx={{
            position: "relative",
            [`&:hover #menu-submenu-item-${id}, &:focus-within #menu-submenu-item-${id}`]:
              {
                display: "flex",
              },
          }}
        >
          <Box component={HashLink} to={item.link} sx={innerSx}>
            {item.icon}
            <Typography component="span">{item.text}</Typography>
          </Box>
          {item.subMenuItems && (
            <Box
              id={`menu-submenu-item-${id}`}
              sx={{
                position: open ? "relative" : "absolute",
                left: open ? 0 : "calc(100% - 1rem)",
                pl: "2rem",
                top: 0,
                display: open ? "flex" : "none",
                zIndex: 1,
                mb: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  flexDirection: "column",
                  borderLeft: open ? `1px solid ${colors.grey[400]}` : "none",
                  pl: open ? "0.4rem" : 0,
                  "> a": {
                    backgroundColor: open ? "none" : "white",
                    color: open ? "white" : colors.grey[900],
                    fontSize: "0.875rem",
                    py: open ? 1 : 2,
                    px: 3,
                    mb: 1,
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 1,
                    boxShadow: open ? "none" : 3,
                    textDecoration: "none",
                  },
                  "> a > *:not(:last-child)": {
                    mr: 2,
                  },
                  "> a:hover, > a:hover span, > a:focus, > a:focus span": {
                    background: open ? colors.grey[50] : bgColor,
                    color: open ? colors.grey[900] : "white",
                  },
                  ...(open
                    ? {
                        span: {
                          color: colors.common.white,
                        },
                      }
                    : {}),
                }}
              >
                {item.subMenuItems.map((page, id) =>
                  page.external ? (
                    <Box
                      key={`menu-submenu-item-${id}`}
                      component="a"
                      href={page.pageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {page.icon}
                      <Typography component="span">{page.title}</Typography>
                    </Box>
                  ) : (
                    <Box
                      key={`menu-submenu-item-${id}`}
                      component={HashLink}
                      to={page.pageUrl}
                    >
                      {page.icon}
                      <Typography component="span">{page.title}</Typography>
                    </Box>
                  )
                )}
              </Box>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default MenuScreen;
