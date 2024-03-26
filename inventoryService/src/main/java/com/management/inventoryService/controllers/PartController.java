package com.management.inventoryService.controllers;


import com.management.inventoryService.models.Part;
import com.management.inventoryService.repositories.PartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PartController {

    @Autowired
    PartRepository partRepository;

    @GetMapping(value ="/parts")
    public ResponseEntity<List<Part>> getAllParts(){
        return new ResponseEntity<>(partRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value ="/parts/{id}")
    public ResponseEntity getPart(@PathVariable Long id){
        return new ResponseEntity<>(partRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value ="/parts")
    public ResponseEntity<Part> postPart(@RequestBody Part part){
        partRepository.save(part);
        return new ResponseEntity<>(part, HttpStatus.OK);
    }

    @DeleteMapping(value ="/parts/{id}")
    public ResponseEntity deletePart(@PathVariable Long id){
        partRepository.deleteById(id);
        return new ResponseEntity<>(partRepository.findAll(), HttpStatus.OK);
    }

    @PutMapping(value ="/parts/{id}")
    public ResponseEntity updatePart(@PathVariable Long id, @RequestBody Part newPart){
        Part updatePart = partRepository.findById(id)
                .orElseThrow();

        updatePart.setModel(newPart.getModel());
        updatePart.setDescription(newPart.getDescription());
        partRepository.save(updatePart);

        return new ResponseEntity<>(updatePart, HttpStatus.OK);
    }
}
