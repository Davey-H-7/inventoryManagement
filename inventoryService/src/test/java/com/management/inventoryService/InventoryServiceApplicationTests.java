package com.management.inventoryService;

import com.management.inventoryService.models.Item;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class InventoryServiceApplicationTests {

//	@Test
//	void contextLoads() {
//	}

	@Test
	public void createItem(){
		Item pipe = new Item("pipe", "p001");
		assertEquals("pipe", pipe.getName());
	}

	@Test
	public void itemPropertiesCanBeSet(){
		Item pipe = new Item("pipe", "p001");
		pipe.setName("wheel");
		assertEquals("wheel", pipe.getName());
	}

}
