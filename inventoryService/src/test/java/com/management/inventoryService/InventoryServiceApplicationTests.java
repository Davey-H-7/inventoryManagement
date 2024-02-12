package com.management.inventoryService;

import com.management.inventoryService.models.Item;
import com.management.inventoryService.models.Order;
import com.management.inventoryService.repositories.ItemRepository;
import com.management.inventoryService.repositories.OrderRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

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
		Order order = new Order("piper does piping");
		assertEquals("piper does piping", order.getClient());
	}

	@Test
	public void createOrderThenSave(){
		Order order = new Order("piper does piping");
		orderRepository.save(order);
	}

	@Test
	public void createItem(){
		Order order = new Order("piper does piping");
		Item pipe = new Item("p001", 3, "10mm copper pipe", order);
		assertEquals("p001", pipe.getModel());
	}

	@Test
	public void createItemThenSave(){
		Order order = new Order("piper does piping");
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
