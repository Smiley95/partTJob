

function checkName()
{
    var name = document.getElementById("name").value;

    if( name.length <5)
    {
        document.getElementById("errorName").innerHTML = "invalid name minimum 5 char";
    document.getElementById("errorName").style.color="red";
    document.getElementById("name").style="border-color:red";
    return false;
    }
    else
    {
        document.getElementById("errorName").innerHTML = "";
        document.getElementById("errorName").className= "";
        document.getElementById("name").style="";  
        return true;
    }
}
function checkEmail(){
    var mail= document.getElementById("Useremail").value;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
       document.getElementById("errorMsg").className= "";
       document.getElementById("errorMsg").innerHTML = "";
       document.getElementById("Useremail").style="";


      return (true)
    }
    document.getElementById("errorMsg").innerHTML = "You have entered an invalid email address!";
    document.getElementById("errorMsg").style.color="red";
    document.getElementById("Useremail").style="border-color:red";
      return (false)
}

function checkPass()
{
    var pass=document.getElementById("pass1").value;

    if (pass.length<5)
    {
        document.getElementById("errorMsgPass").innerHTML = "weak password use minimum 5 char!";
     document.getElementById("errorMsgPass").style.color="red";
     document.getElementById("pass1").style="border-color:red";
     return false;
    }   
    else 

    {document.getElementById("errorMsgPass").innerHTML = "";
    document.getElementById("errorMsgPass").className= "";
    document.getElementById("pass1").style="";
  
    return true;
}
}
function checkPass1()
{
    
var pass=document.getElementById("pass1").value;
var pass2=document.getElementById("passConf").value;

    if (pass ==  pass2)
    
        {document.getElementById("errorMsgPass").innerHTML = "";
        document.getElementById("errorMsgPass").className= "";
        document.getElementById("Userpassword").style="";
        return true;
       
    }
    else 
{
    document.getElementById("errorMsgPassConf").innerHTML = "Passwords do not match !";
     document.getElementById("errorMsgPassConf").style.color="red";
     document.getElementById("passConf").style="border-color:red";
     return false;


    }    }

function checkPhone()


{
    var phone=document.getElementById("mobile").value;

  if( /^\(?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/.test(phone))
        {
            
            document.getElementById("errorMsgPhone").innerHTML = "";
            document.getElementById("errorMsgPhone").className= "";
            document.getElementById("mobile").style="";
      return true;
        }
      else
        {
            document.getElementById("errorMsgPhone").innerHTML = "invalid Mobile phone form please respect XX XXX XXX !";
            document.getElementById("errorMsgPhone").style.color="red";
            document.getElementById("mobile").style="border-color:red";
            return false;
        }
}
function checkForm()
{
    var name = document.getElementById("name").value;
    var mail= document.getElementById("Useremail").value;
    var pass=document.getElementById("pass1").value;
    var phone=document.getElementById("mobile").value;
    var pass2=document.getElementById("passConf").value;
    var list=document.getElementById("list");
    if (name=="" || name==null || mail=="" || mail==null || pass=="" || pass==null || pass2=="" ||   phone=="")
{
document.getElementById("regError").innerHTML="Please Fill All Required Field";
document.getElementById("regError").style.color="red";
return false;

}
else 
   { if(list.options[list.selectedIndex].value==='' ) 
   {document.getElementById("errorList").innerHTML = "Please choose a city !";
    document.getElementById("errorList").style.color="red";
    document.getElementById("list").style="border-color:red";
    return false;}


else 
{
    document.getElementById("errorList").innerHTML = "";
    document.getElementById("errorList").className= "";
    document.getElementById("list").style="";
}
if(document.getElementById("signing").checked==1 )
{
    document.getElementById("errorSigning").innerHTML = "";
    document.getElementById("errorSigning").className= "";
}
else
{
   
    document.getElementById("errorSigning").innerHTML = "You shoold agree to our Terms and Conditions !";
    document.getElementById("errorSigning").style.color="red";
return false;
}
   }
   

    if(list.options[list.selectedIndex].value!=='' && document.getElementById("signing").checked!=1) {
    document.getElementById("regError").innerHTML="Succed Registration !";
    document.getElementById("regError").style.color="green";
    alert("Succed Registration !")

    return true;
   }
}
   

   