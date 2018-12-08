
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


gulp.task('default', function(callback) {
    // 将你的默认的任务代码放在这
    run(['minijs','miniimg','minicss'],
        'minihtml',
        'watch',
        'connect',
        callback);
})
gulp.task('minihtml', function() {
    console.log('我要开始压缩html')
})
gulp.task('minicss', function() {
    console.log('我要开始压缩css')
    gulp.src('app/static/css/*')
        .pipe(gulp.dest('dist/static/css'))
        .pipr(connect.reload())
})
gulp.task('miniimg', function() {
    console.log('我要开始压缩miniimage')
    gulp.src('app/static/img/*')
        .pipe(gulp.dest('dist/static/img'))
        .pipr(connect.reload())
})

gulp.task('minijs', function() {
    console.log('我要开始压缩js')
    gulp.src('app/static/js/*')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        // .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rev())
        // .pipe(rename({
        //     // 添加后缀
        //     suffix: '.min'
        // }))
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/js'))
    // .pipe(connect.reload());
    // 可以再次合并文件, 给文件重命名
    // .pipe(concat('all.min.js'))
    // .pipe(gulp.dest('dist'))
})
gulp.task('clean',function () {
    del(['dist'])
})
gulp.task('mini',['minihtml','minicss','miniimage'],function(){
    console.log('压缩成功')
})
