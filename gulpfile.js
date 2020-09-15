const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const webpack = require("webpack-stream");
const image = require('gulp-image');




gulp.task('styles', function () {
  return gulp.src("./src/sass/**/*.+(scss|sass)")
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ suffix: '.min', prefix: '' }))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
});



gulp.task('html', function () {
  return gulp.src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist/"))
    .pipe(browserSync.stream());
});

gulp.task("build-js", () => {
  return gulp.src("./src/js/main.js")
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'script.js'
      },
      watch: false,
      devtool: "source-map",
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [['@babel/preset-env', {
                  debug: true,
                  corejs: 3,
                  useBuiltIns: "usage"
                }]]
              }
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest("dist/"))
    .on("end", browserSync.reload);
});



gulp.task('fonts', function () {
  return gulp.src("./src/fonts/**/*")
    .pipe(gulp.dest("./dist/fonts"));
});

gulp.task('icons', function () {
  return gulp.src("./src/icons/**/*")
    .pipe(gulp.dest("./dist/icons"));
});

gulp.task('slick', function () {
  return gulp.src("./src/slick/**/*")
    .pipe(gulp.dest("./dist/slick"));
});


gulp.task('images', function () {
  return gulp.src("./src/images/**/*")
    .pipe(imagemin(
      [
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 100 }),
      ], {
      verbose: true
    }
    ))
    .pipe(image({
      optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
      pngquant: ['--speed=1', '--force', 256],
      zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
      jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80],
      mozjpeg: ['-optimize', '-progressive'],
      gifsicle: ['--optimize'],
      svgo: ['--enable', 'cleanupIDs', '--disable', 'convertColors']// defaults to false
    }))
    .pipe(gulp.dest("./dist/images"));
});



gulp.task("watch", () => {
  browserSync.init({
    server: {
      baseDir: "./dist/",
      serveStaticOptions: {
        extensions: ["html"]
      }
    },
    port: 4000,
    notify: true
  });
  gulp.task("build-prod-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'production',
                    output: {
                        filename: 'script.js'
                    },
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest('dist/'));
});


  gulp.watch("./src/*.html", gulp.parallel("html"));
  gulp.watch("./src/sass/**/*.+(scss|sass)", gulp.parallel("styles"));
  gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
  gulp.watch("./src/img/**/*", gulp.parallel('images'));
});

gulp.task("build", gulp.parallel("html", "styles", "build-js", "images"));







gulp.task('default', gulp.parallel("watch", "build"));
