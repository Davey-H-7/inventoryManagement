

const ItemDetail = ({item}) => {

    console.log(item);
  
    return(
        <div className="itemDetail">
        <h1> {item.model} {item.id}</h1>
        <h2>Belongs to order: {item.order.id}</h2>
        <h3>Quantity Required: {item.quantity}</h3>
        <h3>Status: {item.status}</h3>
        <p> {item.description}</p>

        </div>
    )
}

export default ItemDetail