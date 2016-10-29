var gulp = require('gulp'),
    pug = require('gulp-pug'),
    less = require('gulp-less');

gulp.task('less', function () {
  return gulp.src('app/less/*.less')
    .pipe( less() )
    .pipe( gulp.dest('dist/css') );
});

gulp.task('default', function() {
    gulp.run('less');
});
