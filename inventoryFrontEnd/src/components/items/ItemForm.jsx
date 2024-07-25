import {useState} from 'react';

const ItemForm = ({order, parts, handleAddFormDisplay, request}) => {



    const handleItemPost = (item) =>{
        event.preventDefault()
        console.log("handlePost triggered");
        fetch(request.baseURL + "/api/items", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        })
        .then(window.location ='/orders/' + order.id)
    }
  
    const [stateItem, setStateItem] = useState(
        {
            part:null,
            quantity: 0,
            status:"NEW",
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
            handleItemPost(stateItem);

            
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
    
    return (

        <form className="newItemForm" onSubmit ={handleSubmit}>
            <select name = "part" onChange={handlePart} defaultValue="select-part">
                <option disabled value ="select-part">Select a part</option>
                    {partOptions}
            </select>
            <div>
                <label name = "quantity">Quantity required: </label>
                <input type = "number" placeholder = "0" name = "quantity" onChange={handleChange} value = {stateItem.quantity}/>
           </div>
            <div className='buttons'>
            {stateItem.part? <button type = "submit" > Submit </button>: <button disabled type = "submit" > Submit </button> }
            <button onClick = {() => handleAddFormDisplay()} >Cancel</button>
            </div>
        </form>
            
 
    )
}
    

export default ItemForm;