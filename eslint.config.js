import eslint from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    globalIgnores(['build', 'dist']),
    eslint.configs.recommended,
    tseslint.configs.recommended,
    reactRefresh.configs.vite,
    reactHooks.configs.flat.recommended,
]);
