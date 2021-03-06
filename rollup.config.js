import commonjs from '@rollup/plugin-commonjs';
import noderesolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const esm = {
    input: 'scripts/main.js',
    output: {
        format: 'es',
        sourcemap: true,
        file: `public/scripts/main-${process.env.npm_package_version}.esm.min.js`
    },
    plugins: [
        commonjs(),
        noderesolve(),
        babel({ babelHelpers: 'bundled' }),
        terser()
    ]
};

const iife = {
    input: 'scripts/main.js',
    output: {
        format: 'iife',
        file: `public/scripts/main-${process.env.npm_package_version}.iife.min.js`,
        name: 'main'
    },
    plugins: [
        commonjs(),
        noderesolve(),
        babel({ babelHelpers: 'bundled' }),
        terser()
    ]
};

const conf = process.env.BABEL_ENV === 'esm' ? esm : iife;
export default conf;
