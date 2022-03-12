const gulp = require("gulp");
const { src, dest, watch, parallel, series } = require("gulp")

const imagemin = require('gulp-imagemin');

function imgMinify() {
    return gulp.src('project/pics/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}

exports.img = imgMinify


const htmlmin = require('gulp-htmlmin');
function minifyHTML() {
    return src('project/*.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('dist'))
}

exports.html = minifyHTML



const concat = require('gulp-concat');
const terser = require('gulp-terser');

function jsMinify() {
    return src('project/js/**/*.js') 
    
        .pipe(concat('all.min.js'))

        .pipe(terser())

        .pipe(dest('dist/assets/js'))
}
exports.js = jsMinify


var cleanCss = require('gulp-clean-css');
function cssMinify() {
    return src("project/css/**/*.css")
       
        .pipe(concat('style.min.css'))
        .pipe(cleanCss())
        .pipe(dest('dist/assets/css'))
}
exports.css = cssMinify


var browserSync = require('browser-sync');
function serve (cb){
  browserSync({
    server: {
      baseDir: 'dist/'
    }
  });
  cb()
}

function reloadTask(done) {
  browserSync.reload()
  done()
}

function watchTask() {
    watch('project/*.html',series(minifyHTML, reloadTask))
    watch('project/js/**/*.js',series(jsMinify, reloadTask))
    watch(["project/css/**/*.css","project/sass/**/*.scss"], series(reloadTask));
}
exports.default = series( parallel(imgMinify, jsMinify, minifyHTML), serve,watchTask)
