import { useNavigate } from 'react-router-dom';


const PartButtons = () => {

    const navigate = useNavigate()


    const onAdd = () => {
        navigate("/parts/new")
    }

    return ( 
    <div className = 'partButtons'>
        <button onClick = {()=> window.location="/"}>Return to Home</button>
        <button onClick = {onAdd}>Add New Part</button> 
    </div>
    )
}
 
export default PartButtons;