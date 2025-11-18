package com.quizserver.quizserver.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping; // <-- Import this


import com.quizserver.quizserver.dto.QuestionDTO;
import com.quizserver.quizserver.dto.SubmitTestDTO;
import com.quizserver.quizserver.dto.TestDTO;
import com.quizserver.quizserver.service.test.TestService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/api/test")
@CrossOrigin("*")
public class TestController {

    @Autowired
    private TestService testService;


    @PostMapping
    public ResponseEntity<?> createTest(@RequestBody TestDTO dto){
        try{
            return new ResponseEntity<>(testService.createTest(dto), HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/tests/class/{studentClass}")
public ResponseEntity<List<TestDTO>> getTestsByStudentClass(@PathVariable String studentClass) {
    // Call the service method we just built
    List<TestDTO> tests = testService.getAllTestsByClass(studentClass);
    
    // Send the list back as a successful (200 OK) response
    return ResponseEntity.ok(tests);
}
    @PostMapping("/question")
    public ResponseEntity<?> addQuestionInTest(@RequestBody QuestionDTO dto){
        try{
            return new ResponseEntity<>(testService.addQuestionInTest(dto), HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllTests(){
        try{
            return new ResponseEntity<>(testService.getAllTests(), HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/submit-test")
    public ResponseEntity<?> submitTest(@RequestBody SubmitTestDTO dto){
        try{
            return new ResponseEntity<>(testService.submitTest(dto), HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }


    @DeleteMapping("/{testId}") // This makes the full URL: /api/test/1 (or whatever the ID is)
    public ResponseEntity<?> deleteTest(@PathVariable Long testId) {
        try {
            testService.deleteTest(testId);
            return new ResponseEntity<>("Test deleted successfully", HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

       @GetMapping("/{id}")
    public ResponseEntity<?> getAllQuestions(@PathVariable Long id){
        try{
            return new ResponseEntity<>(testService.getAllQuestionsByTest(id), HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }

        
    }
      @GetMapping("/test-result/{id}")
    public ResponseEntity<?> getAllTestResultsOfUser(@PathVariable Long id){
        try{
            return new ResponseEntity<>(testService.getAllTestResultsOfUser(id), HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
