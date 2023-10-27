import { apply } from "https://esm.sh/@twind/core@1.1.3";
import presetAutoprefix from "https://esm.sh/@twind/preset-autoprefix@1.0.7";
import presetContainerQueries from "https://esm.sh/@twind/preset-container-queries@1.0.7";
import presetExt from "https://esm.sh/@twind/preset-ext@1.0.7";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";
import { Options } from "$fresh/plugins/twindv1.ts";

export default {
  presets: [presetAutoprefix(), presetContainerQueries, presetExt(), presetTailwind()],
  preflight: {
    h2: apply`bg-gray-900 text-white p-4`,
    ul: apply`pl-[800px]`,
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
