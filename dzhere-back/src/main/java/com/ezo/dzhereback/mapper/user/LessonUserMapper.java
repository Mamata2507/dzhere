package com.ezo.dzhereback.mapper.user;

import com.ezo.dzhereback.domain.Lesson;
import com.ezo.dzhereback.domain.Lessontime;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface LessonUserMapper {
    @Select("SELECT * FROM Class")
    List<Lesson> getLessonList();

    @Select("select c_name from Class where c_idx = #{c_idx}")
    Lesson getLesson(int c_idx);

    @Select("select c_idx from User where u_phone=#{u_phone}")
    int getCidx(String u_phone);

    @Select("select ag_idx from Class where c_idx = #{c_idx}")
    int getAgidx(int c_idx);

    @Select("SELECT * FROM Classtime WHERE c_idx = #{c_idx}")
    List<Lessontime> getLessonTimeList(int c_idx);
}
