package com.andrew.walktracker.repository;

import com.andrew.walktracker.climbedMunro.ClimbedMunro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClimbedMunroRepository extends JpaRepository<ClimbedMunro, Long> {
}
