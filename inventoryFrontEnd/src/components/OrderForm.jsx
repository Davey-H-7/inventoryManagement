import { useState } from "react"


const OrderForm = ({handlePost}) => {
  
const [stateOrder, setStateOrder] = useState(
    {
        client: "",
        dueDate: "",
    })

    const handleChange = function(event) {
      let propertyName = event.target.name;
      let copiedOrder = {...stateOrder};
      copiedOrder[propertyName] = event.target.value;
      setStateOrder(copiedOrder)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handlePost(stateOrder);
    }

return (
    <div className="orderForm">
        <form onSubmit ={handleSubmit}>
            <input type = "text" placeholder = "Name of Client" name = "client" onChange={handleChange} value = {stateOrder.client}/>
            <input type = "date" name = "dueDate" onChange={handleChange} value = {stateOrder.dueDate}/>
            <button type = "submit"> Submit </button>
        </form>
        <button onClick = {() => window.location ='/orders'} >Cancel</button>
    </div>
)
}
export default OrderForm