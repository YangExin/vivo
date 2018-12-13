var shopCar = (function () {
    return {
        init() {
            this.event();
            this.insertData();
        },
        event() {
            var _this = this;
            if(localStorage.shopList){
                $('.empty').css('display','none');
                $('.shop_cart').css('display','block');
                this.insertData();
            } else{
                $('.empty').css('display','block');
                $('.shop_cart').css('display','none');
            }
        },
        insertData(data) {
            data = localStorage.shopList;
            data = JSON.parse(data)[0]
            var url = data.src;
            var pri = data.up;
            var count = data.num;
            var tal = data.tp;
            var title = data.title;
            console.log(data);
            $('.img').css({'background':"url("+url+")",'background-size':'100%'});
            $('.price').html(pri)
            $('.num').val(count);
            $('.name').html(title);
            $('.total').html('￥'+ tal);
            $('.com').html(count);
            $('.settlement').html('￥' + tal);
        }
    }

}())
shopCar.init();