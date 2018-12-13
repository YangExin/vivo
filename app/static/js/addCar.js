var addCar = (function() {
    var $add = document.querySelector('.add');
    var $num = document.querySelector('.num');
    var $total = document.querySelector('.total');
    var $unit = document.querySelector('.price_num');
    // console.log($total);
    return {
        init() {
            this.event();
            // this.getData();
        },
        event() {
            var _this = this;
            $add.onclick = function(e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName === 'BUTTON') {
                    var res = {}
                    //获取单价
                    var unit_pri = $unit.innerHTML;
                    res.up = unit_pri;
                    // 获取商品数量
                    var num = $num.innerHTML;
                    res.num = num;
                    //获取总价
                    var total_pri = $total.innerHTML;
                    res.tp = total_pri;
                    //获取图片路径
                    var _src = $('.json_img').find('img').attr('src');
                    res.src = _src;
                    // console.log(_src);
                    _this.setItem(res);
                    // 从商品数据中,获取对应这一个商品的数据
                    // _this.data[father.index].count = count;
                    // _this.setItem(_this.data[father.index]);
                }

            }
        },
        // 把商品数据存储到本地
        setItem(data) {
            // 现获取原有数据
            var shopList = localStorage.getItem('shopList') || '[]';
            shopList = JSON.parse(shopList);
            //判断购物数据中, 是否存在当前商品
            for(var i = 0; i < shopList.length; i++) {
                if(data.id == shopList[i].id) {
                    // 此商品已经存在
                    shopList[i].count += data.count;
                    break;
                }
            }
            if(i == shopList.length) {
                // 商品不存在
                shopList.push(data);
            }
            localStorage.shopList = JSON.stringify(shopList);
            // console.log(shopList);

        }
    }
}())

addCar.init();