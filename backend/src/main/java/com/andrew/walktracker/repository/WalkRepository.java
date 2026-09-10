package com.andrew.walktracker.repository;

import com.andrew.walktracker.walk.Walk;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WalkRepository extends JpaRepository<Walk, Long> {
}
