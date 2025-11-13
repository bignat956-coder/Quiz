package com.quizserver.quizserver.dto;

import lombok.Data;

@Data
public class TestDTO {
    
    private Long id;

    private String title;

    private String description;

    private Long time;
    
 
    
    private String studentClass;
    
    
    public String getStudentClass() {
        return studentClass;
    }
    
    public void setStudentClass(String studentClass) {
        this.studentClass = studentClass;
    }

}



