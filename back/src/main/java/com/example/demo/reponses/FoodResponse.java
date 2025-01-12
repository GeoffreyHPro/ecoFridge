package com.example.demo.reponses;

import java.util.List;

import com.example.demo.model.Food;

import lombok.Data;

@Data
public class FoodResponse {
    private List<Food> data;

    public FoodResponse(List<Food> data){
        this.data = data;
    }
}
