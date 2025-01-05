package com.example.demo.repository.foodBatchRepository;

import java.util.List;

import com.example.demo.model.FoodBatch;

public interface CustomFoodBatchRepository {
    void saveFoodBatch(FoodBatch foodBatch, String bareCode, String username) throws Exception;
    List<FoodBatch> getFoodBatches(String bareCode, String username);
}
