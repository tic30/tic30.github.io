import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import { Box, Paper, styled, Typography, useTheme, type SxProps } from '@mui/material';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { introSlides2024AndBefore, introSlides2025, introSlidestldr } from '../../texts';
import Markdown from 'markdown-to-jsx';

const tabs = [
    {
        id: 'tldr',
        icon: <AirlineStopsIcon color="primary" sx={{ fontSize: '1.25rem' }} />,
        label: 'tl;dr',
        content: introSlidestldr,
    },
    {
        id: '2025',
        icon: <AutoAwesomeIcon color="success" sx={{ fontSize: '1.25rem' }} />,
        label: '2025 so far',
        content: introSlides2025,
    },
    {
        id: '2024',
        icon: <CollectionsBookmarkIcon color="warning" sx={{ fontSize: '1.25rem' }} />,
        label: '2024 and before',
        content: introSlides2024AndBefore,
    },
];

export const TopSectionSlider = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const theme = useTheme();

    const getIconByTabId = (id: string, isSelected: boolean) =>
        ({
            tldr: (
                <AirlineStopsIcon
                    color={isSelected ? 'primary' : 'inherit'}
                    sx={{ fontSize: '1.25rem' }}
                />
            ),
            '2025': (
                <AutoAwesomeIcon
                    color={isSelected ? 'success' : 'inherit'}
                    sx={{ fontSize: '1.25rem' }}
                />
            ),
            '2024': (
                <CollectionsBookmarkIcon
                    color={isSelected ? 'warning' : 'inherit'}
                    sx={{ fontSize: '1.25rem' }}
                />
            ),
        })[id];

    return (
        <Paper sx={container}>
            <Box sx={nav}>
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
                            {getIconByTabId(item.id, item === selectedTab)}
                            <Typography
                                sx={{
                                    color: selectedTab === item ? 'text.primary' : 'text.secondary',
                                }}
                            >
                                {item.label}
                            </Typography>
                            {item === selectedTab ? (
                                <StyledUnderline
                                    as={motion.div}
                                    // @ts-expect-error Needed for motion
                                    layoutId="underline"
                                    id="underline"
                                />
                            ) : null}
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box
                sx={{
                    flexGrow: 1,
                    backgroundColor: 'background.light',
                }}
            >
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
    height: '50vh',
    borderRadius: 4,
    overflow: 'hidden',
    border: 'none',
    backgroundColor: 'transparent',
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
    px: ['0.5rem', '0.5rem', '1.5rem'],
    py: '0.5rem',
    position: 'relative',
    backgroundColor: 'background.paper',

    cursor: 'pointer',
    display: 'flex',
    gap: 2,
    alignItems: 'center',
    minWidth: 0,
    userSelect: 'none',
    color: 'text.primary',
    '&, p': {
        textWrap: 'nowrap',
        fontSize: '1.25rem',
    },
};

const StyledUnderline = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: -2,
    left: 0,
    right: 0,
    height: 2,
    background: theme.palette.text.warning,
}));

const mainContent: SxProps = {
    flexGrow: 1,
    paddingInline: 4,
    paddingBlock: 2,
    lineHeight: 1.5,
};
