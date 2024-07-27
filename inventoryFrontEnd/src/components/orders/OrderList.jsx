import Order from './Order';

const OrderList = ({orders}) => {
  
    if(orders.length === 0){
        return <h2>No Orders Found! Try creating one</h2>
    }

    let orderNodes = orders.map(order => {
        return <Order order = {order} key ={order.id}/>
    }); 

    return (
        <div className='orderList'>
            <h1> All Orders </h1>
            <ul>
                {orderNodes}
            </ul>
        </div>
    )
}

export default OrderList