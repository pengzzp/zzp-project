<?php
	header("Access-Control-Allow-Origin:*");  

	$user=$_POST["username"];
	$pwd=$_POST["password"];
	$type=$_POST["type"];
	if($type!=="login"&&$type!=="register"){
		$res = array("error"=>"i don't know what are u doing!");
        die(json_encode($res));
	}

	require("./connect.php");
	
	$sql_login="SELECT username,pwd FROM user_list";
	$result_login=$conn->query($sql_login);
	
	
	$hasuser = FALSE; //用户名是否存在;
    $select_res = FALSE;//储存用户信息;
    $haspwd = FALSE;//该用户名密码是否正确;
    
    while($row=$result_login->fetch_assoc()){
    	if($row["username"]==$user){
    		$hasuser=true;
    		if($row["pwd"]==$pwd){
    			$select_res=json_encode($row);
    			$haspwd=true;
    			break;
    		}
    	}
    }
	if($type=="login"&&$haspwd==true){
		die("登录成功");
	}
	else if($type=="login"){
		die("登录失败");
	}
	
	
?>