
function greetPerson(name, callback) {
    console.log(`Hello ${name}, you are taking this: ${callback()}`)
 }
 
 function person() {
     return "subject";
 }
 
 greetPerson("eva", person); // Pass "eva" as the name and the person function as the person parameter
 


