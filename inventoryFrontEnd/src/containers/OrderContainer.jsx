import OrderList from "../components/OrderList"
import OrderForm from "../components/OrderForm"
import '../styling/OrderContainer.css'
import { useState } from "react"




const OrderContainer = ({orders, refresh}) => {


    const [makeOrder, setMakeOrder] = useState(false)
  

    const makeOrderSettoTrue = () => {
      setMakeOrder(true)
      console.log(makeOrder);
    }

    const makeOrderSettoFalse = () => {
        setMakeOrder(false)
        console.log(makeOrder)
      }

    const handlePost = (order) =>{
        console.log("handlePost triggered");
        fetch("/api/orders", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(order)
        })
        .then(() => refresh())
        .then(() => makeOrderSettoFalse())
    }

return(
    <div className="orderContainer">
       {makeOrder? <OrderForm setFalse = {makeOrderSettoFalse} handlePost ={handlePost}/> : <OrderList orders ={orders} setTrue = {makeOrderSettoTrue}/>}
    </div>)}


export default OrderContainer