var gulp = require('gulp'),
    tsc = require('gulp-tsc');

gulp.task('tsc', function () {
    gulp.src('src/ts/**/*.ts')
        .pipe(tsc({ module: 'amd', 'target': 'ES5' }))
        .pipe(gulp.dest('build/js/'))
});

gulp.task('compile', ['tsc']);