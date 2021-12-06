package com.ezo.dzhereback.service.user;

import com.ezo.dzhereback.domain.Lesson;
import com.ezo.dzhereback.domain.Lessontime;
import com.ezo.dzhereback.mapper.user.LessonUserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LessonUserService {
    private final LessonUserMapper lessonUserMapper;

    @Autowired
    public LessonUserService(LessonUserMapper lessonUserMapper) {
        this.lessonUserMapper = lessonUserMapper;
    }

    public List<Lesson> getAllLesson() {
        return lessonUserMapper.getLessonList();
    }

    public Lesson getLesson(int c_idx) {
        System.out.println(lessonUserMapper.getLesson(c_idx));
        return lessonUserMapper.getLesson(c_idx);
    }

    public int getCidx(String u_phone){
        return lessonUserMapper.getCidx(u_phone);
    }

    public int getAgidx(int c_idx){
        return lessonUserMapper.getAgidx(c_idx);
    }

    public List<Lessontime> getAllLessonTime(int u_phone) {
        return lessonUserMapper.getLessonTimeList(u_phone);
    }
}
