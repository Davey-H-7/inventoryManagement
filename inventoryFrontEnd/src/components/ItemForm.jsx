import {useState} from 'react';

const ItemForm = ({handlePost, setFalse}) => {
  
    const [stateItem, setStateItem] = useState(
        {
            model: "",
            quantity: 0,
            description: ""
        })
    
        const handleChange = function(event) {
          let propertyName = event.target.name;
          let copiedItem = {...stateItem};
          copiedItem[propertyName] = event.target.value;
          setStateItem(copiedItem)
        }
    
        const handleSubmit = (event) => {
            event.preventDefault();
            handlePost(stateItem);
        }
    
    return (
        <div className="itemForm">
            <form onSubmit ={handleSubmit}>
                <input type = "text" placeholder = "Model Name/Number" name = "model" onChange={handleChange} value = {stateItem.model}/>
                <input type = "number" placeholder = "0" name = "quantity" onChange={handleChange} value = {stateItem.quantity}/>
                <input type = "text" placeholder = "Item Description" name = "description" onChange={handleChange} value = {stateItem.description}/>
                <button type = "submit"> Submit </button>
            </form>
            <button onClick = {setFalse} >Cancel</button>
        </div>
    )
}
    

export default ItemForm;