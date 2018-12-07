var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  console.log(1 + 2);
});
gulp.task('minihtml',function(){
    console.log('压缩html');
});
gulp.task('minicss',function(){
    console.log('压缩cssl');
});
gulp.task('miniimages',function(){
    console.log('压缩images');
});
gulp.task('mini',['minihtml','minicss','miniimages'],function(){
    console.log('压缩ok');
})


var gulp= require('gulp');