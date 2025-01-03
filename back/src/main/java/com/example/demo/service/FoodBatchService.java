package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.FoodBatch;
import com.example.demo.payload.FoodBatchRequest;
import com.example.demo.repository.foodBatchRepository.FoodBatchRepositoryImpl;

@Service
public class FoodBatchService {

    @Autowired
    private FoodBatchRepositoryImpl foodBatchRepositoryImpl;

    public void addFoodBatch(String bareCode, FoodBatchRequest foodBatchRequest) {
        FoodBatch foodBatch = new FoodBatch(foodBatchRequest.getQuantity(), foodBatchRequest.getExpirationDate());
        //foodBatch.set
        foodBatchRepositoryImpl.saveFoodBatch(foodBatch, bareCode);
    }

    public List<FoodBatch> getFoodBatch(String bareCode) {
        return foodBatchRepositoryImpl.getFoodBatches(bareCode);
    }

}