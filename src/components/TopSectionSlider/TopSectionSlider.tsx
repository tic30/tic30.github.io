import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import { Box, Paper, Typography, useTheme, type SxProps } from '@mui/material';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const tabs = [
    {
        icon: <AirplaneTicketIcon color="primary" sx={{ fontSize: 36 }} />,
        label: 'tl;dr',
        content: 'Tomato',
    },
    { icon: '🐍', label: '2025 so far', content: 'Lettuce' },
    {
        icon: <AccessTimeFilledIcon color="warning" sx={{ fontSize: 36 }} />,
        label: '2024 and before',
        content: 'Cheese',
    },
];

export const TopSectionSlider = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const theme = useTheme();

    return (
        <Paper sx={{ ...container, border: 'none', backgroundColor: 'background.paper' }}>
            <Box sx={{ ...nav, backgroundColor: 'background.invert' }}>
                <Box component="ul" sx={tabsContainer}>
                    {tabs.map((item) => (
                        <Box
                            component={motion.li}
                            key={item.label}
                            initial={{ backgroundColor: 'transparent' }}
                            animate={{
                                backgroundColor:
                                    item === selectedTab
                                        ? theme.palette.background.paper
                                        : 'transparent',
                            }}
                            sx={tab}
                            onClick={() => setSelectedTab(item)}
                        >
                            {item.icon}
                            <Typography
                                variant="h4"
                                sx={{
                                    color: selectedTab === item ? 'text.primary' : 'text.secondary',
                                }}
                            >
                                {item.label}
                            </Typography>
                            {item === selectedTab ? (
                                <Box
                                    component={motion.div}
                                    sx={underline}
                                    layoutId="underline"
                                    id="underline"
                                />
                            ) : null}
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box sx={iconContainer}>
                <AnimatePresence mode="wait">
                    <Box
                        component={motion.div}
                        key={selectedTab ? selectedTab.label : 'empty'}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        sx={icon}
                    >
                        {selectedTab ? selectedTab.content : ''}
                    </Box>
                </AnimatePresence>
            </Box>
        </Paper>
    );
};

/**
 * ==============   Styles   ================
 */

const container: SxProps = {
    height: '60vh',
    borderRadius: 4,
    overflow: 'hidden',
    boxShadow: 2,
};

const nav: SxProps = {
    padding: '8px 8px 0',
};

const tabsStyles: SxProps = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    fontWeight: 500,
    fontSize: 14,
};

const tabsContainer: SxProps = {
    ...tabsStyles,
    display: 'flex',
    width: '100%',
};

const tab: SxProps = {
    ...tabsStyles,
    borderRadius: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: '100%',
    padding: '1rem 1.5rem',
    position: 'relative',
    background: 'white',
    cursor: 'pointer',
    fontSize: '2rem',
    display: 'flex',
    gap: 2,
    alignItems: 'center',
    flex: 1,
    minWidth: 0,
    userSelect: 'none',
    color: 'text.primary',
};

const underline: SxProps = {
    position: 'absolute',
    bottom: -2,
    left: 0,
    right: 0,
    height: 2,
    background: 'red',
};

const iconContainer: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
};

const icon: SxProps = {
    fontSize: 128,
};
