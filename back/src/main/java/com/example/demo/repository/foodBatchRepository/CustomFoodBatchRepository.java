package com.example.demo.repository.foodBatchRepository;

import java.util.List;

import com.example.demo.model.FoodBatch;

public interface CustomFoodBatchRepository {
    void saveFoodBatch(FoodBatch foodBatch, String bareCode);
    List<FoodBatch> getFoodBatches(String bareCode);
}
