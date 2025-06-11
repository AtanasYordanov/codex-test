package com.dndmanager;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dndmanager.CharacterRepository;
import com.dndmanager.DndCharacter;

@RestController
public class CharacterController {

    private final CharacterRepository repository;

    public CharacterController(CharacterRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/characters")
    public List<DndCharacter> characters() {
        return repository.findAll();
    }
}
