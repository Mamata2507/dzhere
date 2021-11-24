package com.ezo.dzhereback.controller.user;

import com.ezo.dzhereback.domain.Lesson;
import com.ezo.dzhereback.domain.Lessontime;
import com.ezo.dzhereback.dto.LessonListDto;
import com.ezo.dzhereback.service.LessonService;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Iterator;
import java.util.List;

@RestController
@CrossOrigin
@Slf4j
public class LessonController {
    private final LessonService lessonService;
    @Autowired
    public LessonController(LessonService lessonService){
        this.lessonService = lessonService;
    }
    Iterator iterator;

    @GetMapping("/m/user/class")
    public Lesson AllLesson(@RequestParam("u_phone") String u_phone) {
        int c_idx = lessonService.getCidx(u_phone);
        return lessonService.getLesson(c_idx);
    }

    @GetMapping("/m/user/class/time")
    public List<Lessontime> AllLessonTime(@RequestParam("u_phone") String u_phone) {
        int c_idx = lessonService.getCidx(u_phone);
        System.out.println(lessonService.getAllLessonTime(c_idx));
        return lessonService.getAllLessonTime(c_idx);
    }
}
