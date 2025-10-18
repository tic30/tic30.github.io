import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import { Box, Paper, Typography, useTheme, type SxProps } from '@mui/material';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { introSlides2024AndBefore, introSlides2025, introSlidestldr } from '../../texts';
import Markdown from 'markdown-to-jsx';
import { customColors } from '../../constants';

const tabs = [
    {
        icon: <AirlineStopsIcon color="primary" sx={{ fontSize: 36 }} />,
        label: 'tl;dr',
        content: introSlidestldr,
    },
    {
        icon: <AutoAwesomeIcon color="success" sx={{ fontSize: 36 }} />,
        label: '2025 so far',
        content: introSlides2025,
    },
    {
        icon: <CollectionsBookmarkIcon color="warning" sx={{ fontSize: 36 }} />,
        label: '2024 and before',
        content: introSlides2024AndBefore,
    },
];

export const TopSectionSlider = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const theme = useTheme();

    return (
        <Paper sx={container}>
            <Box sx={{ ...nav, backgroundColor: 'background.paper' }}>
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
                        sx={mainContent}
                    >
                        {selectedTab ? <Markdown>{selectedTab.content}</Markdown> : ''}
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
    display: 'flex',
    flexDirection: 'column',
    height: '60vh',
    borderRadius: 4,
    overflow: 'hidden',
    boxShadow: 2,
    border: 'none',
    backgroundColor: 'background.paper',
};

const nav: SxProps = {
    padding: '8px 8px 0',
};

const tabsStyles: SxProps = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    fontWeight: 500,
};

const tabsContainer: SxProps = {
    ...tabsStyles,
    display: 'flex',
    paddingBlockEnd: '2px',
    width: '100%',
    overflowX: 'auto',
    overflowY: 'visible',
};

const tab: SxProps = {
    ...tabsStyles,
    borderRadius: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    px: ['0.5rem', '0.5rem', '1rem'],
    py: ['0.5rem', '0.5rem', '1.5rem'],
    position: 'relative',
    background: 'white',
    cursor: 'pointer',
    display: 'flex',
    gap: 2,
    alignItems: 'center',
    flex: '1 0 auto',
    minWidth: 0,
    userSelect: 'none',
    color: 'text.primary',
    '&, p': {
        textWrap: 'nowrap',
        fontSize: ['1.25rem', '1.25rem', '2rem'],
    },
};

const underline: SxProps = {
    position: 'absolute',
    bottom: -2,
    left: 0,
    right: 0,
    height: 2,
    background: customColors.orange,
};

const iconContainer: SxProps = {
    flex: 1,
    overflowY: 'auto',
};

const mainContent: SxProps = {
    padding: 4,
    fontSize: ['1rem', '1rem', '1.25rem'],
    lineHeight: 1.5,
};
