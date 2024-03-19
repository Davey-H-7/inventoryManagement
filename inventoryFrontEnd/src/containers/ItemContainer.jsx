import ItemForm from "../components/items/ItemForm.jsx"
import ItemList from "../components/items/ItemList.jsx"
import ItemDetail from "../components/items/ItemDetail.jsx"
import { Routes, Route, useParams } from "react-router-dom"
import '../styling/ItemContainer.css'




const ItemContainer = ({items, orders, getById}) => {

    const handlePost = (item) =>{
        console.log("handlePost triggered");
        fetch("/api/items", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        })
        .then(() => window.location ='/items')
    }

    const ItemDetailWrapper = () => {
     const {id} = useParams();
     const foundItem = getById(id,items)
     return <ItemDetail item = {foundItem}/>
    }

return(
    <div className="itemContainer">
        <Routes>
            <Route path="/" element = {<ItemList items ={items}/>}/>
            <Route path ="/new" element = {<ItemForm handlePost ={handlePost} orders ={orders}/> }/>
            <Route path ="/:id" element = {<ItemDetailWrapper/>}/>
        </Routes>

    </div>)
}


export default ItemContainer