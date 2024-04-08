import { useState } from "react";
import ItemForm from "../items/ItemForm";
import Item from "../items/Item";


const OrderDetail = ({order, handleDelete, parts}) => {

   const [formDisplay, setFormDisplay] = useState(false);

    const handleFormDisplay = () => {
        event.preventDefault()
        console.log(formDisplay);
        setFormDisplay(!formDisplay);
    }

    const detailItems = order.items.map((item) => {
      return <Item key = {item.id} item ={item}/>
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
            <div className="detailItemList">
                <ul>
                    <li className="itemHeader">
                    <p><b>Model</b></p><p><b>Quantity</b></p><p><b>Status</b></p>
                    </li>
                    {detailItems}
                </ul>
            </div>
            <div>
                <button onClick={() => handleFormDisplay()}>Add to Order</button>
                <button onClick = {()=> window.location="/orders"}>Return to Orders</button>
                <button onClick = {() => handleDelete(order)}>Delete order</button>
            </div>
            {formDisplay?<ItemForm order = {order} parts = {parts} handleFormDisplay={handleFormDisplay}/>:<br/>}
        </div>
        
    )

}

const statusCheck = function(itemArray){
  
    const isOrderCompleted =itemArray.every((value) => value.status =="COMPLETE")

    return isOrderCompleted;
    };

export default OrderDetail