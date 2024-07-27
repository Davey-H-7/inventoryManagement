import { useNavigate } from 'react-router-dom';


const OrderButtons = () => {

    const navigate = useNavigate();

    const onAdd = () => {
        navigate("/orders/new")
    }

    return ( 
        <div className='orderButtons'>
        <button onClick = {()=> window.location="/"}>Return to Home</button>
        <button onClick = {onAdd}>Add New Order</button> 
        </div>
    )
}
 
export default OrderButtons;