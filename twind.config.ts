import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  selfURL: import.meta.url,
  theme: {
    colors: {
      gray: colors.trueGray,
      cyan: colors.cyan,
      teal: colors.teal,
      sky: colors.sky,
      rose: colors.rose,
      orange: colors.orange,
      yellow: colors.yellow,
      emerald: colors.emerald,
      green: colors.green,
      red: colors.red,
      violet: colors.violet,
      indigo: colors.indigo,
      white: colors.white,
      blue: colors.blue,
      pink: colors.pink,
    },
    extend: {
      fontFamily: {
        releway: ["Raleway"],
        signature: ["Great Vibes"],
        dmserif: ["DM Serif", "serif"],
        sans: ["Helvetica", "sans-serif"],
        montserrat: ["Montserrat"],
        poza: ["Proza", "Libre"],
      },
    },
    screens: {
      "xs": { "max": "420px" },
      "sm": "640px",

      "md": "768px",

      "lg": "1024px",

      "xl": "1280px",

      "2xl": "1536px",
    },
  },

  preflight: {
    "@import": [
      `url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@300;400;500&family=Proza+Libre&family=Raleway:wght@100;200;300;400;500;700&display=swap')`,
    ],
  },
} as Options;
