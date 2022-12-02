import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: { include: ["lodash.throttle", "lodash.orderby"] },
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, "./src/locales/**"),
    }),
  ],
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
      "components/": `${path.resolve(__dirname, "src/components")}/`,
      "layout/": `${path.resolve(__dirname, "src/layout")}/`,
      "views/": `${path.resolve(__dirname, "src/views")}/`,
      "mixins/": `${path.resolve(__dirname, "src/mixins")}/`,
    },
    extensions: [
      ".mjs",
      ".js",
      ".ts",
      ".jsx",
      ".tsx",
      ".json",
      ".vue",
      ".scss",
    ],
  },
  server: {
    host: true,
    proxy: {
      "^/v1": {
        // target: 'http://localhost:8000',
        target: "http://192.168.43.224:8000",
        ws: true,
        changeOrigin: true,
      },
    },
  },
});
