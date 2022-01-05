function getInputValue() {
    // Selecting the input element and get its value 
   let id = document.getElementById("id").value;
    let newname = document.getElementById("newname").value;
    let type = document.getElementById("type").value;
    let location = document.getElementById("location").value;
    // Displaying the value
    fetch('http://localhost:9090/Restaurant/put',
    {
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
            },
        body: JSON.stringify({
            id:id,
            name:newname,
            type:type,
            location:location})
    }).then(res=>{
       
        window.location.href = "main.html";
    }

    )
    
    
    return false;
    
  }
