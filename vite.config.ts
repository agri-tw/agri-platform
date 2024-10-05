import { resolve } from "path";
import { defineConfig } from "vite";

import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [basicSsl(), react()],
    resolve: {
        alias: [
            { find: "@", replacement: resolve(__dirname, "./src") },
            { find: "@/constants", replacement: resolve(__dirname, "./src/constants") },
            { find: "@/locale", replacement: resolve(__dirname, "./src/locale") },
            { find: "@/utils", replacement: resolve(__dirname, "./src/utils") },
        ],
    },
});
