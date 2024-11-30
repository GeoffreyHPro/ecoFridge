package com.example.demo.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "foodbatches")
public class FoodBatch {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idFoodBatch;

    private int quantity;

    private Date expirationDate;

    public FoodBatch() {

    }

    public FoodBatch(int quantity, Date expirationDate) {
        this.expirationDate = expirationDate;
        this.quantity = quantity;
    }

    public Date getExpirationDate() {
        return expirationDate;
    }

    public int getIdFoodBatch() {
        return idFoodBatch;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setExpirationDate(Date expirationDate) {
        this.expirationDate = expirationDate;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
