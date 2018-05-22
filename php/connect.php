<?php
	$servername="localhost:3306";
	$username="root";
	$password="123456";
	$dbname="0516";
	
	$conn=new mysqli($servername,$username,$password,$dbname);
	if ($conn->connect_error) {
          die("连接失败: " . $conn->connect_error);
      }
//       echo "连接成功";
?>