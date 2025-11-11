package com.quizserver.quizserver.service.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizserver.quizserver.dto.TestDTO;
import com.quizserver.quizserver.entities.Test;
import com.quizserver.quizserver.repository.TestRepository;

@Service
public class TestServiceImpl implements TestService {
    

    @Autowired
    private TestRepository testRepository;


    public TestDTO createTest(TestDTO dto){
        Test test = new Test();

        test.setTitle(dto.getTitle());
        test.setDescription(dto.getDescription());
        test.setTime(dto.getTime());

                return testRepository.save(test).getDTO();
                    }


    }


