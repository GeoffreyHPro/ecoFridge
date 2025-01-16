package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.error.AlreadySavedError;
import com.example.demo.model.Food;
import com.example.demo.repository.foodRepository.FoodRepositoryImpl;

@Service
public class FoodService {
    @Autowired
    private FoodRepositoryImpl foodRepositoryImpl;

    public List<Food> getFoods(String username) {
        return foodRepositoryImpl.getAllFoods(username);
    }

    public void save(Food food) throws AlreadySavedError {
        Boolean saved = foodRepositoryImpl.saveFood(food);
        if( !saved ){
            throw new AlreadySavedError();
        }
        
    }

    public Food getFood(String bareCode){
        return foodRepositoryImpl.getFood(bareCode);
    }

    public void updateFoodImage(String bareCode, String image){
        foodRepositoryImpl.updateFoodImage(bareCode, image);
    }

    public void deleteFood(String bareCode){
        foodRepositoryImpl.deleteFood(bareCode);
    }

}
