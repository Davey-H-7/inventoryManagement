import {useState} from 'react';

const ItemFormEdit = ({order, parts, currentItem, request}) => {

    const handleItemUpdate = (item) =>{
        event.preventDefault()
        console.log(item);
        fetch(request.baseURL + "/api/items/" + item.id, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        })
        .then(window.location ='/orders/' + order.id)
    }
  
    const [stateItem, setStateItem] = useState(
        {
            id:currentItem.id,
            part:currentItem.part,
            quantity: currentItem.quantity,
            status:currentItem.status,
            order: order
        })
    
        const handleChange = function(event) {
          let propertyName = event.target.name;
          let copiedItem = {...stateItem};
          copiedItem[propertyName] = event.target.value;
          setStateItem(copiedItem)
        }
    
        const handleSubmit = (event) => {
            event.preventDefault();
            handleItemUpdate(stateItem);
        }

        const partOptions = parts.map((part, index) => {
          return <option key = {index} value ={index}>{part.model}</option>
        })

        const handlePart =function(event){
          const index = parseInt(event.target.value)
          const selectedPart = parts[index]
          const newPart = {
            "id":selectedPart.id,
            "model":selectedPart.model,
            "dueDate":selectedPart.dueDate
          }
          let copiedItem = {...stateItem}
          copiedItem['part'] = newPart
          setStateItem(copiedItem)
        }

        const handleStatus =function(event){
            let copiedItem = {...stateItem}
            copiedItem['status'] = event.target.value
            setStateItem(copiedItem)
          }
    
    return (

        <form className="newItemForm" onSubmit ={handleSubmit}>
            <select name = "part" onChange={handlePart} default value="select-part">
                <option disabled value ="select-part">Select a part</option>
                    {partOptions}
            </select>
            <div>
                <label name = "quantity">Quantity required: </label>
                <input type = "number" placeholder = {currentItem.quantity} name = "quantity" onChange={handleChange} value = {stateItem.quantity}/>
           </div>

           <select name = "status" onChange={handleStatus} default value="select-status">
                <option disabled value ="select-status">Select a status</option>
                <option value ="NEW">New</option>
                <option value ="MANUFACTURING">Manufacturing</option>
                <option value ="QA">QA</option>
                <option value ="COMPLETE">Complete</option>
            </select>

            <div className='buttons'>
            <button type = "submit" > Submit </button>
            <button onClick = {() => window.location ='/orders/' + order.id } >Cancel</button>
            </div>
        </form>
            
 
    )
}
    

export default ItemFormEdit;