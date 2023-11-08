// Require the node-fetch module
const fetch = require("node-fetch");


// Define the port to listen on
const port = 80;

if(process.env.checker === "amporo") {

  var team_id = process.argv.slice(2);
  console.log("teamID = " + team_id);

  // Define the API endpoint and the data to post
  const url = "https://arxus-htf.azurewebsites.net/api/checkanswer";
  const data = {
    team_id: team_id,
    runtime: "Terraform",
    answer: "ldue66xneeur230",
    task_name: "Terraform_assignment"
  };

  // Make the HTTP post request using fetch
  fetch(url, {
    method: 'POST', // Specify the method
    headers: {
      "Content-Type": "application/json" // Specify the content type
    },
    body: "{\r\n    \"team_id\": \"" + team_id + "\",\r\n    \"runtime\": \"Terraform\",\r\n    \"answer\": \"ldue66xneeur230\",\r\n    \"task_name\": \"Terraform_assignment\"\r\n}" // Send the data as JSON`
  })
    .then(res => res.text())
    .then(text => console.log(text)) // Print the response
    .catch(err => console.error(err)); // Handle errors

    // Require the express module
  const express = require("express");

  // Create an express app
  const app = express();

  // Define a route to handle GET requests
  app.get("/", (req, res) => {
    // Send a response
    res.send("Hello from Docker!");
  });
  // Start the server and listen on the port
  app.listen(port, () => {
    // Log a message
    //console.log("Server listening");
  });
} else {
  console.log("Something went wrong... make sure you're deploying the app service using the provided Terraform template...")
}

