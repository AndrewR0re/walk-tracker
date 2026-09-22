package com.andrew.walktracker;

import com.andrew.walktracker.service.ClimbService;
import com.andrew.walktracker.service.WalkService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;

import static org.mockito.MockitoAnnotations.openMocks;

class MainControllerTest {
    private MainController mainController;

    @Mock
    private WalkService walkService;

    @Mock
    private ClimbService climbService;

    private AutoCloseable autoCloseable;

    @BeforeEach
    public void setUp() {
        autoCloseable = openMocks(this);
        mainController = new MainController(walkService, climbService);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void healthEndpoint_returnsInfoMessage() throws Exception {
        String result = mainController.health().getBody();
        assert result.equals("Walktracker API is up and running!");
    }
}
