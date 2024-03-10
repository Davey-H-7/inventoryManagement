import { useState } from "react"


constOrderForm = () => {
  
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

return (
    <div className="orderForm">
        <input type = "text" placeholder = "Name of Client" name = "client" onChange={handleChange} value = {stateOrder.client}/>

    </div>
)
}