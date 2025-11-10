package com.quizserver.quizserver.entities;

import com.quizserver.quizserver.enums.UserRole;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class User {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)


 private Long id;

 private String email;

 private String password;

 private String name;

 private UserRole role;

  @Column(name = "student_class")
      private String studentClass;

      // 2. ADD GETTER AND SETTER FOR THE NEW FIELD
          public String getStudentClass() {
                    return studentClass;
          }

              public void setStudentClass(String studentClass) {
                        this.studentClass = studentClass;
              }

               // 1. ADD THE NEW FIELD
    @Column(name = "gender")
    private String gender;
    
    // ... existing getters and setters ...
    
    // 2. ADD GETTER AND SETTER FOR THE NEW FIELD
    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
            }
 