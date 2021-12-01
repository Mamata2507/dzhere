package com.ezo.dzhereback.controller.admin;

import com.ezo.dzhereback.domain.Agency;
import com.ezo.dzhereback.domain.Lesson;
import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.dto.*;
import com.ezo.dzhereback.mapper.admin.TeacherAdminMapper;
import com.ezo.dzhereback.service.admin.TeacherAdminService;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Delete;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@Slf4j

public class TeacherAdminController {
    private final TeacherAdminService teacherAdminService;

    public TeacherAdminController(TeacherAdminService teacherAdminService) {
        this.teacherAdminService = teacherAdminService;
    }

    @GetMapping("/api/admin/teacher/agency-list")
    public ResponseEntity<?> agencyList(){
        List<Agency> result = teacherAdminService.getAgencyList();
        return ResponseEntity.ok().body(new Result<>(result));
    }

    @GetMapping("/api/admin/teacher/class-list")
    public ResponseEntity<?> classList(@RequestParam("agIdx") int agIdx){
        List<Lesson> result = teacherAdminService.getLessonListByAgencyId(agIdx);
        return ResponseEntity.ok().body(new Result<>(result));
    }

    @GetMapping("/api/admin/teacher/teacher-list")
    public ResponseEntity<?> teacherList(@RequestParam("cIdx") int cIdx, @RequestParam("agIdx") int agIdx){
        List<TeacherInfoDto> result = teacherAdminService.getTeacherListByLessonIdAndAgencyId(cIdx, agIdx);
        return ResponseEntity.ok().body(new Result<>(result));
    }

    @PostMapping("/api/admin/teacher/add")
    public ResponseEntity<?> addTeacher(@RequestBody TeacherAddDto teacherAddDto){
        TeacherInfoDto result = teacherAdminService.createTeacher(teacherAddDto);
        return ResponseEntity.ok().body(result);
    }

    @PutMapping("/api/admin/teacher/update")
    public ResponseEntity<?> updateTeacher(@RequestBody TeacherUpdateDto teacherUpdateDto){
        TeacherInfoDto result = teacherAdminService.updateTeacher(teacherUpdateDto);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/api/admin/teacher/delete")
    public void deleteTeacher(@RequestBody TeacherDeleteDto teacherDeleteDto){
        int[] u_idxes = teacherDeleteDto.getU_idxes();
        teacherAdminService.deleteTeacher(u_idxes);
    }
}
