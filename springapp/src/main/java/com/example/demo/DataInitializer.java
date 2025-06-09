package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initData(MessageRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.save(new Message("Hello World"));
            }
        };
    }
}
