import { Routes, Route, useParams } from "react-router-dom";
import PartList from "../components/parts/PartList";
import '../styling/PartContainer.css'

const PartsContainer = ({parts, items, getById}) => {

    // const PartDetailWrapper = () => {
    //     const {id} = useParams();
    //     const foundPart = getById(id,parts)
    //     return <PartDetail part = {foundPart} handleDelete={handleDelete}/>
    //    }

    return ( 
        <div className="partsContainer">
        <Routes>
            <Route path="/" element = {<PartList parts ={parts}/>}/>
            {/* <Route path ="/new" element = {<PartForm handlePost ={handlePost} /> }/>
            <Route path ="/:id" element = {<PartDetailWrapper/>}/> */}
        </Routes>

    </div>
    )
}
 
export default PartsContainer;