import React, { useEffect, useState } from 'react';
import Request from '../helpers/request';
import OrderList from '../components/OrderList';

const MainContainer = () => {
    const request = new Request

    const [orders, setOrders] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log('Use effect triggered');
      const itemsPromise = request.get("/api/items")
      const ordersPromise = request.get("/api/orders")

      Promise.all([itemsPromise, ordersPromise])
      .then((data) => {
        setItems(data[0])
        setOrders(data[1])
      })
    }, [])

    return(
        <>
        <h1>Main Container</h1>
        <OrderList/>
        </>
    )
  
}

export default MainContainer;