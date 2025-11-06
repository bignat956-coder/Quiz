package com.quizserver.quizserver.service.user;

public interface UserService {



    User creatUser(User user);

    Boolean hasUserWithEmail(String email);
}
