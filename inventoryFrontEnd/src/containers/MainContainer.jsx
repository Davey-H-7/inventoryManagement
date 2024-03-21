import { useEffect, useState } from 'react';
import Request from '../helpers/request';
import { Routes, Route } from 'react-router-dom';
import OrderContainer from './OrderContainer';
import ItemContainer from './ItemContainer';
import LandingContainer from './LandingContainer';

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

    const getById = (id,array) => {
      for (let object of array){
          if (object.id == id){
              return object;
          }
      }
  }
    return(
        <div className='mainContainer'>
          <Routes>
            <Route path ="/" element ={<LandingContainer/>}/>
            <Route path ="/orders/*" element = {<OrderContainer orders = {orders} getById = {getById}/>} />
            <Route path ="/items/*" element = {<ItemContainer items = {items} orders ={orders} getById = {getById}/>} />
          </Routes>
        </div>
    )
  
}

export default MainContainer;