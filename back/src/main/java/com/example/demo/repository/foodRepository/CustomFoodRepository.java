package com.example.demo.repository.foodRepository;

import java.util.List;

import com.example.demo.model.Food;

public interface CustomFoodRepository {
    boolean saveFood(Food food);
    List<Food> getAllFoods();
 }