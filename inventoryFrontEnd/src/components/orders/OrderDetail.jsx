import ItemForm from "../items/ItemForm";


const OrderDetail = ({order, handleDelete, parts, handlePost}) => {

    const detailItems = order.items.map((item) => {
      return <li key = {item.id}> {item.part.model} {item.status}</li>
    })

    const orderCompletion = statusCheck(order.items);
  

    return(
        <div className="detail">
            <div className="detailInfo">
                <h1>Order Number: {order.id}</h1>
                <h2>Client: {order.client}</h2>
                <h3>Due on: {order.dueDate}</h3>
                {orderCompletion? <h3>Order Ready to Ship</h3>: <h3>Order in Progress</h3>}
            </div>
            <ul className="detailItemList">
                <h3> Items in order:</h3>
                {detailItems}
            </ul>
            <form>
                <button onClick={() => console.log("button clicked")}>Add to Order</button>
                <button onClick = {()=> window.location="/orders"}>Return to Orders</button>
                <button onClick = {() => handleDelete(order)}>Delete order</button>
            </form>
            <ItemForm order = {order} handlePost = {handlePost} parts = {parts}/>
        </div>
        
    )

}

const statusCheck = function(itemArray){
  
    const isOrderCompleted =itemArray.every((value) => value.status =="COMPLETE")

    return isOrderCompleted;
    };

export default OrderDetail