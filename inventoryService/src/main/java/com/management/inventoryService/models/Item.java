package com.management.inventoryService.models;

import jakarta.persistence.*;

//@Entity
//@Table(name = "items")
public class Item {

    private String name;

    private String model;

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;

    public Item(String name, String model) {
        this.name = name;
        this.model = model;

    }

    public Item() {
    }


//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }
}
