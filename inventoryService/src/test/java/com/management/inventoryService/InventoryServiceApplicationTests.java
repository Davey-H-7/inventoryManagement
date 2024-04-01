package com.management.inventoryService;

import com.management.inventoryService.models.Item;
import com.management.inventoryService.models.Order;
import com.management.inventoryService.models.Part;
import com.management.inventoryService.repositories.ItemRepository;
import com.management.inventoryService.repositories.OrderRepository;
import com.management.inventoryService.repositories.PartRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class InventoryServiceApplicationTests {

	@Autowired
	ItemRepository itemRepository;

	@Autowired
	OrderRepository orderRepository;

	@Autowired
	PartRepository partRepository;
	@Test
	void contextLoads() {
	}

	@Test
	public void createOrder(){
		LocalDate dueDate = LocalDate.of(2024, 05, 20);
		Order order = new Order("piper does piping", dueDate);
		assertEquals("piper does piping", order.getClient());
	}

	@Test
	public void createOrderThenSave(){
		LocalDate dueDate = LocalDate.of(2024, 05, 20);
		Order order = new Order("piper does piping", dueDate);
		orderRepository.save(order);
	}

	@Test
	public void createPart(){
		Part pipe = new Part("PC10", "10mm copper pipe");
		assertEquals("PC10", pipe.getModel());
	}

	@Test
	public void createItem(){
		LocalDate dueDate = LocalDate.of(2024, 05, 20);
		Order order = new Order("piper does piping", dueDate);
		Part pipe = new Part("PC10", "10mm copper pipe");
		Item pipeItem = new Item(pipe, 3, order);
		assertEquals(3, pipeItem.getQuantity());
	}

	@Test
	public void createOrderAndPartAndItemThenSave(){
		LocalDate dueDate = LocalDate.of(2024, 05, 20);
		Order order = new Order("piper does piping", dueDate);
		orderRepository.save(order);
		Part pipe = new Part("PC10", "10mm copper pipe");
		partRepository.save(pipe);
		Item item = new Item(pipe, 5, order);
		itemRepository.save(item);
	}

	@Test
	public void itemPropertiesCanBeSet(){
		Item pipeItem = new Item(null, 3, null);
		pipeItem.setQuantity(4);
		assertEquals(4, pipeItem.getQuantity());
	}

}
