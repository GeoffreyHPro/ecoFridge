package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.service.FoodService;
import com.example.demo.service.ImageService;

import org.springframework.core.io.Resource;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;

import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.websocket.server.PathParam;

@RestController
@RequestMapping("/image")
@SecurityRequirement(name = "Authorization")
@Api(tags = "Image", description = "Endpoint")
public class ImageController {

    @Value("${image.storage.path}")
    private String imageStoragePath;

    @Autowired
    private FoodService foodService;

    @Autowired
    private ImageService imageService;

    @GetMapping("/{filename}")
    public ResponseEntity<Resource> getImage(@PathVariable String filename) {
        if (isFile(imageStoragePath + "/" + filename)) {
            try {
                Resource file2 = new org.springframework.core.io.FileSystemResource(
                        Paths.get(imageStoragePath).resolve(filename).toFile());

                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_TYPE, "image/jpeg")
                        .body(file2);
            } catch (Exception e) {
                return ResponseEntity.status(203).build();
            }
        } else {
            System.out.println("Le fichier n'existe pas.");
            return ResponseEntity.status(203).build();
        }
    }

    @PostMapping(path = "/upload/{bareCode}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> uploadImage(@RequestParam(value = "file") MultipartFile file,
            @PathParam("bareCode") String bareCode) {

        if (file.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No one file has been uploaded");
        }
        try {
            imageService.saveFile(file, bareCode);
            return ResponseEntity.ok("Image saved");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erreur lors de l'upload de l'image");
        }
    }

    boolean isFile(String pathFile) {
        File file = new File(pathFile);
        return file.exists() && file.isFile();
    }

}
