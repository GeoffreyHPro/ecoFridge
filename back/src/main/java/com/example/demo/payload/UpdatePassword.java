package com.example.demo.payload;

import lombok.Data;

@Data
public class UpdatePassword {
    private String password;
    private String newPassword;
}