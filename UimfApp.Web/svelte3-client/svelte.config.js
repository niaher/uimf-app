const sveltePreprocess = require('svelte-preprocess');
const autoprefixer = require('autoprefixer');

function createPreprocessors(production) {
    return sveltePreprocess({
        sourceMap: !production,
        defaults: {
            script: 'ts',
            style: 'scss'
        },
        scss: {
            prependData: "@import 'src/style/variables.scss';"
        },
        postcss: {
            plugins: [autoprefixer()]
        }
    });
}

module.exports = {
    preprocess: createPreprocessors(false),
    createPreprocessors: createPreprocessors,
    onwarn: (warning, handler) => {
        // Ignore some warnings.
        if (warning.code === 'unused-export-let') {
            return;
        }
        
        handler(warning)
    }
};