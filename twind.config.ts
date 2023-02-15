import { Options } from "$fresh/plugins/twind.ts";

export default {
  darkMode: "class",
  selfURL: import.meta.url,
  theme: {
    fontFamily: {
      "impact": ["impact"],
    },
    extend: {
      keyframes: {
        "slide": {
          "0%": { transform: "translateX(300px)", opacity: 0 },
          "100%": { transform: "translateX(0px)", opacity: 100 }
        },
        "fadein": {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 }
        }
      },
      animation: {
        "slide": "slide 0.5s ease-out",
        "fadein": "fadein 1.5s ease-out"
      }
    }
  }
} as Options;
