package com.management.inventoryService;

import com.management.inventoryService.models.Item;
import com.management.inventoryService.models.Order;
import com.management.inventoryService.repositories.ItemRepository;
import com.management.inventoryService.repositories.OrderRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class InventoryServiceApplicationTests {

	@Autowired
	ItemRepository itemRepository;

	@Autowired
	OrderRepository orderRepository;


	@Test
	void contextLoads() {
	}

	@Test
	public void createOrder(){
		Date dueDate = new Date(2024, 05, 20);
		Order order = new Order("piper does piping", dueDate);
		assertEquals("piper does piping", order.getClient());
	}

	@Test
	public void createOrderThenSave(){
		Date dueDate = new Date(2024, 05, 20);
		Order order = new Order("piper does piping", dueDate);
		orderRepository.save(order);
	}

	@Test
	public void createItem(){
		Date dueDate = new Date(2024, 05, 20);
		Order order = new Order("piper does piping", dueDate);
		Item pipe = new Item("p001", 3, "10mm copper pipe", order);
		assertEquals("p001", pipe.getModel());
	}

	@Test
	public void createOrderAndItemThenSave(){
		Date dueDate = new Date(2024, 05, 20);
		Order order = new Order("piper does piping", dueDate);
		orderRepository.save(order);
		Item pipe = new Item("p001", 3, "10mm copper pipe", order);
		itemRepository.save(pipe);
	}

	@Test
	public void itemPropertiesCanBeSet(){
		Item pipe = new Item("p001", 3, "10mm copper pipe", null);
		pipe.setQuantity(4);
		assertEquals(4, pipe.getQuantity());
	}

}
