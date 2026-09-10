package com.andrew.walktracker.munro;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Munro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private int altitudeMetres;
}
