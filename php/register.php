<?php
    $name  = $_POST['name'];
    $email =$_POST['email'];
    $phones = $_POST['number'];
    $dob=$_POST['dob'];
    $psw=$_POST['psw'];
    
        $conn = mysqli_connect("localhost", "root", "", "register");
       {
            $stmt=$conn->prepare("insert into users(Name,dob,email,phone,password)values(?,?,?,?,?)");
            $stmt->bind_param("sssss",$name,$dob,$email,$phones,$psw);
            $stmt->execute();
            echo"Registration successful";
            $stmt->close();
            $conn->close();
  
        }   

    
?>