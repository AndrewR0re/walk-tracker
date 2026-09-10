package com.andrew.walktracker.service;

import com.andrew.walktracker.repository.WalkRepository;
import com.andrew.walktracker.walk.Walk;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WalkService {

    private final WalkRepository walkRepository;

    public WalkService(WalkRepository walkRepository) {
        this.walkRepository = walkRepository;
    }

    public List<Walk> getAllWalks() {
        return walkRepository.findAll();
    }
}
