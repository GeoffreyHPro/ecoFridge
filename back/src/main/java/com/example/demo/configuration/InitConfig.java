package com.example.demo.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.example.demo.model.Food;
import com.example.demo.model.User;
import com.example.demo.service.FoodService;
import com.example.demo.service.UserService;

@Component
public class InitConfig implements CommandLineRunner {

    private UserService userService;

    private FoodService foodService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public InitConfig(UserService userService, FoodService foodService) {
        this.userService = userService;
        this.foodService = foodService;
    }

    @Override
    public void run(String... args) throws Exception {
        //userService.save(new User("admin@admin.com", passwordEncoder.encode("password")));
        //foodService.save(new Food("1502"));
    }

}