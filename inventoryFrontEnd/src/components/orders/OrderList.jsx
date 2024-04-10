import { useNavigate } from 'react-router-dom';
import Order from './Order';

const OrderList = ({orders}) => {

    const navigate = useNavigate();
  
    if(orders.length === 0){
        return <p>Loading orders</p>
    }

    let orderNodes = orders.map(order => {
        return <Order order = {order} key ={order.id}/>
    });

    const onAdd = () => {
        navigate("/orders/new")
    }
      

    return (
        <>
        <h1> All Orders </h1>
        <button onClick = {()=> window.location="/"}>Return to Home</button>
        <ul>
        {orderNodes}
        </ul>
        <button onClick = {onAdd}>Add New Order</button>
        </>
    )
}

export default OrderList