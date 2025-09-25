import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
    input: 'node_modules/@zootools/email-spell-checker/dist/index.js',
    output: [
        {file: '../frontend/web/js/email-spell-checker.min.js', format: 'iife', name: 'emailSpellChecker'},
    ],
    plugins: [
        resolve({browser: true}),
        commonjs(),
        terser()
    ]
};
