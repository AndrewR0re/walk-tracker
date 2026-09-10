package com.andrew.walktracker.walk;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Walk {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String walkDate;

    @ManyToOne
    @JoinColumn(name = "walk_route_id")
    private WalkRoute walkRoute;
}
