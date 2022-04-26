const url = "http://localhost:3000"; //putting our base URL in a variable for cleaner code below
//eventually, we'll use thid in fetch requests and make calls to our server by appending endpoints

//add an event listner to give our button functionality(using dom selection)
//IF the getEmployeeButton gets clicked, execute the getEmployees function
document.getElementById("getEmployeeButton").addEventListener("click",getEmployees);

//getEmployees is an async function which has a fetch request to get employees from our server
//remember, async makes a function return a Promise (which fetch requests return)

async function getEmployees() {

    //we will send a fetch request to get our employee data
    //by default, fetch requests send GET requests (See how to send others like POST below)
    let response = await fetch(url + "/employees");

    //log the response in the console just to see the response object( good for debugging)
    console.log(response);

    //control flow on the status code (which tells us whether the request was successful)
    //we can access the status code (as well as other stuff) through our response variable
    if(response.status ===200) { //if the response has a status code of 200..

        //parse the JSON we get back into a JS object

        //log the actual employee data that's been parsed from JSON (good for dubugging)

        //for every Employee object we get back, put in the table

    }else {
        alert("Request failed");

    }
}