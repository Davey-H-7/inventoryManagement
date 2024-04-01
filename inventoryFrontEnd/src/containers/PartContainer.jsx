import { Routes, Route, useParams } from "react-router-dom";
import PartList from "../components/parts/PartList";
import PartDetail from "../components/parts/PartDetail";
import PartForm from "../components/parts/PartForm";
import '../styling/parts/PartContainer.css'

const PartContainer = ({parts, items, getById}) => {

  const handlePost = (part) =>{
    console.log("handlePost triggered");
    fetch("/api/parts", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(part)
    })
    .then(() => window.location ='/parts')
}

    const handleDelete = (part) => {
        fetch("/api/parts/" + part.id, {
          method: "DELETE"
        })
        .then( window.location ="/parts")
      }

    const PartDetailWrapper = () => {
        const {id} = useParams();
        const foundPart = getById(id,parts)
        return <PartDetail part = {foundPart} items ={items} handleDelete={handleDelete}/>
       }

    return ( 
        <div className="partsContainer">
        <Routes>
            <Route path="/" element = {<PartList parts ={parts}/>}/>
            <Route path ="/new" element = {<PartForm handlePost ={handlePost} /> }/>
            <Route path ="/:id" element = {<PartDetailWrapper/>}/>
        </Routes>

    </div>
    )
}
 
export default PartContainer;