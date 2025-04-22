import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        https: {
            key: fs.readFileSync(path.resolve('../server.key')),
            cert: fs.readFileSync(path.resolve('../server.crt')),
        },
        host: true, // Listen on all public IPs
    },
})
