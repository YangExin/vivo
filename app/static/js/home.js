var nex_active = function () {
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
nex_active()();
var nex_reset = function(){
    return function () {
        $('.ver_nex').css({'top':-10,'opacity':0});
        $('.ai_nex').css({'top':40,'opacity':0});
        $('.cpu_nex').css({'top':90,'opacity':0});
        $('.phone_left').css({'top':-80,'opacity':0});
        $('.phone_right').css({'bottom':-80,'opacity':0});
    }
}
var z3_active = function () {
    return function () {
        var verTimeout = setTimeout(function () {
            $('.z3').animate({'top':0,'opacity':1})
        },1200);
        var aiTimeout = setTimeout(function () {
            $('.performance').animate({'top':50,'opacity':1})
        },1000);
        var cpuTimeout = setTimeout(function () {
            $('.cpu_z3').animate({'top':100,'opacity':1})
        },800);
    }
}
var z3_reset = function(){
    return function () {
        $('.z3').css({'top':-10,'opacity':0});
        $('.performance').css({'top':40,'opacity':0});
        $('.cpu_z3').css({'top':90,'opacity':0});
    }
}

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
            nex_active()();
            z3_reset()();
        }else if (which == 1){
            z3_active()();
            nex_reset()();
        }else if (which == 2){
            nex_reset()();
            z3_reset()();
        }else if (which == 3){
            nex_reset()();
            z3_reset()();
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
