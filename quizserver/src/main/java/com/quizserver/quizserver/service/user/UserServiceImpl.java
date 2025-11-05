package com.quizserver.quizserver.service.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizserver.quizserver.entities.User;
import com.quizserver.quizserver.repository.UserRepository;

@Service

public class UserServiceImpl implements UserService {

@Autowired
private UserRepository userRepository;


private void createAdminUser(){



}
}
