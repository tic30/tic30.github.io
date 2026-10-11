import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, useMediaQuery } from '@mui/material';
import { type Theme } from '@mui/material';
import { illustrationVars } from '../Misc/illustrationVars';

export interface EverpureIllustrations {
    rag?: React.ReactNode;
    mfe?: React.ReactNode;
    mcp?: React.ReactNode;
}

interface EverpurePageProps {
    /** Optional illustrations rendered as card media above each story. */
    illustrations?: EverpureIllustrations;
}

const Accent: React.FC<React.PropsWithChildren> = ({ children }) => (
    <Box component="span" sx={{ color: 'text.accent' }}>
        {children}
    </Box>
);

const mediaSx = (theme: Theme) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    overflow: 'hidden',
    backgroundColor: 'background.light',
    ...illustrationVars(theme),
});

interface StoryCardProps {
    title: React.ReactNode;
    illustration?: React.ReactNode;
    mediaHeight: number;
    /** Full-width card with the illustration beside the text instead of above it. */
    split?: boolean;
}

const StoryCard: React.FC<React.PropsWithChildren<StoryCardProps>> = ({
    title,
    illustration,
    mediaHeight,
    split = false,
    children,
}) => {
    const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const sideBySide = split && isMdUp;

    return (
        <Card
            sx={{
                borderRadius: 3,
                gridColumn: split ? '1 / -1' : 'auto',
                display: 'flex',
                flexDirection: sideBySide ? 'row' : 'column',
            }}
        >
            {illustration ? (
                <CardMedia
                    component="div"
                    sx={(theme) => ({
                        ...mediaSx(theme),
                        ...(sideBySide
                            ? {
                                  order: 1,
                                  flexShrink: 0,
                                  width: '40%',
                                  alignItems: 'center',
                                  p: 4,
                                  '& svg': {
                                      maxHeight: mediaHeight,
                                      width: 'auto',
                                      maxWidth: '100%',
                                  },
                              }
                            : {
                                  height: mediaHeight,
                                  pt: 3,
                                  px: 2,
                                  '& svg': { height: '100%', width: 'auto', maxWidth: '100%' },
                              }),
                    })}
                >
                    {illustration}
                </CardMedia>
            ) : null}
            <CardContent
                sx={{
                    p: isMdUp ? 5 : 2,
                    '&:last-child': { pb: isMdUp ? 5 : 2 },
                    display: 'flex',
                    alignItems: 'center',
                    flexGrow: 1,
                }}
            >
                <Box sx={{ maxWidth: '65ch' }}>
                    <Typography variant="h5" sx={{ mb: 3 }}>
                        {title}
                    </Typography>
                    {children}
                </Box>
            </CardContent>
        </Card>
    );
};

const EverpurePage: React.FC<EverpurePageProps> = ({ illustrations = {} }) => {
    const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

    return (
        <>
            <Typography variant="h4" sx={{ pb: 4 }}>
                UI Engineer @ Everpure
            </Typography>
            <Typography sx={{ mb: 5 }}>
                I work at Everpure as a Member of Technical Staff on the AI Infrastructure team. I
                build the front end of a retrieval-augmented generation (RAG) data platform: a data
                ingestion app, a unified React and Angular micro-frontend platform, Model Context
                Protocol (MCP) servers, and a shared React component library.
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    gap: 3,
                    mb: 9,
                    gridTemplateColumns: isMdUp ? 'repeat(2, minmax(0, 1fr))' : 'minmax(0, 1fr)',
                }}
            >
                <StoryCard
                    split
                    mediaHeight={isMdUp ? 320 : 240}
                    illustration={illustrations.rag}
                    title={
                        <>
                            Turn enterprise data into <Accent>AI-ready</Accent> knowledge
                        </>
                    }
                >
                    <Typography sx={{ mb: 2 }}>
                        The ingestion app lets teams connect data sources, process documents and
                        follow their pipelines as content flows into the platform.
                    </Typography>
                    <Typography>
                        Ingested content is indexed for <Accent>retrieval</Accent>, so answers
                        generated by AI are grounded in the organisation&apos;s own documents rather
                        than in guesswork.
                    </Typography>
                </StoryCard>
                <StoryCard
                    mediaHeight={220}
                    illustration={illustrations.mfe}
                    title={
                        <>
                            One shell for <Accent>React</Accent> and <Accent>Angular</Accent>
                        </>
                    }
                >
                    <Typography>
                        A unified micro-frontend platform hosts React and Angular apps side by side
                        behind one shell, and a shared React component library keeps every surface
                        consistent.
                    </Typography>
                </StoryCard>
                <StoryCard
                    mediaHeight={220}
                    illustration={illustrations.mcp}
                    title={
                        <>
                            Connect AI assistants through <Accent>MCP servers</Accent>
                        </>
                    }
                >
                    <Typography>
                        MCP servers expose the platform&apos;s data and tools to AI assistants, so
                        agents can search and act on enterprise knowledge.
                    </Typography>
                </StoryCard>
            </Box>
        </>
    );
};

export default EverpurePage;
