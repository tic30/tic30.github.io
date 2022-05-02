import React, { useEffect, useMemo, useState } from 'react';
import { Box, colors, Typography } from '@mui/material';
import { HashLink } from 'react-router-hash-link';

const MenuScreen = ({
    open,
    setOpen,
    menuList = []
}) => {
    const [openDelay, setOpenDelay] = useState(false);

    useEffect(() => {
        setOpenDelay(false);
        setTimeout(() => setOpenDelay(true), 200);
    }, [open])

    const innerSx = useMemo(() => ({
        flexDirection: open ? 'row' : 'column',
        alignItems: 'center',
        borderRadius: 1,
        p: open ? '0.5rem 0.35rem' : 1,
        mb: open ? 3 : 1,
        height: open ? '2.5rem' : '3.5rem',
        width: open ? 'auto' : '4.25rem',
        '&, &:focus': {
            display: 'flex'
        },
        '> svg': {
            color: colors.grey[100],
            ...(open ? { mx: 2 } : {})
        },
        '> span': {
            fontSize: open ? '1rem' : '0.75rem',
            color: colors.grey[100],
            display: openDelay ? 'block' : 'none',
            opacity: openDelay ? 1 : 0,
        },
    }), [openDelay]);

    return (
        <Box sx={{
            height: 'calc(100% + 4.5rem)',
            width: open ? '12rem' : '5.5rem',
            backgroundColor: colors.grey[900],
            mt: '-4.5rem',
            p: 1,
            transition: 'width 0.2s',
            flexShrink: 0,
            zIndex: 10
        }}>
            <Box
                onClick={() => setOpen(!open)}
                sx={{
                    height: '4.5rem',
                    width: 'calc(100% + 1rem)',
                    transition: 'width 0.2s',
                    mt: -1,
                    ml: -1,
                    mb: 2,
                    p: 3,
                    backgroundColor: 'white',
                    '&:hover': {
                        backgroundColor: colors.grey[900],
                        '> div': {
                            backgroundColor: open ? colors.grey[900] : colors.grey[100]
                        },
                        '> div::after': {
                            backgroundColor: colors.grey[100]
                        }
                    },
                    ...(open ? {
                        backgroundColor: colors.grey[900],
                    } : {})
                }}
            >
                <Box
                    sx={{
                        width: '20px',
                        height: '2px',
                        margin: '8px 8px 16px',
                        backgroundColor: colors.grey[900],
                        position: 'relative',
                        transition: 'background-color 320ms ease-in-out',
                        '&::before, &::after': {
                            content: '" "',
                            display: 'block',
                            width: '120%',
                            height: '2px',
                            backgroundColor: open ? colors.grey[100] : colors.grey[900],
                            position: 'absolute',
                            transition: 'transform 320ms ease-in-out, background-color 200ms ease-in-out',
                        },
                        '&::before': {
                            transformOrigin: 'top right',
                            backgroundColor: open ? 'white' : 'transparent',
                            transform: open ? 'rotate(45deg) translate(4px, 14px)' : ''
                        },
                        '&::after': {
                            transformOrigin: 'bottom right',
                            top: '8px',
                            transform: open ? 'rotate(-45deg) translate(4px, -14px)' : ''
                        }
                    }}
                />
            </Box>
            {menuList.map((item, id) => (
                <Box
                    key={`menu-item-${id}`}
                    sx={{
                        position: 'relative',
                        '&:hover > a': {
                            backgroundColor: colors.grey[100],
                            '> svg, > span': {
                                color: colors.grey[900]
                            },
                        },
                        ...(item.subMenuItems ? {
                            [`:hover #menu-submenu-item-${id}`]: {
                                display: 'flex'
                            }
                        } : {})
                    }}
                >
                    {item.external ? (
                        <Box component="a" href={item.link} target="_blank" rel="noopener noreferrer" sx={innerSx}>
                            {item.icon}
                            <Typography component="span">{item.text}</Typography>
                        </Box>
                    ) : (
                        <Box component={HashLink} to={item.link} sx={innerSx}>
                            {item.icon}
                            <Typography component="span">{item.text}</Typography>
                        </Box>
                    )}
                    {item.subMenuItems && (
                        <Box
                            id={`menu-submenu-item-${id}`}
                            sx={{
                                position: 'absolute',
                                left: 'calc(100% - 1rem)',
                                pl: '2rem',
                                top: 0,
                                display: 'none',
                                zIndex: 1,
                            }}
                        >
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                minWidth: '15rem',
                                backgroundColor: 'white',
                                borderRadius: 2,
                                boxShadow: `0 1px 8px ${colors.grey[400]}`,
                                overflow: 'hidden',
                                '> a': {
                                    color: colors.grey[900],
                                    fontSize: '1rem',
                                    p: 3,
                                    borderBottom: `1px solid ${colors.grey[200]}`
                                },
                                '> a:hover': {
                                    backgroundColor: colors.grey[500],
                                    color: 'white',
                                },
                            }}>
                                {item.subMenuItems}
                            </Box>
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
};

export default MenuScreen;
