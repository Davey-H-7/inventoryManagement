package com.management.inventoryService.repositories;

import com.management.inventoryService.models.Part;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PartRepository extends JpaRepository<Part, Long> {
    
}
