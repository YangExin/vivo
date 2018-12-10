var gulp = require('gulp');
var uglify = require('gulp-uglify');//压缩js
var concat = require('gulp-concat');//合并
var rename = require('gulp-rename');//重命名
var babel = require('gulp-babel');//兼容ES6
var connect = require('gulp-connect');//链接服务器
var csso = require('gulp-csso');//压缩CSS
var imagemin = require('gulp-imagemin');//压缩图片
var htmlminify = require('gulp-html-minify');//压缩HTML文件
var connet = require('gulp-connect');//服务器
var rev = require('gulp-rev');//Hash哈希码
var del = require('del');//删除
var runSequence = require('run-sequence');//控制同步，异步


//所有文件实时更新
gulp.task('default', function(callback) {
    run(['minijs','miniimg','minicss'],
        'minihtml',
        'watch',
        'connect',
        callback);
})



//压缩js
gulp.task('minijs',function(){
    gulp.src('app/static/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/static/js'))
        .pipe(connect.reload())
})
//压缩css
gulp.task('minicss',function(){
    gulp.src('app/static/css/*.css')
        .pipe(minicss())
        .pipe(gulp.dest('dist/static/css'))
        .pipe(connect.reload())
})
//压缩HTML
gulp.task('minihtml',function(){
    gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload())//实时刷新
})
//图片压缩
gulp.task('miniimg',function(){
    gulp.src('app/static/img/*.*')
        .pipe(gulp.dest('dist/static/img'))
        .pipe(connect.reload())
})
//监听实时更新
gulp.task('watch',function(){
    gulp.watch('app/static/js/index.js',['minijs'])
    gulp.watch('app/static/css/index.css',['minicss'])
    gulp.watch('app/static/images/bg71.png',['miniimg'])
    gulp.watch('app/index.html',['minihtml'])
})
//打开服务器
gulp.task('connect',function(){
    connect.server({
        root: 'dist',//服务器默认文件夹
        port: '6666',//端口号
        livereload: true
    })
})
//删除文件
gulp.task('clean', function () {
    del(['dist'])
});
