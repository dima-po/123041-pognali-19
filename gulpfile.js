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
var cheerio = require("gulp-cheerio");

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
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});


gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 3})
    ]))
    .pipe(gulp.dest("build/img"))
})


gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 75}))
    .pipe(gulp.dest("build/img"))
})


gulp.task("sprite", function () {
  return gulp.src("source/img/**/*.svg")
    .pipe(svgstore({inlineSvg: true}))
    .pipe(cheerio({
      run: function ($) {
        $('fill').remove('fill');
        $('stroke').remove('stroke');
        $('style').remove('style');
        $('class').remove('class');
      },
      parserOptions: {xmlMode: true}
    }))
    .pipe(rename("sprites.svg"))
    .pipe(gulp.dest("./build/img"))
})

gulp.task("js", function () {
  return gulp.src("source/js/*.js")
    // .pipe(uglify())
    .pipe(gulp.dest("./build/js"))
})

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**/*",
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
  "images",
  "sprite"
))


gulp.task("start", gulp.series("build", "server"));
