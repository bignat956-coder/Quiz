package com.quizserver.quizserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizserver.quizserver.entities.User;
import com.quizserver.quizserver.enums.UserRole;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByRole(UserRole role);


    User findFirstByEmail(String email);
}
