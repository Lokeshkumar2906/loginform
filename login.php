<?php
    $username  = $_POST['username'];
    $password =$_POST['password'];   
    $conn = mysqli_connect("localhost", "root", "", "register");
    
    $query="SELECT * FROM users where name='$username' and password='$password' ";
    $result=mysqli_query($conn,$query);
    $count=mysqli_num_rows($result);

    if(!$username | !$password){
        echo "e";}
 else if($count>0)
    {   
        echo "true";
    }
    else{
        echo "false";
    }

  
?>