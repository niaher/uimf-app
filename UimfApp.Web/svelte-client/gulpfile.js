/* eslint-disable no-console */

// Compilation process:
// 1. build svelte components and copy them to "./build" (the build is done with typescript compilation)
// 2. compile app-ts and move it to "../wwwroot/js/app.js"
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

function buildTypescriptFile(entry, tsconfig, outfile, moduleName) {
	return rollup.rollup({
		input: entry,
		plugins: [
			resolve({
				jsnext: true,
				main: true,
				browser: true
			}),
			commonjs(),
			rollupTypescript({
				typescript: tsc,
				tsconfig
			}),
			globals(),
			builtins()
		]
	}).then(bundle => bundle.write({
		format: "iife",
		file: outfile,
		sourceMap: true,
		name: moduleName
	}));
}

function buildSvelteComponents(src, dest) {
	return gulp
		.src(src)
		.on("error", console.log)
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
		.pipe(gulp.dest(dest));
}

gulp.task("clean", () => del("build", { force: true }));

gulp.task("app-ts", ["svelte"], () => buildTypescriptFile("src/App.ts", "src/tsconfig.json", `${distDir}/js/App.js`));

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
	// buildSvelteComponents(["src/**/*.html"], `${svelteComponentsDir}`);
	// return merge2([copySharedJs, copyOutputs], s1);

	const s1 = buildSvelteComponents(["src/core/ui/help/*.html"], `${svelteComponentsDir}/core/ui/help`);
	const s2 = buildSvelteComponents(["src/core/ui/*.html"], `${svelteComponentsDir}/core/ui`);
	const s3 = buildSvelteComponents("src/components/**/*.html", `${svelteComponentsDir}/components`);
	const s4 = buildSvelteComponents("src/core/ui/outputs/**/*.html", `${svelteComponentsDir}/core/ui/outputs`);
	const s5 = buildSvelteComponents("src/core/ui/inputs/**/*.html", `${svelteComponentsDir}/core/ui/inputs`);
	return merge2([copySharedJs, copyOutputs], [s1, s2, s3, s4, s5]);
});

gulp.task("copy-html", () => gulp
	.src("wwwroot/**")
	.pipe(gulp.dest(distDir)));

gulp.task("sass", () => gulp
	.src(["src/**/*.scss", "src/**/*.css"])
	.pipe(sass().on("error", sass.logError))
	.pipe(concat("main.css"))
	// TODO: uglify
	.pipe(gulp.dest(`${distDir}/css/`)));

gulp.task("watch", ["app-ts", "sass", "copy-html"], () => {
	gulp.watch(["src/**/*.ts", "src/**/*.html"], ["app-ts"]);
	gulp.watch(["src/**/*.scss", "src/**/*.css"], ["sass"]);
	gulp.watch("wwwroot/**", ["copy-html"]);
});

gulp.task("build", ["sass", "app-ts", "copy-html"]);
