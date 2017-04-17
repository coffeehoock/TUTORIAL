// @task *******************************************

gulp.task('hello', function(callback){
  console.log('hello sadhu');
  callback();
});
// копирование файлов

gulp.task('create:folder', function(){
  return  gulp.src('source/**/*.*')
          .on('data', function(file){console.log(file)})
          .pipe(gulp.dest('_clean_html'));
});
// распределение
gulp.task('create:distribution', function(){
  return  gulp.src('{source,source2}/**/*.{js,css}')
          .on('data', function(file){console.log(file)})
          .pipe(gulp.dest(function(file){
            return  file.extname == ".js" ? 'js'   :
                    file.extname == ".css" ? "css" : '_clean_html'
          }));
});
gulp.task('create:turns', function(){
  return  gulp.src(['source/**/*.js', 'source/**/*.css' ])
          .on('data', function(file){console.log(file)})
          .pipe(gulp.dest(function(file){
            return  file.extname == ".js" ? 'js'   :
                    file.extname == ".css" ? "css" : '_clean_html'
          }));
});
// все кроме node_modules
gulp.task('create:nodemodules', function(){
  return  gulp.src(['**/*.*', '!node_modules/**' ])
          .on('data', function(file){console.log(file)})
          .pipe(gulp.dest(function(file){
            return  file.extname == ".js" ? 'js'   :
                    file.extname == ".css" ? "css" : '_clean_html'
          }));
});

//**************************************************************

gulp.watch('source/**/*.*', gulp.series('sass', function() {
  console.log('Компиляция файлов стилей завершена');
}));
