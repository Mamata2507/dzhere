package com.ezo.dzhereback.mapper.admin;

import com.ezo.dzhereback.domain.Agency;
import com.ezo.dzhereback.domain.Lesson;
import com.ezo.dzhereback.domain.Teacher;
import com.ezo.dzhereback.domain.TeacherAttend;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface TeacherMapper {
    @Select("select * from Agency where ag_idx = (select ag_idx from User where u_phone = #{u_phone})")
    List<Agency> getAgencyList(String u_phone);

    @Select("select * from Class where ag_idx = (select ag_idx from User where u_phone = #{u_phone})")
    List<Lesson> getLessonList(String u_phone);

    // 전체 기간
    @Select("select A.a_idx, U.u_idx, U.u_phone, U.u_email, U.u_name, A.a_attend_time, A.a_exit_time, A.a_leave, A.a_late_status, A.a_absent, A.a_not_exit , A.a_today_date\n" +
            "from User U join Attend A on U.u_idx = A.u_idx\n" +
            "where U.ag_idx=#{ag_idx} and U.u_accept=1 and U.u_auth = #{u_auth} and U.u_name=#{u_name} and a_today_date order by A.a_today_date")
    List<Teacher> getTeacherSearchAll(int ag_idx, int c_idx, String u_name, int u_auth);

    @Select("select A.a_idx, U.u_idx, U.u_phone, U.u_email, U.u_name, A.a_attend_time, A.a_exit_time, A.a_leave, A.a_late_status, A.a_absent, A.a_not_exit , A.a_today_date\n" +
            "from User U join Attend A on U.u_idx = A.u_idx\n" +
            "where U.ag_idx=#{ag_idx} and U.u_accept=1 and U.u_auth = #{u_auth} and U.u_name=#{u_name} and a_late_status=#{a_late_status} and a_today_date order by A.a_today_date")
    List<Teacher> getTeacherSearchAll_01(int ag_idx, int c_idx, String u_name, int u_auth, int a_late_status );

    @Select("select A.a_idx, U.u_idx, U.u_phone, U.u_email, U.u_name, A.a_attend_time, A.a_exit_time, A.a_leave, A.a_late_status, A.a_absent, A.a_not_exit , A.a_today_date\n" +
            "from User U join Attend A on U.u_idx = A.u_idx\n" +
            "where U.ag_idx=#{ag_idx} and U.u_accept=1 and U.u_auth = #{u_auth} and U.u_name=#{u_name} and a_absent=#{a_absent} and a_today_date order by A.a_today_date")
    List<Teacher> getTeacherSearchAll_02(int ag_idx, int c_idx, String u_name, int u_auth, int a_absent);

    @Select("select A.a_idx, U.u_idx, U.u_phone, U.u_email, U.u_name, A.a_attend_time, A.a_exit_time, A.a_leave, A.a_late_status, A.a_absent, A.a_not_exit , A.a_today_date\n" +
            "from User U join Attend A on U.u_idx = A.u_idx\n" +
            "where U.ag_idx=#{ag_idx} and U.u_accept=1 and U.u_auth = #{u_auth} and U.u_name=#{u_name} and a_leave=#{a_leave} and a_today_date order by A.a_today_date")
    List<Teacher> getTeacherSearchAll_03(int ag_idx, int c_idx, String u_name, int u_auth, int a_leave);

    @Select("select A.a_idx, U.u_idx, U.u_phone, U.u_email, U.u_name, A.a_attend_time, A.a_exit_time, A.a_leave, A.a_late_status, A.a_absent, A.a_not_exit , A.a_today_date\n" +
            "from User U join Attend A on U.u_idx = A.u_idx\n" +
            "where U.ag_idx=#{ag_idx} and U.u_accept=1 and U.u_auth = #{u_auth} and U.u_name=#{u_name} and a_not_exit=#{a_not_exit} and a_today_date order by A.a_today_date")
    List<Teacher> getTeacherSearchAll_04(int ag_idx, int c_idx, String u_name, int u_auth, int a_not_exit);


    // 일정 기간
    @Select("select A.a_idx, U.u_idx, U.u_phone, U.u_email, U.u_name, A.a_attend_time, A.a_exit_time, A.a_leave, A.a_late_status, A.a_absent, A.a_not_exit , A.a_today_date\n" +
            "from User U join Attend A on U.u_idx = A.u_idx\n" +
            "where U.ag_idx=#{ag_idx} and U.u_accept=1 and U.u_auth = #{u_auth} and U.u_name=#{u_name} and a_today_date between #{start_date} and #{end_date} order by A.a_today_date")
    List<Teacher> getTeacherSearch(int ag_idx, int c_idx, String u_name, String start_date, int u_auth, String end_date);

    @Select("select A.a_idx, U.u_idx, U.u_phone, U.u_email, U.u_name, A.a_attend_time, A.a_exit_time, A.a_leave, A.a_late_status, A.a_absent, A.a_not_exit , A.a_today_date\n" +
            "from User U join Attend A on U.u_idx = A.u_idx\n" +
            "where U.ag_idx=#{ag_idx} and U.u_accept=1 and U.u_auth = #{u_auth} and U.u_name=#{u_name} and A.a_late_status = #{a_late_status} and A.a_today_date between #{start_date} and #{end_date} order by A.a_today_date")
    List<Teacher> getTeacherSearch_01(int ag_idx, int c_idx, String u_name, String start_date, String end_date, int u_auth, int a_late_status );

    @Select("select A.a_idx, U.u_idx, U.u_phone, U.u_email, U.u_name, A.a_attend_time, A.a_exit_time, A.a_leave, A.a_late_status, A.a_absent, A.a_not_exit , A.a_today_date\n" +
            "from User U join Attend A on U.u_idx = A.u_idx\n" +
            "where U.ag_idx=#{ag_idx} and U.u_accept=1 and U.u_auth = #{u_auth} and U.u_name=#{u_name} and A.a_absent = #{a_absent} and A.a_today_date between #{start_date} and #{end_date} order by A.a_today_date")
    List<Teacher> getTeacherSearch_02(int ag_idx, int c_idx, String u_name, String start_date, String end_date, int u_auth, int a_absent );

    @Select("select A.a_idx, U.u_idx, U.u_phone, U.u_email, U.u_name, A.a_attend_time, A.a_exit_time, A.a_leave, A.a_late_status, A.a_absent, A.a_not_exit , A.a_today_date\n" +
            "from User U join Attend A on U.u_idx = A.u_idx\n" +
            "where U.ag_idx=#{ag_idx} and U.u_accept=1 and U.u_auth = #{u_auth} and U.u_name=#{u_name} and A.a_leave = #{a_leave} and A.a_today_date between #{start_date} and #{end_date} order by A.a_today_date")
    List<Teacher> getTeacherSearch_03(int ag_idx, int c_idx, String u_name, String start_date, String end_date, int u_auth, int a_leave );

    @Select("select A.a_idx, U.u_idx, U.u_phone, U.u_email, U.u_name, A.a_attend_time, A.a_exit_time, A.a_leave, A.a_late_status, A.a_absent, A.a_not_exit , A.a_today_date\n" +
            "from User U join Attend A on U.u_idx = A.u_idx\n" +
            "where U.ag_idx=#{ag_idx} and U.u_accept=1 and U.u_auth = #{u_auth} and U.u_name=#{u_name} and A.a_not_exit = #{a_not_exit} and A.a_today_date between #{start_date} and #{end_date} order by A.a_today_date")
    List<Teacher> getTeacherSearch_04(int ag_idx, int c_idx, String u_name, String start_date, String end_date, int u_auth, int a_not_exit );


//    @Update("update Attend set a_today_date = #{teacher.a_today_date}, a_attend_time = #{teacher.a_attend_time}, a_exit_time=#{teacher.a_exit_time}, a_leave = #{teacher.a_leave}, " +
//            "a_late_status = #{teacher.a_late_status}, a_absent = #{teacher.a_absent}, a_not_exit = #{teacher.a_not_exit}\n" +
//            "where a_idx = #{teacher.a_idx}")
    @Update("UPDATE Attend\n" +
            "SET a_today_date=#{teacher.a_today_date}, a_attend_time = #{teacher.a_attend_time}, a_exit_time = #{teacher.a_exit_time}, a_late_status=#{teacher.a_late_status}, a_leave=#{teacher.a_leave}, a_absent=#{teacher.a_absent}, a_not_exit=#{teacher.a_not_exit},\n" +
            "a_result_time = if(\n" +
            "instr(a_exit_time, '00:00:00')\n" +
            "OR instr(a_attend_time, '00:00:00')\n" +
            "OR (a_attend_time is null)\n" +
            "OR (a_exit_time is null), '' , timediff(date_format(#{teacher.a_exit_time}, '%H:%i:%m'), date_format(a_attend_time, '%H:%i:%m')))\n" +
            "where a_idx = #{teacher.a_idx}")
    int updateTeacherUpdate (@Param("teacher")TeacherAttend teacherAttend);
}
