<?php
    header("Access-Control-Allow-Origin: *");
    $username = $_POST["username"];
    $password = $_POST['password'];
    $tel = $_POST['phone'];
    $coon = new mysqli('localhost', 'root', '', 'vivo_admin', 3306);
    $sql = "INSERT INTO vivo_user (username,telnumber,password) VALUES ('$username','$tel','$password')";
    $coon -> query("SET NAMES 'utf8'");//写库
    $result = $coon -> query($sql);
    if($result) {
        //  查到数据
        echo "<script>
        alert('注册成功！');
        if(alert){
            window.location = '../VIVO-index.html';
        }
        </script>"
    } else {
        // 没有查询到
       echo "<script>
       alert('注册失败！');
       if(alert){
           window.location = 'register.html';
       }
       </script>"
    }
?>