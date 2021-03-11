const gulp = require("gulp")
const sass = require("gulp-sass")
const esbuild = require("gulp-esbuild")
const exec = require("child_process").exec

function bundle() {
  return gulp
    .src("./src/index.ts")
    .pipe(
      esbuild({
        outfile: "bundle.js",
        sourcemap: "inline",
        bundle: true,
        target: ["chrome58", "firefox57", "safari11", "edge16"],
        globalName: "app",
        loader: {
          ".ts": "ts",
          ".json": "json",
        },
      })
    )
    .pipe(gulp.dest("./dist/"))
}

function styles() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./dist/styles"))
}

function watch() {
  exec("reload -b --dir=dist --port=5000", (err, stdout) => {
    if (err) throw err
  })
  gulp.watch("sass/**/*.scss", styles)
  return gulp.watch("src/**/*.ts", bundle)
}

const build = gulp.series(bundle, styles)

exports.bundle = bundle
exports.styles = styles
exports.build = build
exports.watch = gulp.series(build, watch)
