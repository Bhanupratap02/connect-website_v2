/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "https://connectplus.zarvisgenix.com/test5/",
  base: "/",
  plugins: [react()],
});
 