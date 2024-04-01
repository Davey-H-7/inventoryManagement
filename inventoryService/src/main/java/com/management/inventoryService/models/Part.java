package com.management.inventoryService.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.List;

import static jakarta.persistence.CascadeType.ALL;
@Entity
@Table(name ="parts")
public class Part implements Serializable {

    @Column(name="model")
    private String model;

    @Column(name = "description")
    private String description;

    @JsonIgnoreProperties("part")
    @OneToMany(cascade = ALL, mappedBy = "part")
    private List<Item> items;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Part(String model, String description) {
        this.model = model;
        this.description = description;
    }

    public Part() {
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
