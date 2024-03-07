

const Order = ({order}) => {

    return (
        <li> 
            <p>Order No: {order.id} Client: {order.client}</p>
            <p> </p> 
        </li>
    )

}

export default Order