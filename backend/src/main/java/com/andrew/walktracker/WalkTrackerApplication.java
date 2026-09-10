package com.andrew.walktracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WalkTrackerApplication {
    

    //startup instructions
    // docker compose down -v: tears down docker is up
    // docker compose up -d: starts up docker and creates postgres database
    // run main method

	public static void main(String[] args) {

        SpringApplication.run(WalkTrackerApplication.class, args);

	}
}
