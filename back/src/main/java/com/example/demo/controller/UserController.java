package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.payload.UpdatePassword;
import com.example.demo.reponses.UserResponse;
import com.example.demo.repository.userRepository.UserRepository;

import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/user")
@SecurityRequirement(name = "Authorization")
@Api(tags = "User", description = "Endpoint")
public class UserController {

    @Autowired
    private UserRepository userRepo;

    @GetMapping
    public ResponseEntity<UserResponse> getUsers(Authentication authentication) {
        User user = userRepo.findByEmail(authentication.getName());
        UserResponse r = new UserResponse(user.getUsername(), "bonjour");

        return ResponseEntity.status(200).body(r);
    }

    @PatchMapping
    public ResponseEntity<String> updateUserPassword(
        Authentication authentication,
        @RequestBody UpdatePassword updatePassword
        ) {
        User user = userRepo.findByEmail(authentication.getName());
        user.updatePassword(updatePassword.getNewPassword());
        return ResponseEntity.status(200).body("updated");
    }

}
