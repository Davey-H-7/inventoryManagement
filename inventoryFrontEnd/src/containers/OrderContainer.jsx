import OrderList from "../components/orders/OrderList"
import OrderForm from "../components/orders/OrderForm"
import OrderDetail from "../components/orders/OrderDetail"
import OrderFormEdit from "../components/orders/OrderFormEdit"
import '../styling//orders/OrderContainer.css'
import {Routes, Route, useParams} from "react-router-dom"
import OrderButtons from "../components/orders/OrderButtons"




const OrderContainer = ({orders, getById, parts, request}) => {

    const handlePost = (order) =>{
        console.log("handlePost triggered");
        fetch(request.baseURL + "/api/orders", {
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
            return <OrderDetail order = {foundOrder} handleDelete ={handleDelete} parts = {parts} request = {request}/>
        }
    }

    const handleDelete = (order) => {
        fetch(request.baseURL + "/api/orders/" + order.id, {
          method: "DELETE"
        }
        )
        window.location ="/orders"
      }

      const handleUpdate = (order) =>{
        event.preventDefault()
        fetch(request.baseURL + "/api/orders/" + order.id, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(order)
        })
        .then(() => window.location ='/orders')
    }

    const OrderEditWrapper = () => {
        const {id}= useParams();
        const foundOrder = getById(id, orders);
        if(foundOrder){
            return <OrderFormEdit handleUpdate = {handleUpdate} currentOrder = {foundOrder}/>
        }
    }

return(
    <div className="orderContainer">
        <OrderButtons/>
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