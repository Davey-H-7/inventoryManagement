import {useState} from 'react';

const ItemForm = ({handlePost, orders}) => {
  
    const [stateItem, setStateItem] = useState(
        {
            model: "",
            quantity: 0,
            description: "",
            order: null
        })
    
        const handleChange = function(event) {
          let propertyName = event.target.name;
          let copiedItem = {...stateItem};
          copiedItem[propertyName] = event.target.value;
          setStateItem(copiedItem)
        }
    
        const handleSubmit = (event) => {
            event.preventDefault();
            if(stateItem.order != null){
                handlePost(stateItem);
            }
        }

        const orderOptions = orders.map((order, index) => {
          return <option key = {index} value ={index}>{order.id} {order.client}</option>
        })

        const handleOrder =function(event){
          const index = parseInt(event.target.value)
          const selectedOrder = orders[index]
          const newOrder = {
            "id":selectedOrder.id,
            "client":selectedOrder.client,
            "dueDate":selectedOrder.dueDate
          }
          let copiedItem = {...stateItem}
          copiedItem['order'] = newOrder
          setStateItem(copiedItem)
        }
    
    return (
        <div className="itemForm">
            <form onSubmit ={handleSubmit}>
                <input type = "text" placeholder = "Model Name/Number" name = "model" onChange={handleChange} value = {stateItem.model}/>
                <input type = "number" placeholder = "0" name = "quantity" onChange={handleChange} value = {stateItem.quantity}/>
                <input type = "text" placeholder = "Item Description" name = "description" onChange={handleChange} value = {stateItem.description}/>

                <select name = "order" onChange={handleOrder} defaultValue="select-order">
                    <option disabled value ="select-order">Select an Order</option>
                    {orderOptions}
                </select>
                {stateItem.order? <button type = "submit" > Submit </button>: <button disabled type = "submit" > Submit </button> }
                    
            </form>
            <button onClick = {() => window.location ='/items'} >Cancel</button>
        </div>
    )
}
    

export default ItemForm;