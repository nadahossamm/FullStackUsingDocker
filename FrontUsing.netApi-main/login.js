function getInputValue()
{
  // Selecting the input element and get its value
  var x; 
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  // Displaying the value
  console.log(email);
  fetch('http://localhost:9090/User/GetUserByEmail?email='+email,
  {
      method:"GET",
      
  }).then(res=>res.json())
  .then(data=>{
    
    if(data.user==null)
    {
      
        console.log("error wrong email");
        document.getElementById("p").innerHTML="wrong email";
        
    }
    
    else
    {
      if(password!=data.user.password)
      {
        console.log("error wrong pass");
        document.getElementById("p").innerHTML="wrong password";
      }
      else
      {
        console.log("good");
        document.getElementById("p").innerHTML=data.user.password;
        window.location.href = "main.html";
    
      }
        }

})
  return false;
}


