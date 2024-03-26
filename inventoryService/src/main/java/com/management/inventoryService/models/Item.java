package com.management.inventoryService.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "items")
public class Item implements Serializable {

    @JsonIgnoreProperties("items")
    @ManyToOne
    @JoinColumn(name = "part_id")
    private Part part;

    @Column(name="quantity")
    private int quantity;

    @Column(name = "status")
    private Status status;

    @JsonIgnoreProperties("items")
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



    public Item(Part part, int quantity, Order order) {
        this.part = part;
        this.quantity = quantity;
        this.status = Status.NEW;
        this.order = order;
    }

    public Item() {
        this.status = Status.NEW;
    }

    public Part getPart() {
        return part;
    }

    public void setPart(Part part) {
        this.part = part;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
