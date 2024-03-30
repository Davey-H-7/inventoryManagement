import { useEffect, useState } from 'react';
import Request from '../helpers/request';
import { Routes, Route } from 'react-router-dom';
import OrderContainer from './OrderContainer';
import ItemContainer from './ItemContainer';
import LandingContainer from './LandingContainer';
import PartContainer from './PartContainer';

const MainContainer = () => {
    const request = new Request

    const [orders, setOrders] = useState([]);
    const [items, setItems] = useState([]);
    const [parts, setParts] = useState([]);
  

    useEffect(() => {
        console.log('Use effect triggered');
      const itemsPromise = request.get("/api/items")
      const ordersPromise = request.get("/api/orders")
      const partsPromise = request.get("/api/parts")

      Promise.all([itemsPromise, ordersPromise, partsPromise])
      .then((data) => {
        setItems(data[0])
        setOrders(data[1])
        setParts(data[2])
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
            <Route path ="/orders/*" element = {<OrderContainer orders = {orders} getById = {getById} parts ={parts}/>} />
            <Route path ="/items/*" element = {<ItemContainer items = {items} orders ={orders} getById = {getById}/>} />
            <Route path ="/parts/*" element = {<PartContainer parts = {parts} items = {items} getById = {getById}/>}/>
          </Routes>
        </div>
    )
  
}

export default MainContainer;