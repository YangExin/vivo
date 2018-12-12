$(function () {
    $('.marquee .a1').click(function () {
        $('.pink_phone').animate({'opacity':1,'z-index':3})
        $('.blue_phone').animate({'opacity':0,'z-index':1})
        $('.marquee h3').html('X23 幻彩版 6GB+128GB-北极晨曦');
    })
    $('.marquee .a2').click(function () {
        $('.pink_phone').animate({'opacity':0,'z-index':1})
        $('.blue_phone').animate({'opacity':1,'z-index':3})
        $('.marquee h3').html('X23 幻彩版 6GB+128GB-星夜海洋')
    })
})

//只能用阿帕奇
$( storePhone = function () {
  return{
      init(){
        this.getDate();
      },
      event(){

      },
      getDate(){
          var _this = this;
          $.ajax("http://localhost:6623/vivo/vivo/server/json/phone.json",{
              type:'post',
              contentType:'json',
              success(res){
                  alert('数据获取成功')
                  _this.inisertData(res);
              },
              error(){
                  alert('数据获取失败')
              }
          })
      },
      inisertData(data){
            data = data.data;
            var arry = [];
            for ( var attr in data[0]){
                console.log(data[0][attr]);
                arry.push(data[0][attr]);
            }
            // $('.content_selling .phone a').append(arry[0]);
            console.log(arry[0]);
          $('.content_selling .phone a').css({'backgroundImage':'url('+arry[0]+')'})

      }
  }
}())
storePhone.init();