import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/**.html", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
