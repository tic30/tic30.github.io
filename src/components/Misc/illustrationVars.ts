import { type Theme } from '@mui/material';

/**
 * CSS variables consumed by the inlined unDraw illustrations. Accent shapes use
 * currentColor; ink, grey and surface fills read these variables so the artwork
 * adapts to light and dark mode.
 */
export const illustrationVars = (theme: Theme) => {
    const dark = theme.palette.mode === 'dark';
    return {
        color: theme.palette.primary.main,
        '--illo-ink': dark ? '#e6e8ec' : '#2f2e41',
        '--illo-ink-soft': dark ? '#aab0ba' : '#3f3d56',
        '--illo-muted': dark ? '#4a5058' : '#e6e6e6',
        '--illo-muted-strong': dark ? '#5d646d' : '#cccccc',
        '--illo-screen': dark ? '#3a3f45' : '#ffffff',
        '--illo-screen-soft': dark ? '#474d54' : '#f2f2f2',
    };
};
