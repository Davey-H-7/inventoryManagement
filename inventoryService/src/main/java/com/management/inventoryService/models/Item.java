package com.management.inventoryService.models;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "items")
public class Item implements Serializable {

    @Column(name="model")
    private String model;

    @Column(name="quantity")
    private int quantity;

    @Column(name = "description")
    private String description;

    @Column(name = "status")
    private Status status;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Item(String model, int quantity, String description, Order order) {
        this.model = model;
        this.quantity = quantity;
        this.description = description;
        this.status = Status.NEW;
        this.order = order;
    }

    public Item() {
    }

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
