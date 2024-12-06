package com.example.demo.repository.foodRepository;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Food;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
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
        Food databaseFood = getFood(food.getBareCode());
        if (databaseFood == null) {
            this.em.persist(food);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public List<Food> getAllFoods() {
        return this.em.createQuery("SELECT f FROM Food f", Food.class).getResultList();
    }

    @Override
    public Food getFood(String bareCode) {
        try {
            String request = "SELECT f FROM Food f WHERE f.bareCode = :bareCode";
            TypedQuery<Food> query = em.createQuery(request, Food.class);
            query.setParameter("bareCode", bareCode);
            return query.getSingleResult();
        } catch (Exception e) {
            return null;
        }
    }
}