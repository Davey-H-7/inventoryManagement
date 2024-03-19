

const ItemDetail = ({item, handleDelete}) => {
  
    return(
        <div className="itemDetail">
        <h1> {item.model} {item.id}</h1>
        <h2>Belongs to order: {item.order.id}</h2>
        <h3>Quantity Required: {item.quantity}</h3>
        <h3>Status: {item.status}</h3>
        <p> {item.description}</p>
        <button onClick={() => handleDelete(item)}> Delete Item </button>
        </div>
    )
}

export default ItemDetail