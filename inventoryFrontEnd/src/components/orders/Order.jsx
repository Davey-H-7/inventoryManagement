import { Link } from "react-router-dom"

const Order = ({order}) => {
      
    const orderUrl = "/orders/" + order.id
    return (
        <Link className={"order"} to={orderUrl}> 
            <p>Order No: {order.id}</p>
            <p>Client: {order.client} </p>
            <p>Priority: {order.priority}</p>
            <p>Due on: {order.dueDate}</p>
        </Link>
    )
}

export default Order