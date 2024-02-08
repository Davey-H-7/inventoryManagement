package com.management.inventoryService.components;

import com.management.inventoryService.models.Item;
import com.management.inventoryService.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ItemRepository itemRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args){
        itemRepository.save(new Item("Pipe", 100, "Steel pipe for industrial use"));
        itemRepository.save(new Item("Wheel", 50, "Wheel component for automobiles"));
        itemRepository.save(new Item("Fitting", 200, "Pipe fitting for plumbing applications"));
        itemRepository.save(new Item("Gearbox", 20, "Transmission component for machinery"));
        itemRepository.save(new Item("Valve", 150, "Control valve for fluid regulation"));
        itemRepository.save(new Item("Bearing", 80, "Mechanical bearing for rotating machinery"));
        itemRepository.save(new Item("Conduit", 120, "Electrical conduit for wire protection"));
        itemRepository.save(new Item("Gasket", 300, "Sealing gasket for leak-proof connections"));
        itemRepository.save(new Item("Bracket", 70, "Support bracket for structural reinforcement"));
        itemRepository.save(new Item("Hose", 180, "Flexible hose for fluid transfer"));


    }
}
