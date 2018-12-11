<?php
    header("Access-Control-Allow-Origin:*");
    header('Access-Control-Allow-Headers:x-requested-with,content-type，requesttype');
    header("Content-type: text/html;charset=UTF-8");
    $username = $_GET["user"];
    $password = $_GET['pass'];
    $tel = $_GET['tel'];
    $coon = new mysqli('localhost', 'root', '', 'vivo_admin', 3306);

    $sql = "INSERT INTO `vivo_user` (username,telnumber,`password`) VALUES ('$username','$tel','$password')";
    $coon -> query("SET NAMES 'utf8'");//写库

    $coon ->query("SET CHARACTOR SET 'utf8'");

    $result = $coon -> query($sql);


    if ($result) {
        // $arr = array("code" => "1");
        echo "1";
    } else {
        echo "0";
        // $arr = array("code" => "0");
    }
    // echo json_encode($arr);
    
?>