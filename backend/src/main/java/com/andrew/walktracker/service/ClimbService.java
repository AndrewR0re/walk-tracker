package com.andrew.walktracker.service;

import com.andrew.walktracker.climbedMunro.ClimbedMunro;
import com.andrew.walktracker.repository.ClimbedMunroRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClimbService {

    private final ClimbedMunroRepository climbedMunroRepository;

    public ClimbService(ClimbedMunroRepository climbedMunroRepository) {
        this.climbedMunroRepository = climbedMunroRepository;
    }

    public List<ClimbedMunro> getAllClimbedMunros() {
        return climbedMunroRepository.findAll();
    }

    public void deleteClimbedMunro(long id) {
        climbedMunroRepository.deleteById(id);
    }
}
