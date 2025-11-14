package com.quizserver.quizserver.repository;

import com.quizserver.quizserver.entities.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List; 

@Repository
public interface TestRepository extends JpaRepository<Test, Long> {

 // ADD THIS ONE LINE:
    List<Test> findByStudentClass(String studentClass);

}
