package com.example.demo.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.FoodBatch;
import com.example.demo.payload.FoodBatchRequest;
import com.example.demo.service.FoodBatchService;

import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

@RestController
@RequestMapping(path = "/foodbatch")
@SecurityRequirement(name = "Authorization")
@Api(tags = "foodbatch", description = "Endpoint")
public class FoodBatchesController {

    @Autowired
    private FoodBatchService foodBatchService;

    @Operation(summary = "Add new foodbatch", description = "")
    @PostMapping("/{bareCode}")
    public ResponseEntity<?> addFoodBatch(Principal principal, @PathVariable("bareCode") String bareCode,
            FoodBatchRequest foodBatchRequest) {
        try {
            foodBatchService.addFoodBatch(bareCode, foodBatchRequest, principal.getName());
            return ResponseEntity.status(200).body("foodBatch added");
        } catch (Exception e) {
            return ResponseEntity.status(404).body("Food not found");
        }

    }

    @Operation(summary = "Get all Foodbatches", description = "")
    @GetMapping("/{bareCode}")
    public ResponseEntity<?> getFoodBatch(Principal principal, @PathVariable("bareCode") String bareCode) {
        List<FoodBatch> foodbatches = foodBatchService.getFoodBatch(bareCode, principal.getName());
        return ResponseEntity.status(200).body(foodbatches);
    }
}
