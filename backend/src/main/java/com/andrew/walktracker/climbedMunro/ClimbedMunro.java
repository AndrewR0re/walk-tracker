package com.andrew.walktracker.climbedMunro;

import com.andrew.walktracker.munro.Munro;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class ClimbedMunro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String climbDate;

    @ManyToOne
    @JoinColumn(name = "munro_id")
    private Munro munro;
}
