import { useEffect, useState } from 'react';
import Request from '../helpers/request';
import { Routes, Route } from 'react-router-dom';
import OrderContainer from './OrderContainer';
import LandingContainer from './LandingContainer';
import PartContainer from './PartContainer';
import NotFound from '../components/landing/NotFound';
import Header from '../components/landing/Header';
import "../styling/main/MainContainer.css";
import AboutContainer from './AboutContainer';

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
          <Header/>
          <Routes>
            <Route path ="/" element ={<LandingContainer/>}/>
            <Route path ="/about" element ={<AboutContainer/>}/>
            <Route path ="/orders/*" element = {<OrderContainer orders = {orders} getById = {getById} parts ={parts}/>} />
            <Route path ="/parts/*" element = {<PartContainer parts = {parts} items = {items} getById = {getById}/>}/>
            <Route path = "*" element ={<NotFound/>}></Route>
          </Routes>
        </div>
    )
  
}

export default MainContainer;