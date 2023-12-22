/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        'postcss-rem': {
            name: 'rem', // Default to 'rem-convert'
            // baseline: 16,        // Default to 16
            // convert: "px",    // Default to 'rem'
            // fallback: true,      // Default to false
            // precision: 5,        // Default to 5
        },
        'postcss-mixins': {},
        'postcss-simple-vars': {},
        'postcss-will-change': {},
        'postcss-nested-ancestors': {},
        'postcss-nested': {},
        'postcss-calc': {},
        'postcss-flexbugs-fixes': {},
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {}
    }
};

module.exports = config;
