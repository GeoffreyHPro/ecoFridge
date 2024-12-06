package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Food;
import com.example.demo.payload.FoodRequest;
import com.example.demo.service.FoodService;

import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

@RestController
@RequestMapping(path = "/food")
@SecurityRequirement(name = "Authorization")
@Api(tags = "Food", description = "Endpoint")
public class FoodController {

    @Autowired
    private FoodService foodService;

    @Operation(summary = "Get all Foods from your fridge", description = "You can get all the foods you have saved in your fridge")
    @GetMapping
    public ResponseEntity getFood() {

        return ResponseEntity.status(200).body(foodService.getFoods());
    }

    @Operation(summary = "Get all Foods from your fridge", description = "You can get all the foods you have saved in your fridge")
    @GetMapping("/{bareCode}")
    public ResponseEntity getFoodWithBareCode(@PathVariable("bareCode") String bareCode) {

        return ResponseEntity.status(200).body(foodService.getFood(bareCode));
    }

    @Operation(summary = "Add new food with bareCode", description = "Give a bareCode of the food to add it")
    @PostMapping("/{bareCode}")
    public ResponseEntity addFood(@PathVariable("bareCode") String bareCode) {

        foodService.save(new Food(bareCode));
        return ResponseEntity.status(200).body("confirmed");
    }

    @Operation(summary = "Add new food with bareCode", description = "Give a bareCode of the food to add it")
    @PutMapping("/{bareCode}")
    public ResponseEntity updateFood(@PathVariable("bareCode") String bareCode, FoodRequest foodRequest) {

        Food food = foodService.getFood(bareCode);
        return ResponseEntity.status(200).body("confirmed");
    }
}
