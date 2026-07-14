package com.ashwin.sms.sms.repostory;

import com.ashwin.sms.sms.entity.Student;
import com.fasterxml.jackson.annotation.JacksonAnnotation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//gives all operations for free
//the first parameter - table - it is like for this table we are working
//the second parameter is the Long whch states the type of primary key
public interface StudentRepository extends JpaRepository<Student, Long> {

}
