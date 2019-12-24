<?php
header('Access-Control-Allow-Origin: *');
error_reporting(0);
$user = 'cj';
$password = 'cj123456';
$db = 'bysj';
$host = 'localhost';
$port = 3306;
$link = mysqli_init();
$con = mysqli_connect($host, $user, $password, $db, $port);
mysqli_set_charset($con, "utf8");

// 如果数据库连接出错
if(mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
//登录
$username = $_POST['username'];
$pwd = $_POST['pwd'];
// $sql ="insert into `usersign`( `name`, `pssword`) values ('". $name ."','". $password ."')"; 
// $sql = "select count(*)  from usersign where name = '". $name ."' and pssword = '". $password ."'";
$sql = "select count(*) as total from userdata where username= '". $username ."' and pwd = '". $pwd ."'";
// $sql = "select count(*) as total from userdata where username= '11' and pwd = '11111111'";

$result = mysqli_query($con, $sql);
// var_dump($result);
if($result){
    $resultArray = array(); // 初始化一个数组
    while($row = mysqli_fetch_object($result)) {
        array_push($resultArray,$row);
    }
}
$newArray = json_encode($resultArray);  
// var_dump($newArray);
if($newArray[11] > 0){
    echo 'true';  
}else{
    echo 'flase';  
}   
mysqli_close($con);
?>