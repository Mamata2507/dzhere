package com.ezo.dzhereback.controller.admin;

import com.ezo.dzhereback.domain.Agency;
import com.ezo.dzhereback.domain.Lesson;
import com.ezo.dzhereback.domain.Teacher;
import com.ezo.dzhereback.domain.TeacherAttend;
import com.ezo.dzhereback.dto.*;
import com.ezo.dzhereback.service.admin.TeacherAdminService;
import com.ezo.dzhereback.service.admin.TeacherService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@Slf4j
public class TeacherAdminController {
    private final TeacherService teacherService;
    private final TeacherAdminService teacherAdminService;

    @Autowired
    public TeacherAdminController(TeacherService teacherService, TeacherAdminService teacherAdminService) {
        this.teacherService = teacherService;
        this.teacherAdminService = teacherAdminService;
    }

    @GetMapping("/api/admin/teacher/agency/load")
    List<Agency> getAgencyList(@RequestParam("u_phone") String u_phone){
        return teacherService.getAgencyList(u_phone);
    }

    @GetMapping("/api/admin/teacher/lesson/load")
    List<Lesson> getLessonList(@RequestParam("u_phone") String u_phone){
        return teacherService.getLessonList(u_phone);
    }

    @PostMapping("/api/admin/teacher/search")
    List<Teacher> getTeacherSearch(@RequestBody TeacherSearchDto teacherSearchDto){
        Teacher teacher = teacherSearchDto.toEntity();
        System.out.println(teacher);
        List<Teacher> teacherList = teacherService.getTeacherSearch(
                teacher.getAg_idx()
                ,teacher.getC_inx()
                ,teacher.getU_name()
                ,teacher.getAttend_state()
                ,teacher.getAttend_date_state()
                ,teacher.getStart_date()
                ,teacher.getEnd_date()
                ,teacher.getU_auth()
        );
        System.out.println("/api/admin/teacher/search");
        System.out.println(teacherList);
        return teacherList;
    }

    @PostMapping("/api/admin/teacher/update/attend")
    int updateTeacherAttend(@RequestBody TeacherAttendSYDto teacherAttendSYDto) {
        TeacherAttend teacher = teacherAttendSYDto.toEntity();
        int result = teacherService.updateTeacherAttend(teacher);
        System.out.println("/api/admin/teacher/update/attend");
        System.out.println(result);
        return result;
    }

    @GetMapping("/api/admin/teacher/web/agency-list")
    public ResponseEntity<?> agencyList(){
        List<Agency> result = teacherAdminService.getAgencyList();
        return ResponseEntity.ok().body(new Result<>(result));
    }

    @GetMapping("/api/admin/teacher/web/class-list")
    public ResponseEntity<?> classList(@RequestParam("agIdx") int agIdx){
        List<Lesson> result = teacherAdminService.getLessonListByAgencyId(agIdx);
        return ResponseEntity.ok().body(new Result<>(result));
    }

    @GetMapping("/api/admin/teacher/web/teacher-list")
    public ResponseEntity<?> teacherList(@RequestParam("cIdx") int cIdx, @RequestParam("agIdx") int agIdx){
        List<TeacherInfoDto> result = teacherAdminService.getTeacherListByLessonIdAndAgencyId(cIdx, agIdx);
        return ResponseEntity.ok().body(new Result<>(result));
    }

    @GetMapping("/api/admin/teacher/web/attend-list")
    public ResponseEntity<?> attendList(@RequestParam("uIdx") int uIdx, @RequestParam("startDate") String start_date, @RequestParam("endDate") String end_date){
        List<TeacherAttendSYDto> result = teacherAdminService.getTeacherAttendList(uIdx, start_date, end_date);
        return ResponseEntity.ok().body(new Result<>(result));
    }

    @GetMapping("/api/admin/teacher/web/teacher-iname")
    public ResponseEntity<?> teacherIdxName(@RequestParam("c_idx") int cIdx){
        TeacherIdxNameDto result = teacherAdminService.getTeacherIdxName(cIdx);
        return ResponseEntity.ok().body(new Result<>(result));
    }

    @GetMapping("/api/admin/teacher/web/attend-list-all")
    public ResponseEntity<?> attendListAll(@RequestParam("u_idx") int uIdx){
        List<TeacherAttendSYDto> result = teacherAdminService.getTeacherAttendListAll(uIdx);
        return ResponseEntity.ok().body(new Result<>(result));
    }

    @PostMapping("/api/admin/teacher/web/add")
    public ResponseEntity<?> addTeacher(@RequestBody TeacherAddDto teacherAddDto){
        teacherAdminService.createTeacher(teacherAddDto);
        List<TeacherInfoDto> result = teacherAdminService.getTeacherListByLessonIdAndAgencyId(teacherAddDto.getC_idx(), teacherAddDto.getAg_idx());
        return ResponseEntity.ok().body(new Result<>(result));
    }

    @PostMapping("/api/admin/teacher/web/update")
    public ResponseEntity<?> updateTeacher(@RequestBody TeacherUpdateDto teacherUpdateDto){
        teacherAdminService.updateTeacher(teacherUpdateDto);
        List<TeacherInfoDto> result = teacherAdminService.getTeacherListByLessonIdAndAgencyId(teacherUpdateDto.getC_idx(), teacherUpdateDto.getAg_idx());
        return ResponseEntity.ok().body(new Result<>(result));
    }

    @Transactional
    @PostMapping("/api/admin/teacher/web/delete")
    public ResponseEntity<?> deleteTeacher(@RequestBody TeacherDeleteDto teacherDeleteDto){
        System.out.println(teacherDeleteDto);
        int[] u_idxes = teacherDeleteDto.getU_idxes();
        int cIdx = teacherDeleteDto.getC_idx();
        int agIdx = teacherDeleteDto.getAg_idx();
        teacherAdminService.deleteTeacher(u_idxes);
        List<TeacherInfoDto> result = teacherAdminService.getTeacherListByLessonIdAndAgencyId(cIdx, agIdx);
        return ResponseEntity.ok().body(new Result<>(result));
    }
}
