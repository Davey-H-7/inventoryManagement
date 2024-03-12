import OrderList from "../components/orders/OrderList"
import OrderForm from "../components/orders/OrderForm"
import OrderDetail from "../components/orders/OrderDetail"
import '../styling/OrderContainer.css'
import {Routes, Route} from "react-router-dom"




const OrderContainer = ({orders}) => {

    const handlePost = (order) =>{
        console.log("handlePost triggered");
        fetch("/api/orders", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(order)
        })
        .then(() => window.location ='/orders')
    }

return(
    <div className="orderContainer">
        <Routes>
            <Route path ="/" element ={<OrderList orders ={orders}/>}/>

            <Route path ="/new" element = {<OrderForm  handlePost ={handlePost}/>}/>

            <Route path ="/:id" element = {<OrderDetail/>}/>
        </Routes>
    </div>
)   
}


export default OrderContainer