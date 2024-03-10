import OrderList from "../components/OrderList"
import '../styling/OrderContainer.css'



const OrderContainer = ({orders}) => {
  


return(
    <div className="orderContainer">
    <OrderList orders ={orders}/>
    </div>)}


export default OrderContainer