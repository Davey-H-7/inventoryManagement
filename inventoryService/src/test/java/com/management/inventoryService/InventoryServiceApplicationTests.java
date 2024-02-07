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
		Item pipe = new Item("pipe", "p001");
		assertEquals("pipe", pipe.getName());
	}

	@Test
	public void createItemThenSave(){
		Item pipe = new Item("pipe", "p001");
		itemRepository.save(pipe);
	}

	@Test
	public void itemPropertiesCanBeSet(){
		Item pipe = new Item("pipe", "p001");
		pipe.setName("wheel");
		assertEquals("wheel", pipe.getName());
	}

}
