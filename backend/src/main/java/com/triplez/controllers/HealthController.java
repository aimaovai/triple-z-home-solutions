package com.triplez.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
public class HealthController {
    @GetMapping("/health")
    public String healthCheck() {
        return "Healthy";
    }
}
