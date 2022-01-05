function getInputValue() {
    // Selecting the input element and get its value 
   let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // Displaying the value
    
    fetch('http://localhost:9090/User/put',
    {
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
            },
        body: JSON.stringify({
            id:id,
            name:name,
            password:password,
            email:email})
    }).then(res=>{
       
        window.location.href = "main.html";
    }

    )
    
    
    return false;
    
  }
