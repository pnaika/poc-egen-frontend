var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: "./src",
            index: "index.html",
            routes: {
                "/bower_components": "./bower_components",
                "/node_modules": "./node_modules"
            }

        }
    });

    gulp.watch('./**/**/*.html').on('change',browserSync.reload);
    gulp.watch('./**/**/*.js').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);