package com.eloisecode.studentsystem.repository;

import com.eloisecode.studentsystem.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository  extends JpaRepository<Student, Integer> {
}
