var checkInput = {
    username(str) {
        var reg = /^\w{6,14}$/;
        return reg.test(str);
    },
    password(str) {
        var reg = /^\w{6,11}$/;
        return reg.test(str);
    },
    phone(str) {
        var reg = /^1[35789]\d{9}$/;
        return reg.test(str);
    },
}
var register = (function(){
    return {
        init(ele) {
            this.$el = document.querySelector(ele);
            this.$inputAll = this.$el.querySelectorAll('input');
            this.event()
        },
        event() {
            var _this = this;
            for(let i = 0; i < this.$inputAll.length; i++) {
                var $value = this.$inputAll[i].value;
                this.$inputAll[i].onblur = function() {
                    var $p = this.nextElementSibling;
                    if(this.value == '') {
                        $p.className = 'text-danger bg-danger';
                        $p.innerHTML = '内容不可以为空';
                    } else {
                        // 调用对应的方法, 把文本值传入
                        var bool = checkInput[this.name](this.value);
                        if(bool) {
                            // 验证成功
                            sendAjax('php/a.php',{
                            });
                            $p.className = 'text-success bg-success';
                            $p.innerHTML = '验证成功';
                        } else {
                            // 验证失败
                            $p.className = 'text-danger bg-danger';
                            $p.innerHTML = this.getAttribute('data-error');
                        }
                    }
                }
            }
            this.$el['password'].addEventListener('blur', function() {
                _this.$el['repassword'].onblur();
            })
            this.$el['repassword'].onblur = function() {
                var $p = this.nextElementSibling;
                if(this.value === _this.$el['password'].value) {
                    $p.className = 'text-success bg-success';
                    $p.innerHTML = '验证成功';
                } else {
                    $p.className = 'text-danger bg-danger';
                    $p.innerHTML = this.getAttribute('data-error');
                }
            }
            this.$el['submit'].onclick = function() {
                var $pAll = _this.$el.querySelectorAll('p');
                for(let i = 0; i < $pAll.length; i++) {
                    if($pAll[i].className.indexOf('text-success') == -1) {
                        $pAll[i].previousElementSibling.focus();
                        return;
                    }
                }
                alert('成功');
            }
        }
    }
} ())
register.init('.form-box');