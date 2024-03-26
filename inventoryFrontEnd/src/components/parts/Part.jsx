import { Link } from "react-router-dom";

const Part = ({part}) => {
    
    const partURL = "/parts/" + part.id
  
    return(
        <Link className="part" to ={partURL}>
            Model: {part.model} <br/>
        </Link>
    )
    }
 
export default Part;