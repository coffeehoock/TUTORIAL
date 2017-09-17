// @path *******************************************
// const pathproj = "clean";

// @plugins *******************************************
const gulp          = require('gulp');
const browserSync   = require('browser-sync').create();
const concat        = require('gulp-concat');
const debug         = require('gulp-debug');
const sourcemaps    = require('gulp-sourcemaps');
const autoprefixer  = require('gulp-autoprefixer');
const remember      = require('gulp-remember');
const cached        = require('gulp-cached');
const notify        = require("gulp-notify");

const sass          = require('gulp-sass');
const jade          = require('gulp-jade-php');
const coffee        = require('gulp-coffee');

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

return gulp.src("../source/sass/main.sass", {since: gulp.lastRun('sass')})
    .pipe(cached('sass'))
    .pipe(remember('sass'))
    .pipe(debug({title: "sass"}))
    .pipe(sass({outputStyle: 'expanded'})).on('error', notify.onError())
    .pipe(gulp.dest('../finall/css')).resume()
    // .pipe(browserSync.reload({stream:true}));
    // .pipe(browserSync.reload({stream:true}));
    // .pipe(autoprefixer())
    // .pipe(browserSync.stream());
});

gulp.task('jade', function(){


return gulp.src("../source/jade/index.jade", {since: gulp.lastRun('jade')})
    .pipe(cached('jade'))
    .pipe(remember('jade'))
    .pipe(debug({title: "jade"}))
    .pipe(jade({pretty: true})).on('error', notify.onError())
    .pipe(gulp.dest('../finall/')).resume()
});

gulp.task('coffee', function(){


return gulp.src("../source/coffee/main.coffee", {since: gulp.lastRun('coffee')})
    .pipe(cached('coffee'))
    .pipe(remember('coffee'))
    .pipe(debug({title: "coffee"}))
    // .pipe(coffee({bare: true})).on('error', notify.onError())
    .pipe(coffee(/*{bare: true}*/)).on('error', notify.onError())
    .pipe(gulp.dest('../finall/js')).resume()
});


// @watch ******************************************************************

// gulp.watch('source/**/*.*', gulp.series('sass'));

gulp.task('watch::sass', function(){
  // gulp.watch('source/**/*.*', gulp.series('sass'))
  gulp.watch("../source/sass/main.sass", gulp.series('sass'))
});


gulp.task('watch::jade', function(){
  // gulp.watch('source/**/*.*', gulp.series('sass'))
  gulp.watch("../source/jade/index.jade", gulp.series('jade'))
});


gulp.task('watch::coffee', function(){
  // gulp.watch('source/**/*.*', gulp.series('sass'))
  gulp.watch("../source/coffee/main.coffee", gulp.series('coffee'))
});



// @serve ******************************************************************
gulp.task('serve', function() {

    browserSync.init({
        proxy: "http://188.243.241.229/@Gulptest/finall"

    });

    // browserSync.watch("source/sass/main.sass").on('change', browserSync.stream);
    browserSync.watch("../finall/**/*.*").on('change', browserSync.reload);
    browserSync.watch("../finall/*.*").on('change', browserSync.reload);
    
    // browserSync.watch("*.*").on('change', browserSync.reload);
    // browserSync.watch("../main.css").on('change', browserSync.reload);
    // browserSync.watch("js/*.*").on('change', browserSync.reload);

});





gulp.task('go', gulp.parallel('watch::coffee', 'watch::jade', 'watch::sass', 'serve'));


