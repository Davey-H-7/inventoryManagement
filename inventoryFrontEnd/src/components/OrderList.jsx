
import Order from './Order';

const OrderList = ({orders}) => {
  
    let orderNodes = orders.map(order => {
        return <Order order = {order} key ={order.id}/>
    });
      

    return (
        <>
        <h1> This is the order list </h1>
        <ul>
        {orderNodes}
        </ul>
        </>
    )
}

export default OrderList