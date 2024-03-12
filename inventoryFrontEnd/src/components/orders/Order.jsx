import { Link } from "react-router-dom"

const Order = ({order}) => {
    const dueDate = convertDate(order.dueDate)
    
    const orderUrl = "/orders/" + order.id
    return (
        <Link className={"order"} to={orderUrl}> 
            <p>Order No: {order.id}</p>
            <p>Client: {order.client} </p>
            <p>Priority: {order.priority}</p>
            <p>Due on: {dueDate}</p>
        </Link>
    )

}

const convertDate = (javaDate) => {
    let dateArray = javaDate.split("T")
    let newDate = dateArray[0]
    return newDate
}

export default Order