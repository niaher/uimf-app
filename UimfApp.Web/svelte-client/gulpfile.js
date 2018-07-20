// Compilation process:
// 1. build svelte components and copy them to "./build" (the build is done with typescript compilation)
// 2. compile App.ts and move it to "../wwwroot/js/app.js"
// 3. compile all ["scr/**/*.scss", "src/**/*.css"] files and move them to "../wwwroot/css/main.css"
// 4. move all files from "./wwwroot" to "../wwwroot".

const gulp = require("gulp"),
	gulpSvelte = require("gulp-svelte"),
	rollup = require("rollup"),
	typescript = require("rollup-plugin-typescript2"),
	commonjs = require("rollup-plugin-commonjs"),
	resolve = require("rollup-plugin-node-resolve"),
	builtins = require("rollup-plugin-node-builtins"),
	globals = require("rollup-plugin-node-globals"),
	sass = require("gulp-sass"),
	concat = require("gulp-concat"),
	distDir = "../wwwroot";

process.on("unhandledRejection", r => console.log(r)); // eslint-disable-line no-console

function build(entry, tsconfig, outfile, moduleName) {
	return rollup.rollup({
		entry,
		plugins: [
			resolve({
				jsnext: true,
				main: true,
				browser: true
			}),
			commonjs(),
			typescript({
				tsconfig
			}),
			globals()
			// builtins()
		]
	}).then(bundle => {
		bundle.write({
			format: "iife",
			dest: outfile,
			sourceMap: true,
			moduleName
		});
	});
}

gulp.task("app.ts", ["svelte"], () => build("src/app.ts", "src/tsconfig.json", `${distDir}/js/app.js`));

const svelteComponentsDir = "build/svelte";

gulp.task("svelte-copy-sharedjs", () => gulp
	.src("node_modules/svelte/shared.js")
	.pipe(gulp.dest(svelteComponentsDir)));

gulp.task("svelte-copy-outputs", () => gulp
	.src("src/core/ui/outputs/*.ts")
	.pipe(gulp.dest(`${svelteComponentsDir}/core/ui/outputs`)));

gulp.task("svelte", ["svelte-copy-sharedjs", "svelte-copy-outputs"], () => gulp
	.src("src/**/*.html")
	.pipe(gulpSvelte({
		format: "es",
		generate: "dom",
		shared: true
	}))
	.pipe(gulp.dest(svelteComponentsDir)));

gulp.task("copy-html", () => gulp
	.src("wwwroot/**")
	.pipe(gulp.dest(distDir)));

gulp.task("sass", () => gulp
	.src(["src/**/*.scss", "src/**/*.css"])
	.pipe(sass().on("error", sass.logError))
	.pipe(concat("main.css"))
	// TODO: uglify
	.pipe(gulp.dest(`${distDir}/css/`)));

gulp.task("watch", ["app.ts", "sass", "copy-html"], () => {
	gulp.watch("src/**/*.ts", ["app.ts"]);
	gulp.watch("src/**/*.html", ["svelte", "app.ts"]);
	gulp.watch(["src/**/*.scss", "src/**/*.css"], ["sass"]);
	gulp.watch("wwwroot/**", ["copy-html"]);
});

gulp.task("build", ["sass", "app.ts", "copy-html"]);
