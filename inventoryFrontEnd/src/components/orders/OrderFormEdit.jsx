import { useState } from "react"


const OrderFormEdit = ({handleUpdate, currentOrder}) => {
  
const [stateOrder, setStateOrder] = useState(
    {
        id: currentOrder.id,
        client: currentOrder.client,
        dueDate: currentOrder.dueDate,
        items: currentOrder.items
    })

    const handleChange = function(event) {
      let propertyName = event.target.name;
      let copiedOrder = {...stateOrder};
      copiedOrder[propertyName] = event.target.value;
      setStateOrder(copiedOrder)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleUpdate(stateOrder);
    }

return (
    <div className="newOrder">
        <h1>New Order Details</h1>
        <form className="newOrderForm" onSubmit ={handleSubmit}>
            <input type = "text" placeholder = "Name of Client" name = "client" onChange={handleChange} value = {stateOrder.client}/>
            <h3> To be shipped by: </h3>
            <input type = "date" name = "dueDate" onChange={handleChange} value = {stateOrder.dueDate}/>
            <button type = "submit"> Submit </button>
            <button onClick = {() => window.location ='/orders'} >Cancel</button>
        </form>
        
    </div>
)
}
export default OrderFormEdit