import React from 'react'

const DataShowcase = ({data}) => { // Takes the data stored in APP (submittedData) - Destructures it, and uses the data to display what the user input.
  
    return (
        <>
        <div className="container">
          {data ? (                                 
            <>                      {/* If there is data,  */}
              <p className="title">Username:</p>
              <br />
              <p>{data.user}</p>        {/* print said data and make the user happy */}
              <br />
  
              <p className="title">Full Name:</p>
              <br />
              <p>{data.name}</p>
              <br />
  
              <p className="title">Age:</p>
              <br />
              <p>{data.age}</p>
              <br />
            </>
          ) : (
            "" // Render nothing if data is not available - you can still submit an empty form, and it will still show :(
          )}
        </div>
      </>
    );
  };
  

export default DataShowcase
