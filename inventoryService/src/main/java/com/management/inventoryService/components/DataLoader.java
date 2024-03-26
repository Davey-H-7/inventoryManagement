

package com.management.inventoryService.components;

//import com.management.inventoryService.models.Item;
//import com.management.inventoryService.models.Order;
//import com.management.inventoryService.models.Status;
//import com.management.inventoryService.repositories.ItemRepository;
//import com.management.inventoryService.repositories.OrderRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.ApplicationArguments;
import com.management.inventoryService.repositories.ItemRepository;
import com.management.inventoryService.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
//import org.springframework.context.annotation.Profile;
//import org.springframework.stereotype.Component;
//
//import java.time.LocalDate;
//
//
//@Profile("!test")
//@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    OrderRepository orderRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args){
//        LocalDate dueDate1 = LocalDate.of(2024, 6, 3);
//        LocalDate dueDate2 = LocalDate.of(2024, 7, 12);
//        LocalDate dueDate3 = LocalDate.of(2024, 9, 26);
//        LocalDate dueDate4 = LocalDate.of(2025, 1, 8);
//        LocalDate dueDate5 = LocalDate.of(2024, 11, 9);
//        Order order1 = new Order("Building Boys", dueDate1);
//        orderRepository.save(order1);
//        Order order2 = new Order("Carz Carz Carz", dueDate2);
//        orderRepository.save(order2);
//        Order order3 = new Order("Factory Fitters Ltd", dueDate3);
//        orderRepository.save(order3);
//        Order order4 = new Order("Your best Client <3", dueDate4);
//        orderRepository.save(order4);
//        Order order5 = new Order("eFix", dueDate5);
//        orderRepository.save(order5);
//
//
//        itemRepository.save(new Item("P001", 100, "Steel pipe for industrial use",order1));
//        Item item2 =new Item("W001", 50, "Wheel component for automobiles", order2);
//        item2.setStatus(Status.COMPLETE);
//        itemRepository.save(item2);
//        itemRepository.save(new Item("F001", 200, "Pipe fitting for plumbing applications", order1));
//        itemRepository.save(new Item("GB001", 20, "Transmission component for machinery", order3));
//        itemRepository.save(new Item("V001", 150, "Control valve for fluid regulation", order3));
//        itemRepository.save(new Item("B001", 80, "Mechanical bearing for rotating machinery", order3));
//        itemRepository.save(new Item("C001", 120, "Electrical conduit for wire protection", order1));
//        itemRepository.save(new Item("GA001", 300, "Sealing gasket for leak-proof connections", order4));
//        itemRepository.save(new Item("B001", 70, "Support bracket for structural reinforcement", order1));
//        itemRepository.save(new Item("H001", 180, "Flexible hose for fluid transfer", order3));
//        itemRepository.save(new Item("P001", 600, "Steel pipe for industrial use",order5));
//        itemRepository.save(new Item("W002", 500, "Wheel component for automobiles", order5));
//        itemRepository.save(new Item("F002", 20, "Pipe fitting for plumbing applications", order4));
//        itemRepository.save(new Item("GB001", 45, "Transmission component for machinery", order4));
//        itemRepository.save(new Item("V002", 150, "Control valve for fluid regulation", order4));
//        itemRepository.save(new Item("B001", 80, "Mechanical bearing for rotating machinery", order3));
//        itemRepository.save(new Item("C001", 120, "Electrical conduit for wire protection", order1));
//        itemRepository.save(new Item("GA002", 300, "Sealing gasket for leak-proof connections", order5));
//        itemRepository.save(new Item("B001", 70, "Support bracket for structural reinforcement", order1));
//        itemRepository.save(new Item("H002", 180, "Flexible hose for fluid transfer", order3));


    }
}
