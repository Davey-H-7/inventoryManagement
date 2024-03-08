package com.management.inventoryService.components;

import com.management.inventoryService.models.Item;
import com.management.inventoryService.models.Order;
import com.management.inventoryService.repositories.ItemRepository;
import com.management.inventoryService.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.Date;


@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    OrderRepository orderRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args){
        Date dueDate1 = new Date(2024, 6, 3);
        Date dueDate2 = new Date(2024, 7, 12);
        Date dueDate3 = new Date(2024, 9, 26);
        Order order1 = new Order("Building Boys", dueDate1);
        orderRepository.save(order1);
        Order order2 = new Order("Car Cannibals", dueDate2);
        orderRepository.save(order2);
        Order order3 = new Order("Factory Friends", dueDate3);
        orderRepository.save(order3);


        itemRepository.save(new Item("Pipe", 100, "Steel pipe for industrial use",order1));
        itemRepository.save(new Item("Wheel", 50, "Wheel component for automobiles", order2));
        itemRepository.save(new Item("Fitting", 200, "Pipe fitting for plumbing applications", order1));
        itemRepository.save(new Item("Gearbox", 20, "Transmission component for machinery", order2));
        itemRepository.save(new Item("Valve", 150, "Control valve for fluid regulation", order3));
        itemRepository.save(new Item("Bearing", 80, "Mechanical bearing for rotating machinery", order3));
        itemRepository.save(new Item("Conduit", 120, "Electrical conduit for wire protection", order1));
        itemRepository.save(new Item("Gasket", 300, "Sealing gasket for leak-proof connections", order2));
        itemRepository.save(new Item("Bracket", 70, "Support bracket for structural reinforcement", order1));
        itemRepository.save(new Item("Hose", 180, "Flexible hose for fluid transfer", order2));


    }
}
