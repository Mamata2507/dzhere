package com.ezo.dzhereback.controller.admin;

import com.ezo.dzhereback.domain.Agency;
import com.ezo.dzhereback.domain.Lesson;
import com.ezo.dzhereback.domain.Teacher;
import com.ezo.dzhereback.domain.TeacherAttend;
import com.ezo.dzhereback.dto.TeacherAttendDto;
import com.ezo.dzhereback.dto.TeacherSearchDto;
import com.ezo.dzhereback.service.admin.TeacherService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Iterator;
import java.util.List;

@RestController
@CrossOrigin
@Slf4j
public class TeacherAdminController {
    private final TeacherService teacherService;
    @Autowired
    public TeacherAdminController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    @GetMapping("/m/teacher/agency/load")
    List<Agency> getAgencyList(@RequestParam("u_phone") String u_phone){
        return teacherService.getAgencyList(u_phone);
    }

    @GetMapping("/m/teacher/lesson/load")
    List<Lesson> getLessonList(@RequestParam("u_phone") String u_phone){
        return teacherService.getLessonList(u_phone);
    }

    @PostMapping("/m/teacher/search")
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
        System.out.println("/m/teacher/search");
        return teacherList;
    }

    @PostMapping("/m/teacher/update/attend")
    int updateTeacherAttend(@RequestBody TeacherAttendDto teacherAttendDto){
        TeacherAttend teacher = teacherAttendDto.toEntity();
        int result = teacherService.updateTeacherAttend(teacher);
        System.out.println("/m/teacher/update/attend");
        System.out.println(result);

        return result;
    }
}
