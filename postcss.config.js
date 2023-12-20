/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        'postcss-will-change': {},
        'postcss-nested': {},
        'postcss-calc': {},
        'postcss-flexbugs-fixes': {},
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {}
    }
};

module.exports = config;
