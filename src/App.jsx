import { useState } from 'react'
import './App.css'
import InputForm from '../components/InputForm' // imports to use component
import DataShowcase from '../components/DataShowcase' // imports to use component

function App() {
  const [submittedData, setSubmittedData] = useState(null) // Takes the submitted data from the InputForm and stores it, so it can be passed to DataShowcasew

  const handleDataSubmit = (data) => { // Sets the data to the submitted data. (const handleDataSubmit is passed to InputForm below, and used there.)
    setSubmittedData(data);
  };

  return (
<div className="app-container">

<InputForm onDataSubmit={handleDataSubmit}/> {/* Takes in handleDataSubmit and renames it to onDataSubmit */}
<DataShowcase data={submittedData}/> {/* DataShowcase takes the submitted data and prints it on the page - on load there is nothing so a ternary makes sure there's nothing there. */}

</div>
  )
}

export default App
