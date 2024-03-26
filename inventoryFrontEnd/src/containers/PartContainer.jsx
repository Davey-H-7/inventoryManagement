import { Routes, Route, useParams } from "react-router-dom";
import PartList from "../components/parts/PartList";
import PartDetail from "../components/parts/PartDetail";
import '../styling/PartContainer.css'

const PartContainer = ({parts, items, getById}) => {

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
            {/* <Route path ="/new" element = {<PartForm handlePost ={handlePost} /> }/> */}
            <Route path ="/:id" element = {<PartDetailWrapper/>}/>
        </Routes>

    </div>
    )
}
 
export default PartContainer;