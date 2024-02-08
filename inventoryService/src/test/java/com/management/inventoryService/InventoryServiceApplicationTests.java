package com.management.inventoryService;

import com.management.inventoryService.models.Item;
import com.management.inventoryService.repositories.ItemRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class InventoryServiceApplicationTests {

	@Autowired
	ItemRepository itemRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void createItem(){
		Item pipe = new Item("p001", 3, "10mm copper pipe");
		assertEquals("p001", pipe.getModel());
	}

	@Test
	public void createItemThenSave(){
		Item pipe = new Item("p001", 3, "10mm copper pipe");
		itemRepository.save(pipe);
	}

	@Test
	public void itemPropertiesCanBeSet(){
		Item pipe = new Item("p001", 3, "10mm copper pipe");
		pipe.setQuantity(4);
		assertEquals(4, pipe.getQuantity());
	}

}
