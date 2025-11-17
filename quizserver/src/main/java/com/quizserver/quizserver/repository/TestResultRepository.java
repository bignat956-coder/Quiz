package com.quizserver.quizserver.repository;

import com.quizserver.quizserver.entities.TestResult;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TestResultRepository extends JpaRepository<TestResult, Long> {

 
    
    @Query("SELECT tr FROM TestResult tr LEFT JOIN FETCH tr.test LEFT JOIN FETCH tr.user")
    List<TestResult> findAllWithDetails();
}


