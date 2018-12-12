$(function () {
    $('.phone_box_left .marquee .a1').click(function () {
        $('.phone_box_left .pink_phone').animate({'opacity':1,'z-index':3})
        $('.phone_box_left .blue_phone').animate({'opacity':0,'z-index':1})
        $('.phone_box_left .marquee h3').html('X23 幻彩版 6GB+128GB-北极晨曦');
    })
    $('.phone_box_left .marquee .a2').click(function () {
        $('.phone_box_left .pink_phone').animate({'opacity':0,'z-index':1})
        $('.phone_box_left .blue_phone').animate({'opacity':1,'z-index':3})
        $('.phone_box_left .marquee h3').html('X23 幻彩版 6GB+128GB-星夜海洋')
    })
    $('.phone_box_mid .marquee .a1').click(function () {
        $('.phone_box_mid .pink_phone').animate({'opacity':1,'z-index':3})
        $('.phone_box_mid .blue_phone').animate({'opacity':0,'z-index':1})
        $('.phone_box_mid .marquee h3').html('NEX双屏版 10GB+128GB-冰原蓝');
    })
    $('.phone_box_mid .marquee .a2').click(function () {
        $('.phone_box_mid .pink_phone').animate({'opacity':0,'z-index':1})
        $('.phone_box_mid .blue_phone').animate({'opacity':1,'z-index':3})
        $('.phone_box_mid .marquee h3').html('NEX双屏版 10GB+128GB-星漾紫')
    })
    $('.phone_box_right .marquee .a1').click(function () {
        $('.phone_box_right .pink_phone').animate({'opacity':1,'z-index':3})
        $('.phone_box_right .blue_phone').animate({'opacity':0,'z-index':1})
        $('.phone_box_right .marquee h3').html('Z3 全面屏 6GB+64GB-极光蓝');
    })
    $('.phone_box_right .marquee .a2').click(function () {
        $('.phone_box_right .pink_phone').animate({'opacity':0,'z-index':1})
        $('.phone_box_right .blue_phone').animate({'opacity':1,'z-index':3})
        $('.phone_box_right .marquee h3').html('Z3 全面屏 6GB+64GB-星夜红')
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
                  alert('数据获取成功(热卖专区，精品配件部分)')
                  _this.inisertData(res);
              },
              error(){
                  alert('数据获取失败')
              }
          })
      },
      inisertData(data){
            var acces = data.accessories;
            data = data.phone;
            $('.phone_box_left .phone a').css({'backgroundImage':'url('+data[0].img+')'})
            $('.phone_box_left .phone_hidden a').css({'backgroundImage':'url('+data[1].img+')'})
            $('.phone_box_mid .phone a').css({'backgroundImage':'url('+data[2].img+')'})
            $('.phone_box_mid .phone_hidden a').css({'backgroundImage':'url('+data[3].img+')'})
            $('.phone_box_right .phone a').css({'backgroundImage':'url('+data[4].img+')'})
            $('.phone_box_right .phone_hidden a').css({'backgroundImage':'url('+data[5].img+')'})
            for (var i = 0 ; i<acces.length ; i++){
                $('.content_accessories ul li .accessories a').eq(i).css({'backgroundImage':'url('+acces[i].img+')'})
                $('.content_accessories ul li .annotation h3').eq(i).html(acces[i].name)
                $('.content_accessories ul li .price').eq(i).html(acces[i].price)
            }
      }
  }
}())
storePhone.init();