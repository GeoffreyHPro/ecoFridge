package com.example.demo.payload;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class FoodBatchRequest {
    private int quantity;
    private LocalDateTime expirationDate;

    public FoodBatchRequest(int quantity, LocalDateTime expirationDate) {
        this.quantity = quantity;
        this.expirationDate = expirationDate;
    }
}
