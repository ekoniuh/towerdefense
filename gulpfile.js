const gulp = require('gulp');


gulp.task('copy-libs', () => {
    return gulp.src('./scripts/lib/**/*.*')
        .pipe(gulp.dest('./dist/lib'));
});

gulp.task('copy-index', () => {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy-styles', () => {
    return gulp.src('./style.css')
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy-fonts', () => {
    return gulp.src('./fonts/**/*.*')
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('copy-sounds', () => {
    return gulp.src('./sounds/**/*.*')
        .pipe(gulp.dest('./dist/sounds'));
});

gulp.task('build-app', gulp.series([
    'copy-libs',
    'copy-index',
    'copy-styles',
    'copy-fonts',
    'copy-sounds'
]));
