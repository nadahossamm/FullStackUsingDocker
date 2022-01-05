function getInputValue() {
    // Selecting the input element and get its value 
   let username = document.getElementById("Username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    // Displaying the value
    fetch('http://localhost:9090/User/post',
    {
        method:"POST",
        headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    
    },
        body: JSON.stringify({
            id:0,
            name:username,
            email:email,
            password:password})
    }).then(res=>{
       
        window.location.href = "main.html";
      
    }
    )
    /*if(username=="")
    {
        document.getElementById("u").innerHTML="username can't be empty";
    }
    else
    {
        document.getElementById("u").innerHTML="";
    }
    if(password=="")
    {
        document.getElementById("p").innerHTML="password can't be empty";
    }
    else
    {
        document.getElementById("p").innerHTML="";
    }
    */
    return false;
    
  }
