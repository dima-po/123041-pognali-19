"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var imagemin = require("gulp-imagemin");
var extReplace = require("gulp-ext-replace");
var webp = require("gulp-webp");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var pug = require("gulp-pug");
var htmlbeautify = require("gulp-html-beautify");
var svgstore = require("gulp-svgstore");
var del = require("del");
var uglify = require('gulp-uglify');
var csso = require("gulp-csso");
var rename = require("gulp-rename");

// var htmlmin = require("gulp-htmlmin");
// var posthtml = require("gulp-posthtml");
// var include = require("posthtml-include");

gulp.task("pug", () => {
  return gulp.src("source/pug/*.pug")
      .pipe(pug({
          // pretty: true
      }))
      .pipe(htmlbeautify())
      .pipe(gulp.dest("build/"))
      .pipe(server.stream());
});

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

// gulp.task("img:webp", function() {
//   const stream = gulp
//     .src("./source/img/*.{png, jpg}")
//     .pipe(
//       imagemin({
//         verbose: true,
//         plugins: webp({ quality: 65 })
//       })
//     )
//     .pipe(extReplace(".webp"))
//     .pipe(gulp.dest("./build/img"));
//   return stream;
// });

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 75}))
    .pipe(gulp.dest("source/img"))
})


gulp.task("sprite", function () {
  return gulp.src("source/img/**/*.svg")
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename("sprites.svg"))
    .pipe(gulp.dest("./build/img"))
})

gulp.task("js", function () {
  return gulp.src("source/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"))
})

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/*.ico"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"))
})

gulp.task("clean", function () {
  return del("build")
})

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/pug/**/*.pug", gulp.series("pug")).on("change", server.reload);
  gulp.watch("source/img/**/*.svg", gulp.series("sprite")).on("change", server.reload);
  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("build/*.html").on("change", server.reload);
});

gulp.task("build", gulp.series(
  "clean",
  "copy",
  "pug",
  "css",
  "js",
  "sprite"
))


gulp.task("start", gulp.series("build", "server"));
