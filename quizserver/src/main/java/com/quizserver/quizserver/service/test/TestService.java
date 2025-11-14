package com.quizserver.quizserver.service.test;

import java.util.List;

import com.quizserver.quizserver.dto.TestDTO;

public interface TestService {

    TestDTO createTest(TestDTO dto);
      // ADD THIS LINE:
    List<TestDTO> getAllTestsByClass(String studentClass);

}

