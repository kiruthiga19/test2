
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1||dotposition>1){  
  alert("Please enter a valid e-mail address \n atpostion:");  
  return false;  
  }  
}  

    function validateage(){
        var num=document.myform.num.value;
        if(isNaN(num)){
            return true
        }
        else{
            alert("age must contain number")
        }
    }
    function validatenumber(){
        var num=document.myform.num.value;
        if (isNaN(num)){
          document.getElementById("phone number").innerHTML= alert("Enter Numeric value only");
          return false;
        }else{
          return true;
          }
        }
    function create(){ 
        if(validateForm && validateage &&  validateemail ==true) {
            alert("signup.html"); 
        }
        else{
            alert("fill the form correctly")
        } 
        }  