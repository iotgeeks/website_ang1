var gulp = require('gulp'); 
var browserSync = require('browser-sync').create() 

gulp.task('browser-sync', function() {
  browserSync.init({
    server: { 
    	baseDir:"./"
    },
    	port: 8085
  });
  gulp.watch("./**/*.*").on('change', browserSync.reload);
});

 