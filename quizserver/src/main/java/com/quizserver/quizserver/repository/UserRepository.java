package com.quizserver.quizserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizserver.quizserver.entities.User;
import com.quizserver.quizserver.enums.UserRole;
import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByRole(UserRole role);
}
