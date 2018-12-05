var nex = function () {
    return function () {
        var verTimeout = setTimeout(function () {
            $('.ver_nex').animate({'top':0,'opacity':1})
        },1200);
        var aiTimeout = setTimeout(function () {
            $('.ai_nex').animate({'top':50,'opacity':1})
        },1000);
        var cpuTimeout = setTimeout(function () {
            $('.cpu_nex').animate({'top':100,'opacity':1})
        },800);
        var left_phone = setTimeout(function () {
            $('.phone_left').animate({'top':0,'opacity':1},'slow')
        },300);
        var right_phone = setTimeout(function () {
            $('.phone_right').animate({'bottom':0,'opacity':1},'slow')
        },300)
    }
}
nex()();
$(function () {
    var which = 0;
    $('.btn_list li').click(function () {
        which = $(this).index();
        showImage(which);
        clearInterval(start);
    });
    function showImage() {
        $('.banner .btn_list li').removeClass('choose');
        $('.img_list').animate({'opacity':0,'z-index':1});
        $('.banner .btn_list li').eq(which).addClass('choose');
        $('.img_list').eq(which).animate({'opacity':1,'z-index':9});
        if (which == 0){
            nex()();
        }else if (which == 1){

        }

    }
    function autoPlay() {
        which += 1;
        if (which>3){
            which = 0;
        }else if (which<0){
            which = 3;
        }
        showImage(which);
    }
    var start = setInterval(function () {
        autoPlay();
    },5000)
}())
