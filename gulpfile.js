var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    server = require('gulp-server-livereload');

gulp.task('scripts', function(){
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js/'));
});

gulp.task('styles', function(){
  gulp.src('css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('minCSS'));
});

gulp.task('watch', function(){
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('css/*.css', ['styles']);
})

gulp.task('webserver', function(){
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('default', ['scripts', 'styles']);
