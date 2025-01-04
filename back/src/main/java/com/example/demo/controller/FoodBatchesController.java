package com.example.demo.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<?> addFood(Principal principal, @PathVariable("bareCode") String bareCode, FoodBatchRequest foodBatchRequest) {
        System.out.println(principal.getName());
        foodBatchService.addFoodBatch(bareCode, foodBatchRequest, principal.getName());
        return ResponseEntity.status(200).body("");
    }
}
