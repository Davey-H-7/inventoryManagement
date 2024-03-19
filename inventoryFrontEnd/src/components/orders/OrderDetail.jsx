

const OrderDetail = ({order, handleDelete}) => {

    const detailItems = order.items.map((item) => {
      return <li key = {item.id}> {item.model} {item.status}</li>
    })
  

    return(
        <div className="detail">
            <h1>Order Number: {order.id}</h1>
            <h2>Client: {order.client}</h2>
            <h3>Due on: {order.dueDate}</h3>
            <h3> Items in order:</h3>
            <ul>
                {detailItems}
            </ul>
            <button onClick = {() => handleDelete(order)}>Delete order</button>
        </div>
        
    )

}

export default OrderDetail