$('#userid').blur(function(){
    var val = $(this).val()
    sendAjax(apiObj.login_check, {
        data: {
            user: val
        },
        success(res){
            if (res == 1) {
                return;
            } else if(res == 0){
                alert('用户名不存在，请重新输入或先注册');
            }
        }
    })
})
$('.login_btn').click(function(){
    var val = $('#userid').val(),
    pass = $('#password').val()
    sendAjax(apiObj.login_send, {
        data: {
            user: val,
            password: pass
        },
        success(res){
            if (res == 1) {
                localStorage.user = val;
                localStorage.password = pass;
                location.href = 'VIVO-index.html';
            } else if(res == 0){
                alert('密码或用户名不正确，请重新输入');
            }
        }
    })
})