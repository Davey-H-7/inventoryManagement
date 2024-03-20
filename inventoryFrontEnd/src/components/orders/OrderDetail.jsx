

const OrderDetail = ({order, handleDelete}) => {

    const detailItems = order.items.map((item) => {
      return <li key = {item.id}> {item.model} {item.status}</li>
    })
  

    return(
        <div className="detail">
            <div className="detailInfo">
                <h1>Order Number: {order.id}</h1>
                <h2>Client: {order.client}</h2>
                <h3>Due on: {order.dueDate}</h3>
            </div>
            <ul className="detailItemList">
                <h3> Items in order:</h3>
                {detailItems}
            </ul>
            <form>
                <button onClick = {() => handleDelete(order)}>Delete order</button>
            </form>
        </div>
        
    )

}

export default OrderDetail