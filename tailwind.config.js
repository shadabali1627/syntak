const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        path.join(__dirname, "./src/**/*"), // <--- The "Catch-All" pattern
    ],
    theme: {
        extend: {
            colors: {
                background: "#130623",
                primary: "#a78bfa",
                secondary: "#1e0b36",
            },
        },
    },
    plugins: [],
};