package com.dndmanager;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dndmanager.DndCharacter;

public interface CharacterRepository extends JpaRepository<DndCharacter, Long> {
}
