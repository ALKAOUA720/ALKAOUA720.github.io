import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "docs", // 输出构建产物到docs目录
  },
  server: {
    proxy: {
      "/HPImageArchive.aspx": {
        target: "https://www.bing.com", // 想访问的后端服务器地址
        changeOrigin: true, // 是否改写 origin，设置为 true 之后，就会把请求 API header 中的 origin，改成跟 target 里边的域名一样了
      },
    },
  },
});
