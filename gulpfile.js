'use strict'
var gulp = require('gulp'),
    pug = require('gulp-pug'),
    browserSync = require('browser-sync').create(),
    gp = require('gulp-load-plugins')();

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./view"
        }
    });
    
});

// gulp.task('fileinclude',function(){
//     return gulp.src('./src/*.html')
//     .pipe(fileinclude({
//       prefix: '@@',
//       basepath: '@file'
//     }))
//     .pipe(gulp.dest('./view')).pipe(browserSync.reload({
//         stream:true
//     }));
// })

gulp.task('scss',function(){
    
    return gulp.src('./src/scss/main.scss')
    .pipe(gp.sourcemaps.init())
    .pipe(gp.sass())
    .pipe(gp.autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
    }))
    .pipe(gp.csso())
    .pipe(gp.sourcemaps.write('./map/'))
    .pipe(gulp.dest('./view/css/')).pipe(browserSync.reload({
        stream:true
    }));

})

gulp.task('pug',function(){
    return gulp.src('./src/pug/pages/*.pug')
    .pipe(gp.pug({
        pretty: true
    }))
    .pipe(gulp.dest('./view/')).pipe(browserSync.reload({
        stream:true
    }))
})


gulp.task('watch',function(){
     gulp.watch(['./src/pug/**/*.pug'],gulp.series('pug'));
     gulp.watch(['./src/scss/**/*.scss'],gulp.series('scss'));

});
 
gulp.task('default',gulp.series(  
    gulp.parallel('pug','scss'),
    gulp.parallel('watch','server')
));
