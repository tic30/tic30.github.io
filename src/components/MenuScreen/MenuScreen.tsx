import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
    Box,
    styled,
    Switch,
    type Theme,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import { type SystemStyleObject } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SummarizeIcon from '@mui/icons-material/Summarize';
import CoffeeIcon from '@mui/icons-material/Coffee';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { AnimatePresence, motion } from 'motion/react';
import useScrollDirection from '../../hooks/useScrollDirection';
import { GITHUB, LINKEDIN, RESUME } from '../../constants';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003153' : '#fff',
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#e85827',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

const menuList: MenuItemType[] = [
    {
        icon: <PersonIcon />,
        text: 'About Me',
        link: '/home#self-intro',
    },
    {
        icon: <DesignServicesIcon />,
        text: 'My work',
        link: '/home#work',
        subMenuItems: [
            {
                title: 'Projects',
                pageUrl: '/projects/microfe',
                icon: <DeveloperBoardIcon />,
            },
            {
                title: 'Blogs',
                pageUrl: '/home#blogs',
                icon: <AutoStoriesIcon />,
            },
        ],
    },
    {
        icon: <CoffeeIcon />,
        text: 'Connect',
        link: '/home#connect',
        subMenuItems: [
            {
                icon: <SummarizeIcon />,
                title: 'Resume',
                pageUrl: RESUME,
                external: true,
            },
            {
                icon: <LinkedInIcon />,
                title: 'LinkedIn',
                pageUrl: LINKEDIN,
                external: true,
            },
            {
                icon: <GitHubIcon />,
                title: 'GitHub',
                pageUrl: GITHUB,
                external: true,
            },
        ],
    },
];

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
    scrollAreaRef: React.RefObject<HTMLDivElement | null>;
    toggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuScreen: React.FC<MenuScreenType> = ({ scrollAreaRef, toggleDarkMode }) => {
    const menuTriggerRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
    const scrollDir = useScrollDirection(scrollAreaRef.current);
    const theme = useTheme();

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const scrollListener = () => {
            sections.forEach((current) => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 100;
                const sectionId = current.getAttribute('id');
                if (
                    (scrollAreaRef.current?.scrollTop ?? window.pageYOffset) > sectionTop &&
                    (scrollAreaRef.current?.scrollTop ?? window.pageYOffset) <=
                        sectionTop + sectionHeight
                ) {
                    document
                        .querySelector('.header-menu a[href*="' + sectionId + '"]')
                        ?.classList.add('active');
                } else {
                    document
                        .querySelector('.header-menu a[href*="' + sectionId + '"]')
                        ?.classList.remove('active');
                }
            });
        };
        const scrollRef = scrollAreaRef.current;
        scrollRef?.addEventListener('scroll', scrollListener);

        return () => scrollRef?.removeEventListener('scroll', scrollListener);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const innerSx = useMemo(
        () => ({
            flexDirection: open ? 'row' : 'column',
            alignItems: 'center',
            borderRadius: 2,
            p: open ? '0.5rem 0.35rem' : 1,
            mb: open ? 3 : 1,
            height: open ? '2.5rem' : '3.5rem',
            width: open ? 'auto' : '4.25rem',
            justifyContent: open ? 'flex-start' : 'center',
            textDecoration: 'none',
            color: theme.palette.text.primary,
            '&:hover': {
                cursor: 'pointer',
            },
            '&, &:focus': {
                display: 'flex',
            },
            span: {
                fontSize: open ? '1rem' : '0.75rem',
            },
            '&:hover, &.active, &:focus': {
                backgroundColor:
                    theme.palette.mode === 'dark' && open
                        ? theme.palette.background.light
                        : theme.palette.background.default,
                boxShadow: theme.palette.mode === 'dark' ? 0 : 3,
                '> svg, > span': {
                    color: theme.palette.text.primary,
                },
            },
        }),
        [open, isSmUp, theme.palette.mode],
    );

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
        if (e.code === 'Space' || e.code === 'Enter') {
            setOpen(!open);
        }
    };

    const handleMenuItemClick = (): void => {
        setOpen(false);
        menuTriggerRef.current?.focus();
    };

    const wrapperMobileStyle = {
        overflow: 'hidden',
        height: open ? '100%' : '4.5rem',
        width: '100%',
        marginTop: scrollDir === 'DOWN' ? '-4.5rem' : 0,
    } as SystemStyleObject;

    const wrapperSmUpStyle = {
        blockSize: '100vh',
        overflowY: 'auto',
        width: open ? '24rem' : '6.25rem',
    } as SystemStyleObject;

    const hambergurSmUpStyle = {
        '&:hover': {
            background: theme.palette.text.primary,
            '> div': {
                background: open ? theme.palette.text.primary : theme.palette.background.default,
            },
            '> div::after': {
                background: theme.palette.background.default,
            },
        },
    } as SystemStyleObject;

    return (
        <Box
            className="header-menu"
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                boxSizing: 'border-box',
                background: open ? theme.palette.background.default : 'transparent',
                p: 1,
                transition: '0.2s',
                flexShrink: 0,
                zIndex: 10,
                boxShadow: open ? 5 : 'none',
                ...(isSmUp ? wrapperSmUpStyle : wrapperMobileStyle),
            }}
        >
            <Box
                ref={menuTriggerRef}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                onClick={() => setOpen(!open)}
                sx={{
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: '13',
                    boxSizing: 'border-box',
                    height: '4.5rem',
                    width: 'calc(100% + 1rem)',
                    transition: 'width 0.2s',
                    mt: -1,
                    ml: -1,
                    mb: 2,
                    p: 3,
                    ...(isSmUp ? hambergurSmUpStyle : {}),
                    '&:hover': {
                        background: theme.palette.background.light,
                    },
                }}
            >
                <Box
                    sx={{
                        width: '20px',
                        height: '2px',
                        margin: '8px 8px 16px',
                        position: 'relative',
                        transition: 'background-color 320ms ease-in-out',
                        '&::before, &::after': {
                            content: '" "',
                            display: 'block',
                            width: '120%',
                            height: '2px',
                            backgroundColor: theme.palette.background.invert,
                            position: 'absolute',
                            transition:
                                'transform 320ms ease-in-out, background-color 200ms ease-in-out',
                        },
                        '&::before': {
                            transformOrigin: 'top right',
                            transform: open ? 'rotate(45deg) translate(4px, 14px)' : '',
                        },
                        '&::after': {
                            transformOrigin: 'bottom right',
                            top: '8px',
                            transform: open ? 'rotate(-45deg) translate(4px, -14px)' : '',
                        },
                    }}
                />
            </Box>
            <AnimatePresence>
                {menuList.map((item, id) => (
                    <Box
                        key={`menu-item-${id}`}
                        sx={{
                            position: 'relative',
                            [`&:hover #menu-submenu-item-${id}, &:focus-within #menu-submenu-item-${id}`]:
                                {
                                    display: 'flex',
                                },
                        }}
                    >
                        <Box
                            component={HashLink}
                            to={item.link}
                            sx={innerSx}
                            onClick={handleMenuItemClick}
                        >
                            <Box
                                component={motion.div}
                                layout="position"
                                transition={{ duration: 0.2 }}
                                sx={open ? { mx: 2 } : {}}
                            >
                                {item.icon}
                            </Box>
                            <Typography
                                layout="position"
                                component={motion.span}
                                transition={{ duration: 0.2 }}
                            >
                                {item.text}
                            </Typography>
                        </Box>
                        {item.subMenuItems && (
                            <Box
                                id={`menu-submenu-item-${id}`}
                                sx={{
                                    position: open ? 'relative' : 'absolute',
                                    left: open ? 0 : 'calc(100% - 1rem)',
                                    pl: '2rem',
                                    top: 0,
                                    display: open ? 'flex' : 'none',
                                    zIndex: 1,
                                    mb: 3,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexGrow: 1,
                                        flexDirection: 'column',
                                        pl: open ? '0.4rem' : 0,
                                        '> a': {
                                            backgroundColor: open
                                                ? 'none'
                                                : theme.palette.background.default,
                                            color: theme.palette.text.primary,
                                            fontSize: '0.875rem',
                                            py: open ? 1 : 2,
                                            px: 3,
                                            mb: 1,
                                            whiteSpace: 'nowrap',
                                            display: 'flex',
                                            alignItems: 'center',
                                            borderRadius: 2,
                                            boxShadow:
                                                !open && theme.palette.mode === 'light'
                                                    ? 3
                                                    : 'none',
                                            textDecoration: 'none',
                                        },
                                        '> a > *:not(:last-child)': {
                                            mr: 2,
                                        },
                                        '> a:hover, > a:focus': {
                                            background: open
                                                ? theme.palette.background.light
                                                : theme.palette.background.invert,
                                            color: open
                                                ? theme.palette.text.primary
                                                : theme.palette.background.default,
                                            boxShadow: theme.palette.mode === 'dark' ? 0 : 3,
                                        },
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
                                                <Typography component="span">
                                                    {page.title}
                                                </Typography>
                                            </Box>
                                        ) : (
                                            <Box
                                                key={`menu-submenu-item-${id}`}
                                                component={HashLink}
                                                to={page.pageUrl}
                                                onClick={handleMenuItemClick}
                                            >
                                                {page.icon}
                                                <Typography component="span">
                                                    {page.title}
                                                </Typography>
                                            </Box>
                                        ),
                                    )}
                                </Box>
                            </Box>
                        )}
                    </Box>
                ))}
            </AnimatePresence>
            <AnimatePresence>
                {(isSmUp || open) && (
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.3 } }}
                        exit={{ opacity: 0, transition: { duration: 0.2, delay: 0 } }}
                        sx={{
                            position: 'absolute',
                            left: '1rem',
                            bottom: '1.5rem',
                            zIndex: 11,
                        }}
                    >
                        <MaterialUISwitch onClick={() => toggleDarkMode((m) => !m)} />
                    </Box>
                )}
            </AnimatePresence>
        </Box>
    );
};

export default MenuScreen;
