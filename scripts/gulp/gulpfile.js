#!/usr/bin/env node

var lint  = require('gulp-scss-lint');
var gulp  = require('gulp');

gulp.task('lint', function() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(lint({
        verbose: true
    }))
    .pipe(lint.failReporter());
});

gulp.task('lint2', function() {
  return gulp.src(__dirname + '/../../src/scss/**/*.scss')
    .pipe(lint({
        verbose: true
    }))
    .pipe(lint.failReporter());
});

gulp.start('lint');


// gulp --gulpfile scripts/gulp/gulpfile.js lint2
// node scripts/gulp/gulpfile.js
// echo $?
