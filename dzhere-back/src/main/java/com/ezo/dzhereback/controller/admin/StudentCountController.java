package com.ezo.dzhereback.controller.admin;

import com.ezo.dzhereback.domain.StudentCount;
import com.ezo.dzhereback.dto.StudentCountDto;
import com.ezo.dzhereback.service.admin.StudentCountService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@Slf4j
public class StudentCountController {
    private StudentCountService studentCountService;
    @Autowired
    public StudentCountController(StudentCountService studentCountService) {
        this.studentCountService = studentCountService;
    }

    @PostMapping("/api/admin/student/count")
    StudentCount getStudentCount(@RequestBody StudentCountDto studentCountDto){
        StudentCount studentCount = studentCountService.getStudentCount(studentCountDto.toEntity());
        System.out.println("/api/admin/student/count");
        System.out.println(studentCount);
        return studentCount;
    }
}
