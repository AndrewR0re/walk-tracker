package com.andrew.walktracker;

import com.andrew.walktracker.climbedMunro.ClimbedMunro;
import com.andrew.walktracker.service.ClimbService;
import com.andrew.walktracker.walk.Walk;
import com.andrew.walktracker.service.WalkService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MainController {

    private final WalkService walkService;
    private final ClimbService climbService;

    public MainController(WalkService walkService, ClimbService munroService) {
        this.walkService = walkService;
        this.climbService = munroService;
    }

    @GetMapping("/walk")
    public List<Walk> getWalks() {
        return walkService.getAllWalks();
    }

    @GetMapping("/climbedMunro")
    public List<ClimbedMunro> getClimbedMunros() {
        return climbService.getAllClimbedMunros();
    }
}