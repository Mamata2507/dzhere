package com.ezo.dzhereback.mapper;

import com.ezo.dzhereback.domain.LoadAttendCnt;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface CheckMapper {
    @Select("select u_idx from User where u_phone = #{u_phone}")
    int getUidx(String u_phone);

    @Insert("insert into Attend(a_attend_time,u_idx) values(#{attendTime}, #{u_idx})")
    int insertCheck(String attendTime, int u_idx);

    @Update("update Attend set a_exit_time = #{attendTime} where a_today_date = #{attendDate} and u_idx = #{u_idx}")
    int insertCheckExit(String attendDate,String attendTime, int u_idx);

    @Select("select sum(a_leave) as 'a_leave_cnt', sum(a_late_status) as 'a_late_status_cnt', \n" +
            "       sum(a_absent) as 'a_absent_cnt', sum(a_not_exit) as 'a_not_exit_cnt', count(*) as 'a_real_date_cnt' \n" +
            "       from Attend where u_idx=#{u_idx} and substr(a_today_date,6,7) = #{month}")
    LoadAttendCnt getLoadAttendCnt(int u_idx, int month);
}
