/* eslint-disable no-console */

// Compilation process:
// 1. build svelte components and copy them to "./build" (the build is done with typescript compilation)
// 2. compile app-ts and move it to "../wwwroot/js/app.js"
// 3. compile all ["scr/**/*.scss", "src/**/*.css"] files and move them to "../wwwroot/css/main.css"
// 4. move all files from "./wwwroot" to "../wwwroot".

const gulp = require("gulp"),
	gulpSvelte = require("gulp-svelte"),
	svelte = require("svelte"),
	rollup = require("rollup"),
	tsc = require("typescript"),
	fs = require("fs"),
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
		// .on("data", d => console.log(d))
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
	const s1 = buildSvelteComponents([
		"src/**/*.html"
		// "!src2/core/ui/inputs/*"
		// "!src2/core/ui/outputs/*"
	], `${svelteComponentsDir}`);
	return merge2([copySharedJs, copyOutputs], s1);

	// const s1 = buildSvelteComponents(["src2/core/ui/help/*.html"], `${svelteComponentsDir}/core/ui/help`);
	// const s2 = buildSvelteComponents(["src2/core/ui/*.html"], `${svelteComponentsDir}/core/ui`);
	// const s3 = buildSvelteComponents("src2/components/**/*.html", `${svelteComponentsDir}/components`);
	// const s4 = buildSvelteComponents("src2/core/ui/outputs/**/*.html", `${svelteComponentsDir}/core/ui/outputs`);
	// const s5 = buildSvelteComponents("src2/core/ui/inputs/**/*.html", `${svelteComponentsDir}/core/ui/inputs`);
	// return merge2([copySharedJs, copyOutputs], [s1, s2, s3, s4, s5]);
});

gulp.task("test", () => {
	const input = fs.readFileSync("src/core/ui/Form.html", "utf-8");

	const { js, css, ast } = svelte.compile(input, {
		// the target module format – defaults to 'es' (ES2015 modules), can
		// also be 'amd', 'cjs', 'umd', 'iife' or 'eval'
		format: "es",

		// the filename of the source file, used in e.g. generating sourcemaps
		filename: "Form.html",

		// the name of the constructor. Required for 'iife' and 'umd' output,
		// but otherwise mostly useful for debugging. Defaults to 'SvelteComponent'
		name: "Form",

		// for 'amd' and 'umd' output, you can optionally specify an AMD module ID
		// amd: {
		// 	id: "my-component"
		// },
		shared: true,
		dev: true,

		// custom error/warning handlers. By default, errors will throw, and
		// warnings will be printed to the console. Where applicable, the
		// error/warning object will have `pos`, `loc` and `frame` properties
		onerror: err => {
			console.error(err.message);
		},

		onwarn: warning => {
			console.warn(warning.message);
		}
	});

	console.log(js);
	console.log(css);
	console.log(ast);
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
