import OrderList from "../components/orders/OrderList"
import OrderForm from "../components/orders/OrderForm"
import OrderDetail from "../components/orders/OrderDetail"
import '../styling//orders/OrderContainer.css'
import {Routes, Route, useParams} from "react-router-dom"




const OrderContainer = ({orders, getById, parts}) => {

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
        if(foundOrder){
            return <OrderDetail order = {foundOrder} handleDelete ={handleDelete} parts = {parts}/>
        }
        // else{window.location ="/orders"}
    }

    const handleDelete = (order) => {
        fetch("/api/orders/" + order.id, {
          method: "DELETE"
        }
        )
        window.location ="/orders"
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