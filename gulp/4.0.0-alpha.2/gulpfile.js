// var $source = "source/sass/*.sass";
// var $preprossAll = '_clean_html/css';
// @path *******************************************
const gulp          = require('gulp');
const browserSync   = require('browser-sync').create();
const sass          = require('gulp-sass');
const concat        = require('gulp-concat');
const debug         = require('gulp-debug');
const sourcemaps    = require('gulp-sourcemaps');
const autoprefixer  = require('gulp-autoprefixer');
const remember      = require('gulp-remember');
const cached        = require('gulp-cached');
const notify        = require("gulp-notify");




// @pripross *****************************************************************
gulp.task('sass', function(){

// return gulp.src('source/sass/main.sass', {since: gulp.lastRun('sass')})
//     .pipe(cached('sass'))
//     .pipe(autoprefixer())
//     .pipe(remember('sass'))
//     .pipe(debug({title: "sass"}))
//     .pipe(sass({outputStyle: 'expanded'})).on('error', notify.onError(function(err){
//       return  {
//                 title: 'sass' , message: err.message
//               };
//     }))
//     .pipe(gulp.dest('_clean_html/css'));
// });

return gulp.src('source/sass/main.sass', {since: gulp.lastRun('sass')})
    .pipe(cached('sass'))
    .pipe(autoprefixer())
    .pipe(remember('sass'))
    .pipe(debug({title: "sass"}))
    .pipe(sass({outputStyle: 'expanded'})).on('error', notify.onError())
    .pipe(gulp.dest('_clean_html/css')).resume();
});
// @watch ******************************************************************

// gulp.watch('source/**/*.*', gulp.series('sass'));

gulp.task('watch::sass', function(){
  gulp.watch('source/**/*.*', gulp.series('sass'));
});


// @serve ******************************************************************
gulp.task('serve', function() {

    browserSync.init({
        proxy: "http://188.243.241.229/_clean_html/"

    });
    // gulp.watch("_clean_html/css/sass/main.sass", ['sass::main']);
    // gulp.watch("_clean_html/css/skins/tomato.css", ['sass::tomato']);
    // gulp.watch("/var/www/html/_clean_html/*.php");
    browserSync.watch("/var/www/html/_clean_html/**/*.*").on('change', browserSync.reload);
});

gulp.task('go', gulp.parallel('watch::sass', 'serve'));
