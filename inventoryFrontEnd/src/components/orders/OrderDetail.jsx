
const OrderDetail = ({order}) => {
  

    return(
        <div className="detail">
            <h1>Order Number: {order.id}</h1>
            <h2>Client: {order.client}</h2>
            <h3>Due on: {order.dueDate}</h3>

        </div>
        
    )

}

export default OrderDetail