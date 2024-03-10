import OrderList from "../components/OrderList"
import OrderForm from "../components/OrderForm"
import '../styling/OrderContainer.css'
import { useState } from "react"



const OrderContainer = ({orders}) => {

    const [makeOrder, setMakeOrder] = useState(false)
  

    const makeOrderSettoTrue = () => {
      setMakeOrder(true)
      console.log(makeOrder);
    }

    const makeOrderSettoFalse = () => {
        setMakeOrder(false)
        console.log(makeOrder)
      }

return(
    <div className="orderContainer">
       {makeOrder? <OrderForm setFalse = {makeOrderSettoFalse}/> : <OrderList orders ={orders} setTrue = {makeOrderSettoTrue}/>}
    </div>)}


export default OrderContainer