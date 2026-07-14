package com.ashwin.sms.sms.controller;


import com.ashwin.sms.sms.entity.Student;
import com.ashwin.sms.sms.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RestController//this class handles http requests and returns data - json
@RequestMapping("/students")//sets the base url as /students
public class StudentController {
    private final StudentService studentService;

    public StudentController(StudentService studentService){
        this.studentService = studentService;
    }

    @PostMapping//run this method when post request comes
    public Student addStudent(@RequestBody Student student)
    {
        //the requestbody annotation automatically converts the json into object
        return studentService.saveStudent(student);
    }

    @GetMapping// run this method when someone sends the get request
    public List<Student> getAllStudents()
    {
        return studentService.getAllStudents();
    }

    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable Long id, @RequestBody Student student)
    {
        //pathvariable captures the data from the path or the link
        return studentService.updateStudent(id, student);
    }

    @DeleteMapping("{id}")
    public String deleteStudent(@PathVariable Long id)
    {
        studentService.deleteStudent(id);
        return "Student deleted successfully! ";
    }

    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Long id)
    {
        return studentService.getStudentById(id);
    }
}

