import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensure relative paths
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets', // Place assets in 'dist/assets/'
    rollupOptions: {
        output: {
            assetFileNames: (assetInfo) => {
                if (assetInfo.name.includes('fa-') || assetInfo.name.includes('webfonts')) {
                    return 'webfonts/[name][extname]'; // Move FontAwesome fonts
                }
                return 'assets/[name]-[hash][extname]';
            },
        },
    },
}
})
