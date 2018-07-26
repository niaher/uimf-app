/* eslint-disable no-console */

// Compilation process:
// 1. build svelte components and copy them to "./build" (the build is done with typescript compilation)
// 2. compile compile-app-ts and move it to "../wwwroot/js/app.js"
// 3. compile all ["scr/**/*.scss", "src/**/*.css"] files and move them to "../wwwroot/css/main.css"
// 4. move all files from "./wwwroot" to "../wwwroot".

const gulp = require("gulp"),
	gulpSvelte = require("gulp-svelte"),
	rollup = require("rollup"),
	tsc = require("typescript"),
	rollupTypescript = require("rollup-plugin-typescript2"),
	commonjs = require("rollup-plugin-commonjs"),
	resolve = require("rollup-plugin-node-resolve"),
	builtins = require("rollup-plugin-node-builtins"),
	globals = require("rollup-plugin-node-globals"),
	sass = require("gulp-sass"),
	concat = require("gulp-concat"),
	del = require("del"),
	merge2 = require("merge2"),
	distDir = "../wwwroot",
	svelteComponentsDir = "build/svelte";

process.on("unhandledRejection", r => console.log(r)); // eslint-disable-line no-console

gulp.task("clean", () => del("build", { force: true }));

gulp.task("svelte", ["clean"], () => {
	const copySharedJs = gulp
		.src("node_modules/svelte/shared.js")
		.pipe(gulp.dest(svelteComponentsDir));

	const copyOutputs = gulp
		.src("src/core/ui/outputs/*.ts")
		.pipe(gulp.dest(`${svelteComponentsDir}/core/ui/outputs`));

	// Break down Svelte build into multiple steps, because for some reason,
	// if we pass "src/**/*.html" to the buildSvelte function, the build won't
	// work correctly (the `pipe` will never `end`).
	const buildComponents = gulp
		.src("src/**/*.html")
		.pipe(gulpSvelte({
			format: "es",
			generate: "dom",
			shared: true,
			dev: true,
			css: true,
			onwarn(e) {
			// Ignore css-unused-selector warning, because it's incorrect.
				if (e.code !== "css-unused-selector") {
					console.log("\x1b[33m%s\x1b[0m", e.filename);
					console.log(e.toString());
				}
			},
			onerror(e) {
				console.log(e);
			}
		}))
		.pipe(gulp.dest(svelteComponentsDir));

	return merge2([copySharedJs, copyOutputs], buildComponents);
});

gulp.task("compile-app-ts", ["svelte"], () => rollup
	.rollup({
		input: "src/App.ts",
		plugins: [
			resolve({
				jsnext: true,
				main: true,
				browser: true
			}),
			commonjs(),
			rollupTypescript({
				typescript: tsc,
				tsconfig: "src/tsconfig.json"
			}),
			globals(),
			builtins()
		]
	}).then(bundle => bundle.write({
		format: "iife",
		file: `${distDir}/js/App.js`,
		sourceMap: true,
		name: "app"
	})));

gulp.task("copy-html", () => gulp
	.src("wwwroot/**")
	.pipe(gulp.dest(distDir)));

gulp.task("sass", () => gulp
	.src(["src/**/*.scss", "src/**/*.css"])
	.pipe(sass().on("error", sass.logError))
	.pipe(concat("main.css"))
	// TODO: uglify
	.pipe(gulp.dest(`${distDir}/css/`)));

gulp.task("watch", ["compile-app-ts", "sass", "copy-html"], () => {
	gulp.watch(["src/**/*.ts", "src/**/*.html"], ["compile-app-ts"]);
	gulp.watch(["src/**/*.scss", "src/**/*.css"], ["sass"]);
	gulp.watch("wwwroot/**", ["copy-html"]);
});

gulp.task("build", ["sass", "compile-app-ts", "copy-html"]);
