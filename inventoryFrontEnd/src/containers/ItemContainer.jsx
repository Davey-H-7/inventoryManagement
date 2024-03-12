import ItemForm from "../components/ItemForm.jsx"
import ItemList from "../components/ItemList.jsx"
import ItemDetail from "../components/ItemDetail.jsx"
import { Routes, Route } from "react-router-dom"




const ItemContainer = ({items, orders, refresh}) => {

    const handlePost = (item) =>{
        console.log("handlePost triggered");
        fetch("/api/items", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        })
        .then(() => refresh())
    }

return(
    <div className="itemContainer">
        <Routes>
            <Route path="/" element = {<ItemList items ={items}/>}/>
            <Route path ="/new" element = {<ItemForm handlePost ={handlePost} orders ={orders}/> }/>
            <Route path ="/:id" element = {<ItemDetail/>}/>
        </Routes>

    </div>)
}


export default ItemContainer