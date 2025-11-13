package com.quizserver.quizserver.entities;


import com.quizserver.quizserver.dto.TestDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Test {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    private Long time;
    // ... other fields like id, title, description, etc.

@Column(name = "student_class")
private String studentClass;

// ... constructors, etc.

// Add Getters and Setters for studentClass
// (Or let Lombok @Data handle it if you're using that)
public String getStudentClass() {
    return studentClass;
}

public void setStudentClass(String studentClass) {
    this.studentClass = studentClass;
}

// ... other methods


        public TestDTO getDTO() {
        TestDTO testDTO = new TestDTO();

        testDTO.setId(id);
        testDTO.setTitle(title);
        testDTO.setDescription(description);
        testDTO.setTime(time);
 // ADD THIS LINE:
    testDTO.setStudentClass(this.studentClass); 
        return testDTO;
    }

}
