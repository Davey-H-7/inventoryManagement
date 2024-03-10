
import Order from './Order';



const OrderList = ({orders, setTrue}) => {
  
    let orderNodes = orders.map(order => {
        return <Order order = {order} key ={order.id}/>
    });
      

    return (
        <>
        <h1> All Orders </h1>
        <button onClick = {setTrue}>Add New Order</button>
        <ul>
        {orderNodes}
        </ul>
        </>
    )
}

export default OrderList