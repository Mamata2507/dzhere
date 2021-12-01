package com.ezo.dzhereback.mapper.admin;

import com.ezo.dzhereback.domain.Agency;
import com.ezo.dzhereback.domain.Lesson;
import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.dto.TeacherAddDto;
import com.ezo.dzhereback.dto.TeacherInfoDto;
import com.ezo.dzhereback.dto.TeacherUpdateDto;
import org.apache.ibatis.annotations.*;
import org.springframework.security.core.parameters.P;

import java.util.List;

@Mapper
public interface TeacherAdminMapper {
    @Select("select * from Agency")
    List<Agency> findAgencyAll();

    @Select("select * from Class where ag_idx=${agIdx}")
    List<Lesson> findLessonListByAgencyId(@Param("agIdx") int agIdx);

    @Select("SELECT u.u_idx, ag.ag_name, c.c_name, u.u_name, u.u_phone, u.u_email, u.u_accept\n" +
            "from User u, Agency ag, Class c\n" +
            "where u.c_idx = c.c_idx and u.ag_idx = ag.ag_idx and u.u_auth=2 and u.c_idx=${cIdx} and u.ag_idx=${agIdx}")
    List<TeacherInfoDto> findTeacherListByLessonIdAndAgencyId(@Param("cIdx") int cIdx, @Param("agIdx") int agIdx);

    @Insert("INSERT INTO User(u_phone, u_name, u_auth, c_idx, ag_idx) VALUES (#{teacher.u_phone}, #{teacher.u_name}, 2, ${teacher.c_idx}, ${teacher.ag_idx})")
    int insertTeacher(@Param("teacher") TeacherAddDto teacherAddDto);

    @Select("SELECT u.u_idx, ag.ag_name, c.c_name, u.u_name, u.u_phone, u.u_email, u.u_accept\n" +
            "from User u, Agency ag, Class c\n" +
            "where u.c_idx = c.c_idx and u.ag_idx = ag.ag_idx and u.u_auth=2 and u.u_phone=#{userPhone}")
    TeacherInfoDto findTeacherByPhone(@Param("userPhone") String userPhone);

    @Update("UPDATE User SET u_phone = #{teacher.u_phone} , u_email = #{teacher.u_email} WHERE (u_idx = #{teacher.u_idx})")
    int updateTeacher(@Param("teacher") TeacherUpdateDto teacherUpdateDto);

    @Update("UPDATE User SET u_email = #{teacher.u_email} WHERE (u_idx = #{teacher.u_idx})")
    int updateTeacherEmail(@Param("teacher") TeacherUpdateDto teacherUpdateDto);

    @Update("UPDATE User SET u_phone = #{teacher.u_phone} WHERE (u_idx = #{teacher.u_idx})")
    int updateTeacherPhone(@Param("teacher") TeacherUpdateDto teacherUpdateDto);

    @Select("SELECT u.u_idx, ag.ag_name, c.c_name, u.u_name, u.u_phone, u.u_email, u.u_accept\n" +
            "from User u, Agency ag, Class c\n" +
            "where u.c_idx = c.c_idx and u.ag_idx = ag.ag_idx and u.u_auth=2 and u.u_idx=#{u_idx}")
    TeacherInfoDto findTeacherByIdx(@Param("u_idx") int u_idx);

    @Delete("DELETE from User where u_idx=#{u_idx}")
    int deleteTeacher(@Param("u_idx") int u_idx);

    @Delete("DELETE from User where u_idx in ${u_idxes}")
    int deleteTeachers(@Param("u_idxes") String u_idxes);


}
