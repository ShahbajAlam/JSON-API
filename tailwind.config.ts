import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        // extend: {
        //     backgroundImage: {
        //         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        //         "gradient-conic":
        //             "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        //     },
        // },
    },
    plugins: [daisyui],
    daisyui: {
        themes: ["forest", "bumblebee"],
    },
    // when data-theme is "forest", it will be considered as dark mode, and we can apply :dark
    darkMode: ["selector", '[data-theme="forest"]'],
};
export default config;
