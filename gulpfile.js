var gulp = require ('gulp');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-cssmin');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var ttf2woff = require('gulp-ttf2woff');
var ttf2woff2 = require('gulp-ttf2woff2');


gulp.task('browserS', function browserS() {
    browserSync.init({
        server: {
            baseDir: "dist"
        },
        port: 3000
    })
    gulp.watch('dist/**/*').on('change', browserSync.reload);
});

gulp.task('html',function html() {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('css', function css() {
    return gulp.src('./src/scss/style.scss')
        .pipe(plumber({
            errorHandler: function (error) {
            console.log(error.message);
            this.emit('end');
        }}))
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        }))
        
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('copy:css', function() {
    return gulp.src('./src/css/style.min.css')
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('js', function js() {
    return gulp.src('./src/js/**/*.js')
        .pipe(plumber({
        errorHandler: function (error) {
            console.log(error.message);
            this.emit('end');
        }}))
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('copy:media', function img() {
    return gulp.src('./src/media/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('./dist/media'));
});

gulp.task('ttf2woff', function(){
    return gulp.src('./src/fonts/*.ttf')
      .pipe(ttf2woff())
      .pipe(gulp.dest('./src/fonts/'));
});

gulp.task('ttf2woff2', function(){
    return gulp.src('./src/fonts/*.ttf')
      .pipe(ttf2woff2())
      .pipe(gulp.dest('./src/fonts/'));
});

gulp.task('copy:fonts', function fonts() {
    return gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('copy', gulp.parallel('ttf2woff', 'ttf2woff2', 'copy:media', 'copy:fonts'));

gulp.task('clean', function clean() {
    return del('./dist/');
});

gulp.task('watch',function watchFiles() {
    gulp.watch('./src/**/*.html', gulp.series ('html'));
    gulp.watch('./src/scss/**/*.scss', gulp.series('css'));
    gulp.watch('./src/css/**/*.css', gulp.series('copy:css'));
    gulp.watch('./src/js/**/*.js', gulp.series('js'));
});



gulp.task('default', gulp.series(
    'clean', 
    gulp.parallel('html', 'copy:css','js', 'copy'),
    gulp.parallel('watch', 'browserS')
));