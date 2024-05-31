import { useState } from "react";
import ItemForm from "../items/ItemForm";
import Item from "../items/Item";
import ItemFormEdit from "../items/ItemFormEdit";


const OrderDetail = ({order, handleDelete, parts}) => {


    const [addFormDisplay, setAddFormDisplay] = useState(false);
    const [foundItem, setFoundItem] = useState(false);

   const getItem = (item) => {
        console.log(item);
       setFoundItem(item)
   }

    const handleAddFormDisplay = () => {
        event.preventDefault()
        setAddFormDisplay(!addFormDisplay);
    }

    const handleItemDelete = ((item) => {
        fetch("/api/items/" + item.id, {
          method: "DELETE"
        }
        )
        window.location ="/orders/" + order.id
        })


    const ItemFormEditWrapper = () => {
        if (foundItem){
        return <ItemFormEdit order = {order} parts = {parts} currentItem = {foundItem}/>
    }}

    const detailItems = order.items.map((item) => {
      return <Item key = {item.id} item ={item} handleItemDelete={handleItemDelete} getItem = {getItem}/>
    })

    const orderCompletion = statusCheck(order.items);
  

    return(
        <div className="detail">
            <div className="detailInfo">
                <h1>Order Number: {order.id}</h1>
                <h2>Client: {order.client}</h2>
                <h3>Due on: {order.dueDate}</h3>
                {orderCompletion? <h3>Order Ready to Ship</h3>: <h3>Order in Progress</h3>}
                <button onClick = {()=> window.location="/orders"}>Return to Orders</button>
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
                <button onClick={() => handleAddFormDisplay()}>Add to Order</button>
                <button onClick = {() => handleDelete(order)}>Delete order</button>
                <button onClick = {() => window.location ='/orders/' + order.id + '/edit'}>Update order</button>
            </div>
            {addFormDisplay?<ItemForm order = {order} parts = {parts} handleAddFormDisplay={handleAddFormDisplay}/>:<br/>}
            {foundItem?<ItemFormEditWrapper/>:<br/>}
        </div>
        
    )

}

const statusCheck = function(itemArray){
  
    const isOrderCompleted =itemArray.every((value) => value.status =="COMPLETE")

    return isOrderCompleted;
    };

export default OrderDetail