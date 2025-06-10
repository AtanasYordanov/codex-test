package com.dndmanager;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.dndmanager.DndCharacter;
import com.dndmanager.CharacterRepository;

@Configuration
public class CharacterInitializer {

    @Bean
    CommandLineRunner initData(CharacterRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.save(new DndCharacter("Artemis", 1));
            }
        };
    }
}
