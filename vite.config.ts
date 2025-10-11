import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    build: {
        outDir: 'build',
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: [
                        'react',
                        'react-dom',
                        'react-router-dom',
                        'react-router-hash-link',
                        '@mui/material',
                        '@mui/icons-material',
                        'motion/react',
                    ],
                },
            },
        },
    },
    plugins: [react()],
});
