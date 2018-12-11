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