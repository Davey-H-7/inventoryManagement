package com.management.inventoryService.controllers;
import com.management.inventoryService.models.Order;
import com.management.inventoryService.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderController {

        @Autowired
        OrderRepository orderRepository;

        @GetMapping(value ="/orders")
        public ResponseEntity<List<Order>> getAllOrders(){
            return new ResponseEntity<>(orderRepository.findAll(), HttpStatus.OK);
        }

        @GetMapping(value ="/orders/{id}")
        public ResponseEntity getOrder(@PathVariable Long id){
            return new ResponseEntity<>(orderRepository.findById(id), HttpStatus.OK);
        }

        @PostMapping(value ="/orders")
        public ResponseEntity<Order> postOrder(@RequestBody Order order){
            orderRepository.save(order);
            return new ResponseEntity<>(order, HttpStatus.OK);
        }

        @DeleteMapping(value ="/orders/{id}")
        public ResponseEntity deleteOrder(@PathVariable Long id){
            orderRepository.deleteById(id);
            return new ResponseEntity<>(orderRepository.findAll(), HttpStatus.OK);
        }

        @PutMapping(value ="/orders/{id}")
        public ResponseEntity updateOrder(@PathVariable Long id, @RequestBody Order newOrder){
            Order updateOrder = orderRepository.findById(id)
                    .orElseThrow();

            updateOrder.setClient(newOrder.getClient());
            updateOrder.setDueDate(newOrder.getDueDate());
            updateOrder.setPriority(newOrder.getPriority());
            System.out.println(newOrder.getItems());
            updateOrder.setItems(newOrder.getItems());
            orderRepository.save(updateOrder);

            return new ResponseEntity<>(updateOrder, HttpStatus.OK);
        }
    }


