package com.quizserver.quizserver.service.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizserver.quizserver.dto.QuestionDTO;
import com.quizserver.quizserver.dto.TestDTO;
import com.quizserver.quizserver.dto.TestDetailsDTO;
import com.quizserver.quizserver.entities.Question;
import com.quizserver.quizserver.entities.Test;
import com.quizserver.quizserver.repository.QuestionRepository;
import com.quizserver.quizserver.repository.TestRepository;

import jakarta.persistence.EntityNotFoundException;

import java.util.stream.Collectors;
import java.util.List;
import java.util.Optional; 

@Service
public class TestServiceImpl implements TestService {

    @Autowired
    private TestRepository testRepository;

    @Autowired
    private QuestionRepository questionRepository;

    public TestDTO createTest(TestDTO dto){
        Test test = new Test();

        test.setTitle(dto.getTitle());
        test.setDescription(dto.getDescription());
        test.setTime(dto.getTime());
        test.setStudentClass(dto.getStudentClass());
    
        return testRepository.save(test).getDTO();
    }

    @Override
    public List<TestDTO> getAllTestsByClass(String studentClass) {
        List<Test> tests = testRepository.findByStudentClass(studentClass);
        return tests.stream()
                    .map(Test::getDTO) 
                    .collect(Collectors.toList());
    }

    // THIS IS THE FIXED METHOD
    public QuestionDTO addQuestionInTest(QuestionDTO dto) {
        
        // 1. ADDED THIS NULL CHECK
        if (dto.getId() == null) {
            throw new IllegalArgumentException("Test ID in QuestionDTO cannot be null");
        }
        
        // 2. This line is now safe, and the warning is gone
        Optional<Test> optionalTest = testRepository.findById(dto.getId()); 

        if (optionalTest.isPresent()) {
            Question question = new Question();

            question.setTest(optionalTest.get());
            question.setQuestionText(dto.getQuestionText());
            question.setOptionA(dto.getOptionA());
            question.setOptionB(dto.getOptionB());
            question.setOptionC(dto.getOptionC());
            question.setOptionD(dto.getOptionD());
            question.setCorrectOption(dto.getCorrectOption());

            return questionRepository.save(question).getDTO();
        }
        throw new EntityNotFoundException("Test Not Found");
    }

    public List<TestDTO> getAllTests(){
        List<Test> tests = testRepository.findAll();
        return tests.stream()
                    .map(Test::getDTO)
                    .collect(Collectors.toList());
    }

    @Override
    public void deleteTest(Long testId) {
        
        if (testId == null) {
            throw new IllegalArgumentException("Test ID cannot be null");
        }
        
        if (!testRepository.existsById(testId)) {
            throw new EntityNotFoundException("Test with ID " + testId + " not found");
        }
        testRepository.deleteById(testId);
    }

    public TestDetailsDTO getAllQuestionsByTest(Long id) {
        Optional<Test> optionalTest = testRepository.findById(id);
        TestDetailsDTO testDetailsDTO = new TestDetailsDTO();
        if (optionalTest.isPresent()) {
            TestDTO testDTO = optionalTest.get().getDTO();
            testDTO.setTime(optionalTest.get().getTime() * optionalTest.get().getQuestions().size());

            testDetailsDTO.setTestDTO(testDTO);
            testDetailsDTO.setQuestions(optionalTest.get().getQuestions().stream().map(Question::getDTO).toList());
            return testDetailsDTO;
        }
        return testDetailsDTO;
    }


}
