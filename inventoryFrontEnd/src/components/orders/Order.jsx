

const Order = ({order}) => {
    let dueDate = convertDate(order.dueDate)
    

    return (
        <li className="order"> 
            <p>Order No: {order.id}</p>
            <p>Client: {order.client} </p>
            <p>Priority: {order.priority}</p>
            <p>Due on: {dueDate}</p>
        </li>
    )

}

const convertDate = (javaDate) => {
    let dateArray = javaDate.split("T")
    let newDate = dateArray[0]
    return newDate
}

export default Order