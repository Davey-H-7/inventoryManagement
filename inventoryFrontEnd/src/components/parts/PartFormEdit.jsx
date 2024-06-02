import { useState } from "react";

const PartFormEdit = ({handleUpdate, currentPart}) => {

    const [statePart, setStatePart] = useState({
        id: currentPart.id,
        model: currentPart.model,
        description: currentPart.description
    });

    const handleChange = function(event) {
        let propertyName = event.target.name;
        let copiedPart = {...statePart};
        copiedPart[propertyName] = event.target.value;
        setStatePart(copiedPart)
      }
  
      const handleSubmit = (event) => {
          event.preventDefault();
          handleUpdate(statePart);
      }

    return ( 
        <div className="newPartForm">
            <h1>New Part Details</h1>
            <form onSubmit={handleSubmit}>
                <input type ="text" name = "model" placeholder = {currentPart.model} onChange={handleChange}/>
                <input type ="text" name = "description" placeholder ={currentPart.description} onChange={handleChange}/>
                <br/>
                <button type ="submit">Submit</button>
            </form>
            <button onClick = {() => window.location ='/parts'} >Cancel</button>
        </div>
     )
}

export default PartFormEdit