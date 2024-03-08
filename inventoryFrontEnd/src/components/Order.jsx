import React from "react"


const Order = ({order}) => {
    // const navigate = useNavigate()
    

    return (
        <li> 
            <p>Order No: {order.id} Client: {order.client} Status: {order.status}</p>
            <p> </p> 
        </li>
    )

}

export default Order