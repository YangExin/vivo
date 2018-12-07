gulp.task('miniimages',function(){
    console.log('压缩images');
});
gulp.task('mini',['minihtml','minicss','miniimages'],function(){
    console.log('压缩ok');
})