import OrderList from "../components/orders/OrderList"
import OrderForm from "../components/orders/OrderForm"
import OrderDetail from "../components/orders/OrderDetail"
import OrderFormEdit from "../components/orders/OrderFormEdit"
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
    }

    const handleDelete = (order) => {
        fetch("/api/orders/" + order.id, {
          method: "DELETE"
        }
        )
        window.location ="/orders"
      }

      const handleUpdate = (order) =>{
        event.preventDefault()
        console.log(order);
        fetch("/api/orders/" + order.id, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(order)
        })
        .then(() => window.location ='/orders')
    }

    const OrderEditWrapper = () => {
        console.log("test");
        const {id}= useParams();
        const foundOrder = getById(id, orders);
        if(foundOrder){
            return <OrderFormEdit handleUpdate = {handleUpdate} currentOrder = {foundOrder}/>
        }
    }

return(
    <div className="orderContainer">
        <Routes>
            <Route path ="/" element ={<OrderList orders ={orders}/>}/>

            <Route path ="/new" element = {<OrderForm  handlePost ={handlePost}/>}/>

            <Route path ="/:id" element = {<OrderDetailWrapper/>}/>

            <Route path ="/:id/edit" element = {<OrderEditWrapper/>}/>
        </Routes>
    </div>
)   
}


export default OrderContainer