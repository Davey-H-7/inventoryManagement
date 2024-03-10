
import {redirect} from 'react-router-dom';
import Order from './Order';

const OrderList = ({orders}) => {
  
    let orderNodes = orders.map(order => {
        return <Order order = {order} key ={order.id}/>
    });
      

    return (
        <>
        <h1> All Orders </h1>
        <button onClick = {redirect("/new")}>Add New Order</button>
        <ul>
        {orderNodes}
        </ul>
        </>
    )
}

export default OrderList