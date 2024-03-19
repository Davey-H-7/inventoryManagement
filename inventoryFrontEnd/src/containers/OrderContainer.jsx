import OrderList from "../components/orders/OrderList"
import OrderForm from "../components/orders/OrderForm"
import OrderDetail from "../components/orders/OrderDetail"
import '../styling/OrderContainer.css'
import {Routes, Route, useParams} from "react-router-dom"




const OrderContainer = ({orders, getById}) => {

    const handlePost = (order) =>{
        console.log("handlePost triggered");
        fetch("/api/orders", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(order)
        })
        .then(() => window.location ='/orders')
    }

    const OrderDetailWrapper = () => {
        const {id}= useParams();
        const foundOrder = getById(id, orders);
        return <OrderDetail order = {foundOrder} handleDelete ={handleDelete}/>
    }

    const handleDelete = (order) => {
        fetch("api/items")
        fetch("/api/orders/" + order.id, {
          method: "DELETE"
        })
        .then(window.location ="/orders")
      }

return(
    <div className="orderContainer">
        <Routes>
            <Route path ="/" element ={<OrderList orders ={orders}/>}/>

            <Route path ="/new" element = {<OrderForm  handlePost ={handlePost}/>}/>

            <Route path ="/:id" element = {<OrderDetailWrapper/>}/>
        </Routes>
    </div>
)   
}


export default OrderContainer