import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypeBackground {
        light: string;
        darker: string;
        invert: string;
        action: string;
    }

    interface TypeText {
        invert: string;
        /** Brand accent text color, matches palette.primary.main. */
        accent: string;
        success: string;
        warning: string;
    }
}
