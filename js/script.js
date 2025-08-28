greet();

// Greet the User
function greet() {
    
    // get the username from prompt
    let username=prompt("Enter your name:");
    
    // display the username in the header
    document.getElementById("username").innerText=username;
}
// validate the form  
function validateform() {
    
    // get the name input value
    let name = document.getElementById("name-input").value;
    
    // validate the name input
    if (name === "") {
      
        // show alert message
        alert("Name must be filled out");  
    
    }else{
        // show thank you message
        alert("Thank you " + name + "!");
    }
}