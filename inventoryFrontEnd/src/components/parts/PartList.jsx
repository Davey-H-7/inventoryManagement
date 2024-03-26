import { useNavigate } from 'react-router-dom';
import Part from './Part';

const PartList = ({parts}) => {

    const navigate = useNavigate()

    if(parts.length === 0){
        return <p>Loading parts</p>
    }
  
    const partNodes = parts.map((part) => {
         return <Part part = {part} key ={part.id}/>
    })

    const onAdd = () => {
        navigate("/parts/new")
    }

    return(
        <div className='partList'>
            <h1> All Parts </h1>
            <button onClick = {()=> window.location="/"}>Return to Home</button>
            <button onClick = {onAdd}>Add New Part</button>
                <ul>
                    {partNodes}
                </ul>
        </div>

    )
}

export default PartList;