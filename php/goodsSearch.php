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

//拿到前端数据执行查询
$state = $_GET['state'];
$sql = "select * from goods_table where state= '". $state ."'";
$result = mysqli_query($con,$sql);
//定义将会使用到的数据变量
$data = array();
function json($code,$message="",$data=array()){  
    $result=array(  
      'code'=>$code,  
      'message'=>$message,  
      'data'=>$data   
    );  
    //输出json  
    echo json_encode($result);  
    exit;  
}
//开始处理查询结果
while($row = mysqli_fetch_assoc($result)) {
    $dataarr[]=$row;  
}  
echo json(1,'数据返回成功',$dataarr); 

mysqli_close($con);
?>