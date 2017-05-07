// @path *******************************************
const pathproj = "clean";

// @plugins *******************************************
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
    .pipe(gulp.dest(pathproj+'/css')).resume()
    // .pipe(browserSync.reload({stream:true}));
    // .pipe(browserSync.stream());
});


// @watch ******************************************************************

// gulp.watch('source/**/*.*', gulp.series('sass'));

gulp.task('watch::sass', function(){
  gulp.watch('source/**/*.*', gulp.series('sass'))
});


// @serve ******************************************************************
gulp.task('serve', function() {

    browserSync.init({
        proxy: "http://188.243.241.229/alpha/clean/"

    });

    browserSync.watch(pathproj+"/css/*.*").on('change', browserSync.reload);
    browserSync.watch(pathproj+"/*.*").on('change', browserSync.reload);

});





gulp.task('go', gulp.parallel('watch::sass', 'serve'));



