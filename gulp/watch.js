'use strict';

var gulp = require('gulp'),
	livereload = require('gulp-livereload')

gulp.task('watch', ['styles'] ,function () {
  gulp.watch('src/{app,components}/**/*.less', ['styles']).on('change', livereload.changed);
  gulp.watch('src/{app,components}/**/*.js', ['scripts']).on('change', livereload.changed);
  gulp.watch('src/assets/images/**/*', ['images']).on('change', livereload.changed);
  gulp.watch('bower.json', ['wiredep']).on('change', livereload.changed);
});
