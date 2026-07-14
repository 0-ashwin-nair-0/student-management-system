package com.ashwin.sms.sms.service;

import com.ashwin.sms.sms.entity.Student;
import com.ashwin.sms.sms.repostory.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service//this class is a service
public class StudentService {
    //The service needs a repository to access the database
    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Student saveStudent(Student student)
    {
        return studentRepository.save(student);
    }

    public List<Student> getAllStudents()
    {
        return studentRepository.findAll();
    }

    public Student updateStudent(Long id, Student updateStudent) {
        //this searches for the student with the given id
        //there may or may not be a student - and for that we write Runtime exception
        Student student = studentRepository.findById(id).orElseThrow(() -> new RuntimeException("Student not found"));
        student.setName(updateStudent.getName());
        student.setEmail(updateStudent.getEmail());
        student.setCourse(updateStudent.getCourse());

        return studentRepository.save(student);//saves the student change

    }

    public void deleteStudent(Long id)
    {
        studentRepository.deleteById(id);
    }

    public Student getStudentById(Long id)
    {
        return studentRepository.findById(id).orElseThrow(() -> new RuntimeException("Student not found!"));
    }
}
