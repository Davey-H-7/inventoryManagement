

package com.management.inventoryService.components;

import com.management.inventoryService.models.Item;
import com.management.inventoryService.models.Order;
import com.management.inventoryService.models.Part;
import com.management.inventoryService.repositories.ItemRepository;
import com.management.inventoryService.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import com.management.inventoryService.repositories.PartRepository;
import org.springframework.boot.ApplicationRunner;
import java.time.LocalDate;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;



@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    PartRepository partRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args){

        // creating orders

        LocalDate dueDate1 = LocalDate.of(2024, 6, 3);
        LocalDate dueDate2 = LocalDate.of(2024, 7, 12);
        LocalDate dueDate3 = LocalDate.of(2024, 9, 26);
        LocalDate dueDate4 = LocalDate.of(2025, 1, 8);
        LocalDate dueDate5 = LocalDate.of(2024, 11, 9);
        Order order1 = new Order("Building Boys", dueDate1);
        orderRepository.save(order1);
        Order order2 = new Order("Carz Carz Carz", dueDate2);
        orderRepository.save(order2);
        Order order3 = new Order("Factory Fitters Ltd", dueDate3);
        orderRepository.save(order3);
        Order order4 = new Order("Your best Client <3", dueDate4);
        orderRepository.save(order4);
        Order order5 = new Order("eFix", dueDate5);
        orderRepository.save(order5);


        // creating parts


        Part part1 = new Part("F001", "Pipe fitting for plumbing applications");
        partRepository.save(part1);

        Part part2 = new Part("GB001", "Transmission component for machinery");
        partRepository.save(part2);

        Part part3 = new Part("V001", "Control valve for fluid regulation");
        partRepository.save(part3);

        Part part4 = new Part("B001", "Mechanical bearing for rotating machinery");
        partRepository.save(part4);

        Part part5 = new Part("C001", "Electrical conduit for wire protection");
        partRepository.save(part5);

        Part part6 = new Part("GA001", "Sealing gasket for leak-proof connections");
        partRepository.save(part6);

        Part part7 = new Part("H001", "Flexible hose for fluid transfer");
        partRepository.save(part7);

        Part part8 = new Part("P001", "Steel pipe for industrial use");
        partRepository.save(part8);

        Part part9 = new Part("W002", "Wheel component for automobiles");
        partRepository.save(part9);

        Part part10 = new Part("F002", "Pipe fitting for plumbing applications");
        partRepository.save(part10);

        Part part11 = new Part("GB001", "Transmission component for machinery");
        partRepository.save(part11);

        Part part12 = new Part("V002", "Control valve for fluid regulation");
        partRepository.save(part12);

        Part part13 = new Part("GA002", "Sealing gasket for leak-proof connections");
        partRepository.save(part13);

        Part part14 = new Part("H002", "Flexible hose for fluid transfer");
        partRepository.save(part14);


        //creating items

        itemRepository.save(new Item(part3, 150, order2));
        itemRepository.save(new Item(part8, 700, order5));
        itemRepository.save(new Item(part5, 1200, order3));
        itemRepository.save(new Item(part1, 450, order4));
        itemRepository.save(new Item(part12, 800, order1));
        itemRepository.save(new Item(part7, 300, order2));
        itemRepository.save(new Item(part2, 1800, order4));
        itemRepository.save(new Item(part4, 50, order2));
        itemRepository.save(new Item(part9, 1000, order5));
        itemRepository.save(new Item(part6, 900, order3));
        itemRepository.save(new Item(part11, 600, order1));
        itemRepository.save(new Item(part10, 700, order4));
        itemRepository.save(new Item(part13, 250, order2));
        itemRepository.save(new Item(part8, 300, order4));
        itemRepository.save(new Item(part1, 100, order3));
        itemRepository.save(new Item(part5, 1600, order1));
        itemRepository.save(new Item(part4, 700, order5));
        itemRepository.save(new Item(part2, 800, order5));
        itemRepository.save(new Item(part3, 120, order2));
        itemRepository.save(new Item(part7, 950, order4));


    }
}
