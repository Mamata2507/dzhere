package com.ezo.dzhereback.mapper.admin;


import com.ezo.dzhereback.domain.Agency;
import com.ezo.dzhereback.domain.Lesson;
import com.ezo.dzhereback.dto.*;
import org.apache.ibatis.annotations.*;

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

    @Insert("INSERT INTO User(u_phone, u_name, u_email, u_auth, c_idx, ag_idx) VALUES (#{teacher.u_phone}, #{teacher.u_name}, #{teacher.u_email}, 2, ${teacher.c_idx}, ${teacher.ag_idx})")
    int insertTeacher(@Param("teacher") TeacherAddDto teacherAddDto);

    @Select("SELECT u.u_idx, ag.ag_name, c.c_name, u.u_name, u.u_phone, u.u_email, u.u_accept\n" +
            "from User u, Agency ag, Class c\n" +
            "where u.c_idx = c.c_idx and u.ag_idx = ag.ag_idx and u.u_auth=2 and u.u_phone=#{userPhone}")
    TeacherInfoDto findTeacherByPhone(@Param("userPhone") String userPhone);

    @Update("UPDATE User SET u_name = #{teacher.u_name}, u_phone = #{teacher.u_phone} , u_email = #{teacher.u_email} WHERE (u_idx = #{teacher.u_idx})")
    int updateTeacher(@Param("teacher") TeacherUpdateDto teacherUpdateDto);

    @Update("UPDATE User SET u_email = #{teacher.u_email} WHERE (u_idx = #{teacher.u_idx})")
    int updateTeacherEmail(@Param("teacher") TeacherUpdateDto teacherUpdateDto);

    @Update("UPDATE User SET u_phone = #{teacher.u_phone} WHERE (u_idx = #{teacher.u_idx})")
    int updateTeacherPhone(@Param("teacher") TeacherUpdateDto teacherUpdateDto);

    @Update("UPDATE User SET u_name = #{teacher.u_name} WHERE (u_idx = #{teacher.u_idx})")
    int updateTeacherName(@Param("teacher") TeacherUpdateDto teacherUpdateDto);

    @Update("UPDATE User SET u_phone = #{teacher.u_phone}, u_email = #{teacher.u_email} WHERE (u_idx = #{teacher.u_idx})")
    int updateTeacherPhoneEmail(@Param("teacher") TeacherUpdateDto teacherUpdateDto);

    @Update("UPDATE User SET u_phone = #{teacher.u_phone}, u_name = #{teacher.u_name} WHERE (u_idx = #{teacher.u_idx})")
    int updateTeacherPhoneName(@Param("teacher") TeacherUpdateDto teacherUpdateDto);

    @Update("UPDATE User SET u_email = #{teacher.u_email}, u_name = #{teacher.u_name} WHERE (u_idx = #{teacher.u_idx})")
    int updateTeacherEmailName(@Param("teacher") TeacherUpdateDto teacherUpdateDto);

    @Select("SELECT u.u_idx, ag.ag_name, c.c_name, u.u_name, u.u_phone, u.u_email, u.u_accept\n" +
            "from User u, Agency ag, Class c\n" +
            "where u.c_idx = c.c_idx and u.ag_idx = ag.ag_idx and u.u_auth=2 and u.u_idx=#{u_idx}")
    TeacherInfoDto findTeacherByIdx(@Param("u_idx") int u_idx);

    @Delete("DELETE from User where u_idx=#{u_idx}")
    int deleteTeacher(@Param("u_idx") int u_idx);

    @Delete("DELETE from User where u_idx in ${u_idxes}")
    int deleteTeachers(@Param("u_idxes") String u_idxes);

    @Select("SELECT a.a_idx, a.a_today_date, c.c_name, u.u_name, a.a_attend_time, a.a_exit_time, a.a_late_status, a.a_leave, a.a_absent, a.a_not_exit, a.a_result_time\n" +
            "FROM User u, Class c, Attend a\n" +
            "WHERE u.u_idx=a.u_idx and c.c_idx=u.c_idx and u.u_idx=#{u_idx} and a.a_today_date between date(#{start_date}) and date(#{end_date})")
    List<TeacherAttendDto> findTeacherAttendListByDateRange(@Param("u_idx") int uIdx, @Param("start_date") String start_date, @Param("end_date") String end_date);

    @Select("SELECT a.a_idx, a.a_today_date, c.c_name, u.u_name, a.a_attend_time, a.a_exit_time, a.a_late_status, a.a_leave, a.a_absent, a.a_not_exit, a.a_result_time\n" +
            "FROM User u, Class c, Attend a\n" +
            "WHERE u.u_idx=a.u_idx and c.c_idx=u.c_idx and u.u_idx=#{u_idx}")
    List<TeacherAttendDto> findTeacherAttendListAll(int uIdx);

    @Select("SELECT u_idx, u_name FROM User WHERE c_idx=#{c_idx}")
    TeacherIdxNameDto findTeacherIdxNameByCIdx(@Param("c_idx") int cIdx);

}
