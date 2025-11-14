package com.quizserver.quizserver.service.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizserver.quizserver.dto.TestDTO;
import com.quizserver.quizserver.entities.Test;
import com.quizserver.quizserver.repository.TestRepository;
import java.util.stream.Collectors;
import java.util.List; 

@Service
public class TestServiceImpl implements TestService {

   

    @Autowired
    private TestRepository testRepository;


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

}



