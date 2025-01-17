package com.example.demo.controller;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.FoodBatchDTO;
import com.example.demo.model.FoodBatch;
import com.example.demo.payload.FoodBatchRequest;
import com.example.demo.reponses.ListResponse;
import com.example.demo.reponses.payload.MessagePayload;
import com.example.demo.service.FoodBatchService;
import com.example.demo.service.FoodMapper;

import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;

@RestController
@RequestMapping(path = "/foodbatch")
@SecurityRequirement(name = "Authorization")
@Api(tags = "foodbatch", description = "Endpoint")
public class FoodBatchesController {

    @Autowired
    private FoodBatchService foodBatchService;

    @Autowired
    FoodMapper foodMapper;

    @Operation(summary = "Add new foodbatch", description = "")
    @PostMapping("/{bareCode}")
    public ResponseEntity<MessagePayload> addFoodBatch(Principal principal, @PathVariable("bareCode") String bareCode,
            @RequestBody FoodBatchRequest foodBatchRequest) {
        try {
            foodBatchService.addFoodBatch(bareCode, foodBatchRequest, principal.getName());
            return ResponseEntity.status(200).body(new MessagePayload("foodBatch added"));
        } catch (Exception e) {
            return ResponseEntity.status(409).body(new MessagePayload("Food not found"));
        }
    }

    @Operation(summary = "Get all Foodbatches", description = "")
    @GetMapping("/expired")
    public ResponseEntity getExpiredFoodBatch(Principal principal) {
        List<FoodBatch> foodbatches = foodBatchService.getExpiredFoodBatches(principal.getName());
        List<FoodBatchDTO> foodbatchesDTO = foodbatches.stream().map(foodMapper::toFoodBatchDTO)
                .collect(Collectors.toList());
        ListResponse foodResponse = new ListResponse(foodbatchesDTO);
        return ResponseEntity.status(200).body(foodResponse);
    }

    @Operation(summary = "Get all Foodbatches", description = "")
    @GetMapping("/soonExpired")
    public ResponseEntity getSoonExpiredFoodBatch(Principal principal) {
        List<FoodBatch> foodbatches = foodBatchService.getSoonExpiredFoodBatches(principal.getName());
        List<FoodBatchDTO> foodbatchesDTO = foodbatches.stream().map(foodMapper::toFoodBatchDTO)
                .collect(Collectors.toList());
        ListResponse foodResponse = new ListResponse(foodbatchesDTO);
        return ResponseEntity.status(200).body(foodResponse);
    }

    @Operation(summary = "Get all Foodbatches with bareCode", description = "")
    @GetMapping("/{bareCode}")
    public ResponseEntity<?> getFoodBatchWithBareCode(Principal principal, @PathVariable("bareCode") String bareCode) {
        List<FoodBatch> foodbatches = foodBatchService.getFoodBatchWithBareCode(bareCode, principal.getName());
        return ResponseEntity.status(200).body(foodbatches);
    }

    @Operation(summary = "Get all Foodbatches with bareCode", description = "")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "FoodBatch is correctly getting", content = @Content(mediaType = "application/json", schema = @Schema(implementation = FoodBatchDTO.class))),
            @ApiResponse(responseCode = "404", description = "FoodBatch with this id doesn't exist", content = @Content(mediaType = "application/json", schema = @Schema(implementation = MessagePayload.class))),
    })
    @GetMapping("/id/{idFoodbatch}")
    public ResponseEntity<?> getFoodBatch(@PathVariable("idFoodbatch") String idFoodbatch) {
        try {
            FoodBatch foodbatch = foodBatchService.getFoodBatch(Integer.parseInt(idFoodbatch));
            return ResponseEntity.status(200).body(foodMapper.toFoodBatchDTO(foodbatch));
        } catch (Exception e) {
            return ResponseEntity.status(404).body(new MessagePayload("This foodbatch is not found"));
        }
    }
}
