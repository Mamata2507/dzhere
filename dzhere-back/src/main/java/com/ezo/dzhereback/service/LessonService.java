package com.ezo.dzhereback.service;

import com.ezo.dzhereback.domain.Lesson;
import com.ezo.dzhereback.domain.Lessontime;
import com.ezo.dzhereback.mapper.LessonMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class LessonService {
    private final LessonMapper lessonMapper;

    @Autowired
    public LessonService(LessonMapper lessonMapper) {
        this.lessonMapper = lessonMapper;
    }

    public List<Lesson> getAllLesson() {
        return lessonMapper.getLessonList();
    }

    public Lesson getLesson(int c_idx) {
        System.out.println(lessonMapper.getLesson(c_idx));
        return lessonMapper.getLesson(c_idx);
    }

    public int getCidx(String u_phone){
        return lessonMapper.getCidx(u_phone);
    }

    public int getAgidx(int c_idx){
        return lessonMapper.getAgidx(c_idx);
    }

    public List<Lessontime> getAllLessonTime(int u_phone) {
        return lessonMapper.getLessonTimeList(u_phone);
    }
}
