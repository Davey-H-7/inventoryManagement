import ItemForm from "../components/ItemForm.jsx"
import ItemList from "../components/ItemList.jsx"
import { useState } from "react"



const ItemContainer = ({items, orders, refresh}) => {
  
    const [makeItem, setMakeItem] = useState(false)
  

    const makeItemSettoTrue = () => {
      setMakeItem(true)
      console.log(makeItem);
    }

    const makeItemSettoFalse = () => {
        setMakeItem(false)
        console.log(makeItem)
      }

    const handlePost = (item) =>{
        console.log("handlePost triggered");
        fetch("/api/items", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        })
        .then(() => refresh())
        .then(() => makeItemSettoFalse())
    }

return(
    <div className="itemContainer">
       {makeItem? <ItemForm setFalse = {makeItemSettoFalse} handlePost ={handlePost} orders ={orders}/> : <ItemList items ={items} setTrue = {makeItemSettoTrue}/>}
    </div>)
}


export default ItemContainer