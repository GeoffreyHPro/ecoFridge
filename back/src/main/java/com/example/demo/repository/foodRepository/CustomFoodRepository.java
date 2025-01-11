package com.example.demo.repository.foodRepository;

import java.util.List;

import com.example.demo.model.Food;

public interface CustomFoodRepository {
    boolean saveFood(Food food);
    List<Food> getAllFoods(String username);
    Food getFood(String bareCode);
    void updateFoodImage(String bareCode, String image);
    void deleteFood(String bareCode);
 }