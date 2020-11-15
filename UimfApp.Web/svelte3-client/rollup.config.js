import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';
import del from 'rollup-plugin-delete';
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import sass from 'sass';

const production = !process.env.ROLLUP_WATCH;
const distDir = '../wwwroot';

export default [
	{
		input: 'src/main.ts',
		output: {
			sourcemap: true,
			format: 'iife',
			name: 'app',
			file: `${distDir}/build/bundle.js`
		},
		plugins: [
			svelte({
				generate: 'dom',
				dev: !production,
				css: css => css.write('bundle.css'),
				preprocess: sveltePreprocess({
					sourceMap: !production,
					defaults: {
						style: 'scss'
					},
					scss: {
						prependData: "@import 'src/style/variables.scss';"
					},
					postcss: {
						plugins: [autoprefixer()]
					}
				}),
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
		]
	}];
