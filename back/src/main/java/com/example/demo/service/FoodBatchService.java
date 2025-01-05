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

    public void addFoodBatch(String bareCode, FoodBatchRequest foodBatchRequest, String username) throws Exception{
        FoodBatch foodBatch = new FoodBatch(foodBatchRequest.getQuantity(), foodBatchRequest.getExpirationDate());
        foodBatchRepositoryImpl.saveFoodBatch(foodBatch, bareCode, username);
    }

    public List<FoodBatch> getFoodBatch(String username) {
        return foodBatchRepositoryImpl.getFoodBatches(username);
    }

    public List<FoodBatch> getFoodBatchWithBareCode(String bareCode, String username) {
        return foodBatchRepositoryImpl.getFoodBatchesWithBareCode(bareCode, username);
    }

}