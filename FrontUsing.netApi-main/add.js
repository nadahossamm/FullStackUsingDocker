function getInputValue() {
    // Selecting the input element and get its value 
let name = document.getElementById("name").value;
   let type = document.getElementById("type").value;
   let loc = document.getElementById("location").value;
   //document.getElementById("both").innerHTML="";
   
    // Displaying the value
    fetch('http://localhost:9090/Restaurant/post',
    {
        method:"POST",
        headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
        body: JSON.stringify({
            id:0,
            name:name,
            type:type,
            location:loc})
    }).then(res=>{

        window.location.href = "main.html";
    
    })
    return false;
    
  }
