package com.quizserver.quizserver.service.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizserver.quizserver.dto.QuestionDTO;
import com.quizserver.quizserver.dto.TestDTO;
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

        
 // THIS IS THE MISSING LINE:
    test.setStudentClass(dto.getStudentClass());
    
                return testRepository.save(test).getDTO();
                    }


    // ... (your existing createTest method) ...

@Override
 // <-- If you have this in your TestService interface
public List<TestDTO> getAllTestsByClass(String studentClass) {
    // 1. Call the repository method we just built
    List<Test> tests = testRepository.findByStudentClass(studentClass);
    
    // 2. Convert the List<Test> into a List<TestDTO>
    return tests.stream()
                .map(Test::getDTO) // Uses your existing getDTO() helper
                .collect(Collectors.toList());
}



    public QuestionDTO addQuestionInTest(QuestionDTO dto) {
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

        public List<Test> getAllTests(){
        return testRepository.findAll().stream().peek(
                test -> test.setTime(test.getQuestions().size() * test.getTime())
        ).collect(Collectors.toList());
    }


}



