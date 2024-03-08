import React from "react"


const Order = ({order}) => {
    let dateArray = order.dueDate.split("T")
    let dueDate = dateArray[0]
    

    return (
        <li className="order"> 
            <p>Order No: {order.id}</p>
            <p>Client: {order.client} </p>
            <p>Priority: {order.priority}</p>
            <p>Due on: {dueDate}</p>
        </li>
    )

}

export default Order