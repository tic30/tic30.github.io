import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypeBackground {
        light: string;
        darker: string;
        invert: string;
    }

    interface TypeText {
        invert: string;
        success: string;
        warning: string;
    }
}
