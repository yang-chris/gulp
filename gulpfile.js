/**
 * Created by chris on 2016/12/19.
 */
var gulp=require('gulp');
var less=require('gulp-less');
var livereload=require('gulp-livereload');

gulp.task('less',function(){
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(livereload());
});
//gulp.task('default',['testLess','elseTask']);

gulp.task('watch',function(){
    livereload.listen();
    gulp.watch('src/less/*.less',['less']);
})
