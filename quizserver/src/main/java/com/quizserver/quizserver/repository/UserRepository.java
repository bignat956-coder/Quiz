package com.quizserver.quizserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizserver.quizserver.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
