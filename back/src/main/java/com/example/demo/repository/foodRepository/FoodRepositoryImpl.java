package com.example.demo.repository.foodRepository;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Food;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class FoodRepositoryImpl implements CustomFoodRepository {
    @PersistenceContext
    private EntityManager em;

    public FoodRepositoryImpl(EntityManager emParam) {
        this.em = emParam;
    }

    @Override
    public boolean saveFood(Food food) {
        this.em.persist(food);
        return true;
    }

    @Override
    public List<Food> getAllFoods() {
        return this.em.createQuery("SELECT f FROM Food f", Food.class).getResultList();
    }
}