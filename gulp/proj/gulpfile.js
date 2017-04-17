const gulp = require('gulp');

var browserSync = require('browser-sync').create();


// jade*******************************************

// var jade = require('gulp-jade');


// gulp.task('jade', function() {

//     return gulp.src('source/jade/index.jade')
//         .pipe(jade())
//         .pipe(gulp.dest('/var/www/html/gulp.task.project/'));
// });

// jade-php*******************************************

var phpJade = require('gulp-jade-for-php');

gulp.task('jade-php', function() {
  gulp.src('source/jade/index.jade')
    .pipe(phpJade())
    .pipe(gulp.dest('/var/www/html/gulp.task.project'));
});



// scss*******************************************

var sass = require('gulp-sass');

gulp.task('sass', function () {

  return gulp.src('source/sass/main.sass')
    .pipe(sass({outputStyle: 'compact', preferredsyntax:'sass'}).on('error', sass.logError))
    .pipe(gulp.dest('/var/www/html/gulp.task.project'));
});

// watch***********************************************
// default*********************************************


gulp.task('sass:watch', function () {
  gulp.watch('source/sass/main.sass', ['sass']);
});

// gulp.task('jade:watch', function () {
//   gulp.watch('source/jade/index.jade', ['jade']);
// });
//
gulp.task('jade:watch', function () {
  gulp.watch('source/jade/index.jade', ['jade-php']);
});

// gulp.task('default', ['sass:watch',  'jade:watch'])
// gulp.task('default', ['sass:watch'])

// scss*******************************************


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        proxy: "http://188.243.241.229/gulp.task.project/"
    });

    gulp.watch("source/sass/main.sass", ['sass']);
    gulp.watch("/var/www/html/gulp.task.project/*.*").on('change', browserSync.reload);
    // gulp.watch("/var/www/html/gulp.task.project/index.php").on('change', browserSync.reload);
    // gulp.watch("/var/www/html/gulp.task.project/main.css").on('change', browserSync.reload);
});
