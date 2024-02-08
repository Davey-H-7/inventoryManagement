package com.management.inventoryService.models;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "items")
public class Item implements Serializable {


    private String model;

    private int quantity;

    private String description;



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Item(String model, int quantity, String description) {
        this.model = model;
        this.quantity = quantity;
        this.description = description;
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

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
