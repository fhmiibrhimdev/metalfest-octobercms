/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: 'tw-',
    content: [
        "./content/**/*.{htm,js}",
        "./layouts/**/*.{htm,js}",
        "./pages/**/*.{htm,js}",
        "./partials/**/*.{htm,js}",
        "./resources/**/*.js",
    ],
    theme: {
        extend: {},
    },
    plugins: [{
        tailwindcss: {},
        autoprefixer: {},
    }],
}
