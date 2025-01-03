import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/**.html", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans JP", "sans-serif"],
      },
      colors: {
        baseLight: "#02BB4F",
        baseMedium: "#028f3c",
        baseDark: "#015f28",
      },
    },
  },
  plugins: [],
} satisfies Config;
