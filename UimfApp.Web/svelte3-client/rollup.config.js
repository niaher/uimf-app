import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import multi from '@rollup/plugin-multi-entry';
import scss from 'rollup-plugin-scss';
import del from 'rollup-plugin-delete';
import svelte from 'rollup-plugin-svelte';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import sass from 'sass';
const svelteConfig = require('./svelte.config.js');

const production = !process.env.ROLLUP_WATCH;
const distDir = '../wwwroot';

export default [
	{
		input: [
			'src/main.ts',
			'src/ui/inputs/**/*.ts',
			'src/ui/outputs/**/*.ts'
		],
		output: {
			sourcemap: true,
			format: 'iife',
			name: 'app',
			file: `${distDir}/build/bundle.js`
		},
		plugins: [
			multi(),
			svelte({
				generate: 'dom',
				dev: !production,
				css: css => css.write('bundle.css'),
				preprocess: svelteConfig.createPreprocessors(production),
				onwarn: svelteConfig.onwarn
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
			typescript({
				sourceMap: !production,
				inlineSources: !production
			}),
			production && terser()
		],
		watch: {
			clearScreen: false
		}
	},
	{
		input: 'src/style/bootstrap.js',
		output: {
			sourcemap: true,
			format: 'es',
			file: `${distDir}/build/bootstrap.js`
		},
		plugins: [
			del({
				runOnce: false,
				force: true,
				targets: `${distDir}/build/bootstrap.*`
			}),
			scss({
				sourceMapEmbed: true,
				output: true,
				watch: ['src/style/'],
				processor: css => postcss([
					autoprefixer()
				]),
				sass: sass
			})
		],
		onwarn: (warning, handler) => {
			// Ignore some warnings.
			if (warning.code === 'EMPTY_BUNDLE') {
				return;
			}
			
			handler(warning)
		}
	}];
