package com.quizserver.quizserver.service.test;

import java.util.List;

import com.quizserver.quizserver.dto.QuestionDTO;
import com.quizserver.quizserver.dto.SubmitTestDTO;
import com.quizserver.quizserver.dto.TestDTO;
import com.quizserver.quizserver.dto.TestDetailsDTO;
import com.quizserver.quizserver.dto.TestResultDTO;

public interface TestService {

    TestDTO createTest(TestDTO dto);
      // ADD THIS LINE:
    List<TestDTO> getAllTestsByClass(String studentClass);

    QuestionDTO addQuestionInTest(QuestionDTO dto);

    List<TestDTO> getAllTests();

void deleteTest(Long testId); // <-- ADD THIS LINE

TestDetailsDTO getAllQuestionsByTest(Long id);

TestResultDTO submitTest(SubmitTestDTO request);


    

List<TestResultDTO> getAllTestResults();

List<TestResultDTO> getAllTestResultsOfUser(Long userId);




}

