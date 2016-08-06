var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function () {
    nodemon({
        script: 'app.js',
        ext: 'js',
        ignore: ['./node_modules/**', './**/libs/**', './bin/**']
    });
});

gulp.task('default', ['nodemon']);