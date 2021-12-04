package com.ezo.dzhereback.controller.user;

import com.ezo.dzhereback.domain.Lesson;
import com.ezo.dzhereback.domain.Lessontime;
import com.ezo.dzhereback.service.user.LessonUserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Iterator;
import java.util.List;

@RestController
@CrossOrigin
@Slf4j
public class LessonUserController {
    private final LessonUserService lessonUserService;
    @Autowired
    public LessonUserController(LessonUserService lessonUserService){
        this.lessonUserService = lessonUserService;
    }
    Iterator iterator;

    @GetMapping("/api/user/class")
    public Lesson AllLesson(@RequestParam("u_phone") String u_phone) {
        int c_idx = lessonUserService.getCidx(u_phone);
        return lessonUserService.getLesson(c_idx);
    }

    @GetMapping("/api/user/class/time")
    public List<Lessontime> AllLessonTime(@RequestParam("u_phone") String u_phone) {
        int c_idx = lessonUserService.getCidx(u_phone);
        System.out.println(lessonUserService.getAllLessonTime(c_idx));
        return lessonUserService.getAllLessonTime(c_idx);
    }
}
