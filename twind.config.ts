import { apply } from "twind";
import { Options } from "$fresh/plugins/twind.ts";

export default {
  preflight: {
    h2: apply`bg-gray-900 text-white p-4`,
    ul: apply`pl-8`,
    "h2+p": apply`p-8`
  },
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
