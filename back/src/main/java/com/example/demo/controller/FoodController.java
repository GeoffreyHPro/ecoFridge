package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

@RestController
@RequestMapping(path = "/food")
@SecurityRequirement(name = "Authorization")
@Api(tags = "Food", description = "Endpoint")
public class FoodController {

    @Operation(summary = "Get all Foods from your fridge", description = "You can get all the foods you have saved in your fridge")
    @GetMapping
    public ResponseEntity authenticationUser() {

        return ResponseEntity.status(200).body("nothing");
    }
}
