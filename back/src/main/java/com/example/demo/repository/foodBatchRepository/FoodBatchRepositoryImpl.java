package com.example.demo.repository.foodBatchRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Food;
import com.example.demo.model.FoodBatch;
import com.example.demo.model.User;
import com.example.demo.repository.foodRepository.FoodRepositoryImpl;
import com.example.demo.repository.userRepository.UserRepository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class FoodBatchRepositoryImpl implements CustomFoodBatchRepository {
    @PersistenceContext
    private EntityManager em;

    @Autowired
    private FoodRepositoryImpl foodRepositoryImpl;

    @Autowired
    private UserRepository userRepository;

    public FoodBatchRepositoryImpl(EntityManager emParam) {
        this.em = emParam;
    }

    @Override
    public void saveFoodBatch(FoodBatch foodBatch, String bareCode, String username) throws Exception {

        Food food = foodRepositoryImpl.getFood(bareCode);
        if (food == null) {
            throw new Exception("Food not found");
        }
        User user = userRepository.findByEmail(username);
        foodBatch.setUsername(user.getUsername());
        this.em.persist(foodBatch);
        food.addFoodBatches(foodBatch);
    }

    @Override
    public List<FoodBatch> getFoodBatchesWithBareCode(String bareCode, String username) {
        try {
            String request =    "SELECT fb FROM Food f " +
                                "JOIN f.foodBatches fb " +
                                "WHERE f.bareCode = :bareCode AND fb.username = :username";
            TypedQuery<FoodBatch> query = em.createQuery(request, FoodBatch.class);
            query.setParameter("username", username);
            query.setParameter("bareCode", bareCode);
            List<FoodBatch> foodBatches = query.getResultList();
            return foodBatches;
        } catch (Exception e) {
            e.printStackTrace(); // Log l'erreur
            throw new RuntimeException("Erreur lors de l'exécution de la requête", e);
        }
    }

    @Override
    public List<FoodBatch> getFoodBatches(String username) {
        try {
            String request = "SELECT f FROM FoodBatch f WHERE f.username = :username";
            TypedQuery<FoodBatch> query = em.createQuery(request, FoodBatch.class);
            query.setParameter("username", username);
            List<FoodBatch> foodBatches = query.getResultList();
            return foodBatches;
        } catch (Exception e) {
            return null;
        }
    }
}