package com.example.demo.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class FoodTest {

    private Food food1;

    @BeforeEach
    public void setUp() {
        this.food1 = new Food("1502");
    }

    @Test
    public void testBareCodeId() {
        assertEquals(0, this.food1.getIdFood());
    }

    @Test
    public void testBareCodeChanged() {
        assertEquals("1502", this.food1.getBareCode());
        this.food1.setBareCode("000012");
        assertEquals("000012", this.food1.getBareCode());
    }

}
