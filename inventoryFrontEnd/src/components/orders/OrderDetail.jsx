

const OrderDetail = ({order}) => {

    const detailItems = order.items.map((item) => {
      return <li key = {item.id}> {item.model} {item.status}</li>
    })
  

    return(
        <div className="detail">
            <h1>Order Number: {order.id}</h1>
            <h2>Client: {order.client}</h2>
            <h3>Due on: {order.dueDate}</h3>
            <ul>
                {detailItems}
            </ul>
        </div>
        
    )

}

export default OrderDetail