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
        <div className='orderList'>
            <h1> All Orders </h1>
            <button onClick = {()=> window.location="/"}>Return to Home</button>
            <button onClick = {onAdd}>Add New Order</button>
            <ul>
                {orderNodes}
            </ul>
        </div>
    )
}

export default OrderList