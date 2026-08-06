import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    build: {
        outDir: 'build',
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes('node_modules/@mui/')) {
                        return 'mui';
                    }
                    if (id.includes('node_modules/motion/')) {
                        return 'motion';
                    }
                    if (
                        id.includes('node_modules/react/') ||
                        id.includes('node_modules/react-dom/') ||
                        id.includes('node_modules/react-router-dom/') ||
                        id.includes('node_modules/react-router-hash-link/')
                    ) {
                        return 'vendor';
                    }
                    return undefined;
                },
            },
        },
    },
    plugins: [react()],
});
