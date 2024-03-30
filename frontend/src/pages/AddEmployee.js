// import useState from react
import React, { useState } from 'react';

       function AddEmployee(props) {
        // Declare state variable, which we'll call "firstName"
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [emailAddress, setEmailAddress] = useState("");
        const [password, setPassword] = useState("");

                  function handleSubmit (event) {
                    // prevent the default behavior of the form submission
                    event.preventDefault();
                    // prepare the data to be sent to the server
                    const data = {
                      firstName: firstName,
                      lastName: lastName,
                      emailAddress: emailAddress,
                      password: password
                    };
                    // send the data to the server
                    const apiUrl = "http://3.21.12.0/add-employee";
                    const requestOption = {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(data)
                    };
                    const response = fetch(apiUrl, requestOption);
                    response.then(res => res.json())
                    .then(res => {
                      console.log(res);

                      // redirect to the home page
                    });
                  }

                  return (
                    <div>
                      <h1>Add employee</h1>
                      <form onSubmit={handleSubmit}>
                        <label htmlFor="fname">First name:</label><br />
                        <input type="text" id="fname" name="fname" value={firstName} onChange={event => setFirstName(event.target.value)}/><br />
                        <label htmlFor="lname">Last name:</label><br />
                        <input type="text" id="lname" name="lname" value={lastName} onChange={event => setLastName(event.target.value)} /><br />
                        <label htmlFor="email">Email:</label><br />
                        <input type="text" id="email" name="email" value={emailAddress} onChange={event => setEmailAddress(event.target.value)}/><br />
                        <label htmlFor="password">Password:</label><br />
                        <input type="text" id="password" name="password" value={password} onChange={event => setPassword(event.target.value)}/><br /><br />
                        <input type="submit" value="Submit" />
                      </form>
                    </div>
                  );
                }

    
  

export default AddEmployee