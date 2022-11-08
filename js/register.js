$(document).ready(function(){
    $("#register").click(function(){
      var name=$('#Name').val();
      var email=$('#email').val(); 
      var DOB=$('#DOB').val();
      var number=$('#Number').val();
      var psw=$('#psw').val();
      console.log(psw);
      if(!name|!email|!DOB|!number|!psw){

        window.location.assign("index.html");
        alert("Fill all the fields");
      }else{


    $.post("./php/register.php",{
        name:name,email:email,number:number,dob:DOB,psw:psw
    },function(data,status){
        
        window.location.assign("login.html");
        alert("successfully registered");
        

    });}
    });
}); 