/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                mainBG: "#0D1117",
                colBorder: "#F2F2F2",
                cardPurple: "#B4A0D1",
                cardYellow: "#FDC959",
                cardRed: "#FE5A35",
                cardGreen: "#CBD87E",
                newColColour: "#00FFFF",
            },
        },
    },
    plugins: [],
};
