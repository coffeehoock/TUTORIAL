// @pripross *****************************************************************
gulp.task('sass:info', function(){
  return gulp.src('source/sass/main.sass')
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(concat('main.css'))
      .pipe(debug({title: 'concat'})) // @debug
      .pipe(gulp.dest('_clean_html/css'));
});
gulp.task('sass', function(){
  return gulp.src('source/sass/main.sass')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('_clean_html/css'));
});
