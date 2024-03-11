import { useEffect, useState } from 'react';
import Request from '../helpers/request';
import { Routes, Route } from 'react-router-dom';
import OrderContainer from './OrderContainer';
import ItemContainer from './ItemContainer';

const MainContainer = () => {
    const request = new Request

    const [orders, setOrders] = useState([]);
    const [items, setItems] = useState([]);
    const [refreshTrigger, setRefreshTrigger] = useState(false)

    useEffect(() => {
        console.log('Use effect triggered');
      const itemsPromise = request.get("/api/items")
      const ordersPromise = request.get("/api/orders")

      Promise.all([itemsPromise, ordersPromise])
      .then((data) => {
        setItems(data[0])
        setOrders(data[1])
      })
    }, [refreshTrigger])

    const handleRefresh =() => {
      setRefreshTrigger(!refreshTrigger)
    }

    return(
        <div className='mainContainer'>
          <Routes>
            <Route path ="/orders/*" element = {<OrderContainer orders = {orders} refresh = {handleRefresh}/>} />
            <Route path ="/items/*" element = {<ItemContainer items = {items} orders ={orders} refresh = {handleRefresh}/>} />
          </Routes>
        </div>
    )
  
}

export default MainContainer;