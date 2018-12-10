var changeImages = (function(){
    return {
        init(){
            this.$ul = $('.smallImages');
            this.$bigliAll = $('.bigImages_box').children();
            this.event()
        },
        event(){
            var _this = this;
            // 展示图片区域切换图片
            this.$ul.on('mouseenter','li',function(){
                var index = $(this).index();
                _this.$bigliAll.eq(index).addClass('show_phone').siblings().removeClass('show_phone');
            })
            //切换选择手机颜色框样式改变
            $('.color').on('click','p',function(){
                $(this).css({'color':'#000','border-color':'#000'}).siblings().css({'color':'#777','border-color':'#ddd'})
            })
            //下面信息栏切换功能
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
            //手机服务点击事件。有BUG
            $('.phoneSe').on('click','p',function(){
                $(this).toggleClass('p_bg').siblings().removeClass('p_bg');
                $(this).find('span').toggleClass('i_bg').parent().siblings().find('span').removeClass('i_bg');
                // $(this).parent().find('div').find('i').css('background','url(../img/particulars/icon2.png) no-repeat 10px 205px')
            })
            // 镭射服务事件
            $('.laserSer').click(function(){
                $(this).find('p').toggleClass('serP_bg');
                $(this).find('span').toggleClass('span_bg');
            })
            //手机展示区域固定定位与绝对定位的切换
            $(window).scroll(function(){
                console.log($(this).scrollTop());
                if($(this).scrollTop()  >= 1140){
                    $('.show_box').css({'position':'absolute','top':'1140px','left':0})
                }
            })
        }
    }
}())
changeImages.init();