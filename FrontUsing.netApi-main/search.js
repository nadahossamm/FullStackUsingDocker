function getInputValue1() {
    // Selecting the input element and get its value 
   let type = document.getElementById("type").value;
   document.getElementById("typee").innerHTML="";
    
    // Displaying the value
    fetch('http://localhost:9090/Restaurant/GetRestaurantByType/?type='+type,
    {
        method:"GET",
    }).then(res=>res.json())
    .then(data=>{
        console.log(data.length);
        for (let i=0;i<data.length;i++)
        {
            console.log(data[i].name);
            console.log(data[i].location);
            document.getElementById("typee").innerHTML+=data[i].name+" , "+data[i].location;
            document.getElementById("typee").innerHTML+="<br>";
        }
        
    }

    )
    return false;
    
  }

  function getInputValue2() {
    // Selecting the input element and get its value 
  // let type = document.getElementById("type").value;
   let loc = document.getElementById("location").value;
   document.getElementById("loc").innerHTML="";
    // Displaying the value
    fetch('http://localhost:9090/Restaurant/GetRestaurantByLocation/?location='+loc,
    {
        method:"GET",
    }).then(res=>res.json())
    .then(data=>{
        console.log(data.length);
        for (let i=0;i<data.length;i++)
        {
            console.log(data[i].name);
            console.log(data[i].type);
            document.getElementById("loc").innerHTML+=data[i].name+" , "+data[i].type;
            document.getElementById("loc").innerHTML+="<br>";
        }
        
    }

    )
    return false;
    
  }

  function getInputValue3() {
    // Selecting the input element and get its value 
   let type = document.getElementById("typeb").value;
   let loc = document.getElementById("locationb").value;
   document.getElementById("both").innerHTML="";
   
    // Displaying the value
    fetch('http://localhost:9090/Restaurant/GetRestaurantByLocationAndType/?location='+loc+'&type='+type,
    {
        method:"GET",
    }).then(res=>res.json())
    .then(data=>{
        console.log(data.length);
        for (let i=0;i<data.length;i++)
        {
            console.log(data[i].name);
            document.getElementById("both").innerHTML+=data[i].name;
            document.getElementById("both").innerHTML+="<br>";
        }
        
    }

    )
    return false;
    
  }
