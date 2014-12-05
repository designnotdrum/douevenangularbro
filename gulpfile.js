'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');

module.exports = gulp;

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});
