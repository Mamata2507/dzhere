package com.ezo.dzhereback.service.admin;

import com.ezo.dzhereback.domain.StudentCount;
import com.ezo.dzhereback.mapper.admin.StudentCountMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentCountService {
    private StudentCountMapper studentCountMapper;
    @Autowired
    public StudentCountService(StudentCountMapper studentCountMapper) {
        this.studentCountMapper = studentCountMapper;
    }

    public StudentCount getStudentCount(StudentCount studentCount){
        return studentCountMapper.getStudentCount(studentCount);
    }
}
