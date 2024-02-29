package com.eloisecode.studentsystem.service;

import com.eloisecode.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllstudents();
}
