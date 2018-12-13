var addCar = (function () {
    return{
        init(){
            this.event();
            this.getData();
        },
        event(){
            var _this = this;
            $('.select_btn .add').click(function () {
                var phoneCount = $('.select .select_type span').html()-0;
                _this.data.phoneCount = phoneCount;
                console.log(_this.data.phoneCount);
            })

        },
        getData(){
            $.ajax("http://localhost:6623/vivo/vivo/server/json/phone.json",{
                type:'post',
                contentType:'json',
                success(res){
                    // alert('数据获取成功')
                    // _this.inisertData(res);
                    this.data = res.phone[0];
                    // this.insertData(res.phone[0]);
                },
                error(){
                    alert('数据获取失败')
                }
            })
        },
        insertData(res){
            console.log(res)
        },
        setItem(){
            var shopList = localStorage.getItem('shopList') || '[]';
            shopList = JSON.parse(shopList);
        }
    }
}())
addCar.init();