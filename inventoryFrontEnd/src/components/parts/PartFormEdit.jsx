import { useState } from "react";

const PartFormEdit = ({handlePost}) => {

    const [statePart, setStatePart] = useState({
        model: "",
        description:""
    });

    const handleChange = function(event) {
        let propertyName = event.target.name;
        let copiedPart = {...statePart};
        copiedPart[propertyName] = event.target.value;
        setStatePart(copiedPart)
      }
  
      const handleSubmit = (event) => {
          event.preventDefault();
          handlePost(statePart);
      }

    return ( 
        <div className="newPartForm">
            <h1>New Part Details</h1>
            <form onSubmit={handleSubmit}>
                <input type ="text" name = "model" placeholder ="Enter Model Name/Number" onChange={handleChange}/>
                <input type ="text" name = "description" placeholder ="Part Description" onChange={handleChange}/>
                <br/>
                <button type ="submit">Submit</button>
            </form>
            <button onClick = {() => window.location ='/parts'} >Cancel</button>
        </div>
     )
}

export default PartFormEdit