import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import terser from '@rollup/plugin-terser';
import vike from 'vike/plugin';

export default defineConfig(({ mode }) => {
    const isDevelopment = mode === 'development';

    return {
        plugins: [react(), vike()],
        ssr: {
            noExternal: ['styled-components', '@emotion/*'],
        },
        build: {
            minify: isDevelopment ? false : 'terser',
            rollupOptions: {
                output: {
                    sourcemap: isDevelopment,
                },
                plugins: isDevelopment
                    ? []
                    : [
                          terser({
                              compress: {
                                  drop_console: true,
                              },
                          }),
                      ],
            },
        },
    };
});
