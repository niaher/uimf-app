var gulp = require("gulp"),
    rollup = require("rollup"),
    typescript = require("rollup-plugin-typescript2"),
    commonjs = require("rollup-plugin-commonjs"),
    browserSync = require("browser-sync").create(),
    gulpSvelte = require("gulp-svelte"),
    resolve = require("rollup-plugin-node-resolve"),
    builtins = require("rollup-plugin-node-builtins"),
    globals = require("rollup-plugin-node-globals"),
    json = require("rollup-plugin-json"),
    sass = require("gulp-sass"),
    concat = require("gulp-concat");

const distDir = "../wwwroot";

process.on('unhandledRejection', r => console.log(r));

function build(entry, tsconfig, outfile, moduleName) {
    return rollup.rollup(
        {
            entry: entry,
            plugins: [
                //json(),
                resolve({
                    jsnext: true,
                    main: true,
                    browser: true
                }),
                commonjs(),
                typescript({
                    tsconfig: tsconfig
                }),
                globals(),
                builtins()
            ]
        })
        .then(function (bundle) {
            bundle.write({
                format: "iife",
                dest: outfile,
                sourceMap: true,
                moduleName: moduleName
            });
        });
}

gulp.task("build-app", ["build-svelte"], function () {
    build("src/app.ts", "src/tsconfig.json", distDir + "/js/app.js");
});

gulp.task("browser-sync", function () {
    browserSync.init({
        server: {
            baseDir: distDir
        }
    });
});

gulp.task("build-svelte", function () {
    const svelteComponentsDir = "build/svelte";
    gulp.src("node_modules/svelte/shared.js")
        .pipe(gulp.dest(svelteComponentsDir));

    // Copy typescript files associated with output fields.
    gulp.src("src/core/ui/outputs/*.ts")
        .pipe(gulp.dest(svelteComponentsDir + "/core/ui/outputs"));

    return gulp.src("src/**/*.html")
        .pipe(gulpSvelte({
            format: "es",
            generate: "dom",
            shared: true
        }))
        .pipe(gulp.dest(svelteComponentsDir));
});

gulp.task("copy-html", function () {
    return gulp.src("wwwroot/**")
        .pipe(gulp.dest(distDir));
});

gulp.task("sass", function () {
    return gulp.src(["src/**/*.scss", "src/**/*.css"])
        .pipe(sass().on("error", sass.logError))
        .pipe(concat("main.css"))
        .pipe(gulp.dest(distDir + "/css/"));
});

gulp.task("watch", ["build-svelte", "build-app", "sass", "copy-html"], function () {
    gulp.watch("src/**/*.ts", ["build-app"]);
    gulp.watch("src/**/*.html", ["build-svelte", "build-app"]);
    gulp.watch("src/**/*.scss", ["sass"]);
    gulp.watch("wwwroot/**", ["copy-html"]);
});
