package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
    public ResponseEntity getFood() {

        return ResponseEntity.status(200).body("nothing");
    }

    @Operation(summary = "Add new food with bareCode", description = "")
    @PostMapping("/{bareCode}")
    public ResponseEntity addFood(@PathVariable("bareCode") String bareCode) {

        return ResponseEntity.status(200).body("confirmed");
    }
}
