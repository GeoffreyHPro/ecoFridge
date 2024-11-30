package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "foods")
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idFood;

    private String bareCode;

    public Food() {

    }

    public Food(String bareCode) {
        this.bareCode = bareCode;
    }

    public String getBareCode() {
        return bareCode;
    }

    public void setBareCode(String bareCode) {
        this.bareCode = bareCode;
    }

    public int getIdFood() {
        return idFood;
    }

}
