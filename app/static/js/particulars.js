var changeImages = (function(){
    return {
        init(){
            this.$ul = $('.smallImages');
            this.$bigliAll = $('.bigImages_box').children();
            this.event()
        },
        event(){
            var _this = this;
            this.$ul.on('mouseenter','li',function(){
                var index = $(this).index();
                _this.$bigliAll.eq(index).addClass('show_phone').siblings().removeClass('show_phone');
            })
            $('.color').on('click','p',function(){
                $(this).css({'color':'#000','border-color':'#000'}).siblings().css({'color':'#777','border-color':'#ddd'})
            })
            $('.message_li').on('click','li',function(){
                if($(this).index() == 0){
                    $('#vivo_market').css('display','block');
                    $('.tablist,.comment,.sales').css('display','none')
                } else if($(this).index() == 1){
                    $('.tablist').css('display','block');
                    $('#vivo_market,.comment,.sales').css('display','none')
                } else if($(this).index() == 2){
                    $('.comment').css('display','block');
                    $('#vivo_market,.tablist,.sales').css('display','none')
                } else if($(this).index() == 3){
                    $('.sales').css('display','block');
                    $('#vivo_market,.comment,.tablist').css('display','none')
                }
            })
            $('.phoneSe').on('click','p',function(){
                $(this).toggleClass('p_bg').siblings().removeClass('p_bg');
                $(this).find('span').toggleClass('i_bg').siblings().removeClass('i_bg');
                // $(this).parent().find('div').find('i').css('background','url(../img/particulars/icon2.png) no-repeat 10px 205px')
            })
        }
    }
}())
changeImages.init();