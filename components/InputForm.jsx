import React from 'react'
import App from '../src/App'
import {useState} from 'react'

const InputForm = ({onDataSubmit}) => { // InputForm accepts the handleSubmitData const from App, which lets InputFrom set the data const in App - for sending it to another component
    const [user, setUser] = useState(""); // user variable, setUser function
    const [name, setName] = useState("");// name variable, setName function
    const [age, setAge] = useState("");// age variable, setAge function
  
    const handleSubmit = (e) => { // Another handleSubmit arrow,
        e.preventDefault();       // prevents reload
        onDataSubmit({ user, name, age }); // and runs the arrow function in App using the destructured param above.
      };

    const setUserVar = (e) => { // Sets the user to what triggered the event's value - in this case the Username input field.
        setUser(e.target.value)
    };
    const setNameVar = (e) => {// Sets the user to what triggered the event's value - in this case the Name input field.
        setName(e.target.value)
    };
    const setAgeVar = (e) => {// Sets the user to what triggered the event's value - in this case the Age input field.
        setAge(e.target.value)
    };
    return (
    <>
    <div className="input-container">

        <label>Username:</label>
            <br></br>
        <input type="text" onChange={setUserVar}/> {/* Onchange set "user" to whatever the value is*/}
            <br></br>

        <label>Full Name:</label>
            <br></br>
        <input type="text" onChange={setNameVar}/>  {/* Onchange set "name" to whatever the value is*/}
            <br></br>

        <label>Age:</label>
            <br></br>
        <input type="text" onChange={setAgeVar}/>  {/* Onchange set "age" to whatever the value is*/}
            <br></br>

        <button type="submit" className="submit-data-button" onClick={handleSubmit}>Submit</button> {/* When clicked, runs the handleSubmit func, which in turn runs the handleDataSubmit in APP */}
  </div>                                                                                            {/* Sending the data to APP, ready to be sent to DataShowcase*/}
  </>
  )
}

export default InputForm
