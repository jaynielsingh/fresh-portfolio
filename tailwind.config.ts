import { type Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  daisyui: {
    themes: ["light", "dark", "luxury"],
  },
  plugins: [daisyui],
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
} satisfies Config;
