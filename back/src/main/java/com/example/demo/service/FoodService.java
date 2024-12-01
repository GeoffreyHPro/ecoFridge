package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Food;
import com.example.demo.repository.foodRepository.FoodRepositoryImpl;

@Service
public class FoodService {
    @Autowired
    private FoodRepositoryImpl foodRepositoryImpl;

    public List<Food> getFoods() {
        return foodRepositoryImpl.getAllFoods();
    }

    public void save(Food food) {
        foodRepositoryImpl.saveFood(food);
    }

}