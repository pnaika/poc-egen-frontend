var gulp = require('gulp');
// var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// gulp.task('styles', function(){
//    gulp.src('./resources/scss/main.scss')
//        .pipe(sass())
//        .pipe(gulp.dest('./resources/styles/app.css'))
//        .pipe(browserSync.reload({
//            stream: true
//        }));
// });

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: "./src/index.html"
        }
    });

    // gulp.watch('./**/**/*.scss',['styles']);
    gulp.watch('./**/**/*.html').on('change',browserSync.reload);
    gulp.watch('./**/**/*.js').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);