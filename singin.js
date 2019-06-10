function checkEmail(){
     var mail= document.getElementById("Useremail").value;
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
     {
        document.getElementById("errorMsg").style.color= "";
        document.getElementById("errorMsg").innerHTML = "";
        document.getElementById("Useremail").style="";


       return (true)
     }
     document.getElementById("errorMsg").innerHTML = "You have entered an invalid email address!";
     document.getElementById("errorMsg").style.color= "red";
     document.getElementById("Useremail").style="border-color:red";
       return (false)
}

function checkPass()
{
    var pass=document.getElementById("Userpassword").value;
    if (pass.length<8)
    {
        document.getElementById("errorMsgPass").innerHTML = "Short password!";
     document.getElementById("errorMsgPass").style.color= "red";
     document.getElementById("Userpassword").style="border-color:red";
     return false;
    }
    else 

    {document.getElementById("errorMsgPass").innerHTML = "";
    document.getElementById("errorMsgPass").className= "";
    document.getElementById("Userpassword").style="";
  
    if (checkEmail()=true)
    document.getElementById("valid").disabled=false;
    return true;
}
}

function validation()
{
     
    
    var pass=document.getElementById("Userpassword").value;
    var mail= document.getElementById("Useremail").value;
    if (pass=="" || mail=="" || pass==null || mail==null)
    {
       if (mail=="" || mail==null)
       {   document.getElementById("errorMsg").innerHTML = "You shoold enter you  email !";
       document.getElementById("errorMsg").style.color= "red";
       document.getElementById("Useremail").style="border-color:red";
         return (false)}
        else 
        {
            document.getElementById("errorMsgPass").innerHTML = "invalid password!";
            document.getElementById("errorMsgPass").style.color= "red";
            document.getElementById("Userpassword").style="border-color:red";
            return false;
        }
    }
    else {
if( mail=="moniaghouili@gmail.com" && pass=="moniaparttimejob")
{
    document.getElementById("errorMsgLog").innerHTML=""
    document.getElementById("errorMsgLog").style.color="red"
    alert('welcome');
   
return true;
}
else
{    document.getElementById("errorMsgLog").innerHTML=" wrong password !"
     document.getElementById("errorMsgLog").style.color="red";
     return false;
}
    }
}