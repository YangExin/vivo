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
            $(window).scroll(function(e){
                // console.log($(this).scrollTop());
                var a = $('.show_box').offset().left;
                if($(this).scrollTop()  >= 1140){

                    $('.show_box').css({'position':'absolute','top':'1210px','left':0})
                } else if ($(this).scrollTop()  <= 1140){
                    $('.show_box').css({'position':'fixed','top':80,'left':75})

                }            
            })

            //改变分期付款样式
            $('.pay_money').on('click','li',function(){
                $(this).toggleClass('pay_money_bg').siblings().removeClass('pay_money_bg');
                $('.times_bug').css('display','block');
                $('.select_btn').css('display','none')
                if($('.pay_money_bg').length == 0){
                    $('.select_btn').css('display','block');
                    $('.times_bug').css('display','none');
                }
                console.log($('.pay_money_bg'))

            })
            //增加或减少购买数量，最多5部
            var num = 1;

            $('.less').click(function(){
                var money = $('.select .select_type span').html()-0;
                money = 2798 - 0;
                num--;
                if(num <= 1){num = 1;}
                $(this).parent().find('p').html(num);
                $('.select .select_type span').html(money*num)

            })
            $('.plus').click(function(){
                var money = $('.select .select_type span').html()-0;
                money = 2798 - 0;
                num++; 
                if(num >= 5){num = 5;}
                $(this).parent().find('p').html(num)
                $('.select .select_type span').html(money*num)
            })

            //放大镜功能
            // 鼠标经过小图片时，放大区域图片更改
            this.$ul.on('mouseenter','img',function(){
                var src = $(this).attr('src');
                $('.magnifier img').attr('src',src);
            })
            //鼠标移入大图片区域，遮罩层显示，移出隐藏
            $('.bigImages_box').mouseover(function(e){
                $('.glass').css('display','block');
                $('.magnifier').css('display','block');
            })
            $('.bigImages_box').mouseleave(function(e){
                $('.glass').css('display','none');
                $('.magnifier').css('display','none');
            })
            // 鼠标移动事件
            $('.bigImages_box').mousemove(function(e){
                //获取鼠标当前位置
                var x = e.pageX,
                y = e.pageY;
                //获取大图片框距离文档的偏移位置
                var x_left = $('.bigImages_box').offset().left,
                y_top = $('.bigImages_box').offset().top;
                //计算鼠标的相对位置
                var mx = x - x_left,
                my = y - y_top;
                //获取遮罩层宽和高
                var glass_w = $('.glass').width() / 2,
                glass_h = $('.glass').height() / 2;
                // console.log(glass_w,glass_h);
                // 鼠标移动时，遮罩层移动距离
                $('.glass').css({'left':mx - glass_w + 'px', 'top':my - glass_h + 'px'});
                // 获取遮罩层的偏移位置
                var glass_l=$('.glass').position().left,
                glass_t=$('.glass').position().top;
                //判断边界
                var maxl = $('.bigImages_box').width() - $('.glass').width(),
                maxt = $('.bigImages_box').height() - $('.glass').height();
                if(glass_l <= 0){
                    $('.glass').css('left',0)
                }
                if(glass_l >= maxl){
                    $('.glass').css('left',maxl + 'px');
                }
                if(glass_t <= 0){
                    $('.glass').css('top',0)
                }
                if(glass_t >= maxt){
                    $('.glass').css('top',maxt + 'px');
                }
                //计算大图移动距离
                var bigX = glass_l * 2,
                bigY = glass_t * 2;
                $('.magnifier img').css({'left': -bigX + 'px' , 'top':-bigY + 'px'})
            })
        }
    }
}())
changeImages.init();


/*------------------------数据渲染-----------------------*/
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
            data = data.phone;
            $('.smallImages .json_img a').css({'backgroundImage':'url('+data[0].img+')'})
            $('.contain .title .title_imp').html(data[0].name);
            $('.select_type span').html(data[0].price);
        }
    }
}())
storePhone.init();