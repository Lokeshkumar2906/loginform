$(document).ready(function(){
    $("#login").click(function(){
         var username=$('#username').val();
         var password=$('#password').val();
        console.log(password);
    $.post("./login.php",{
        username:username,password:password
    },function(data,status){ 
          if(data=="true")  {
            window.location.assign("profile.html");
          }else if(data=="e"){
            window.location.assign("login.html");
            alert("Field is Empty");
          }else{
            window.location.assign("login.html");
            alert("User not found");
          }
    });
    });
});