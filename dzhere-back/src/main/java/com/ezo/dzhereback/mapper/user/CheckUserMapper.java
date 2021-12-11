package com.ezo.dzhereback.mapper.user;

import com.ezo.dzhereback.domain.AttendList;
import com.ezo.dzhereback.domain.LoadAttendCnt;
import com.ezo.dzhereback.domain.TodayAttendList;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface CheckUserMapper {
    @Select("select u_idx from User where u_phone = #{u_phone}")
    int getUidx(String u_phone);

    @Select("select u_name from User where u_phone = #{u_phone}")
    String getUserName(String u_phone);

    //    @Insert("insert into Attend(a_attend_time,u_idx) values(#{attendTime}, #{u_idx})")
//    int insertCheck(String attendTime, int u_idx);
    @Insert("insert into Attend(a_attend_time, a_late_status, u_idx)\n" +
            "values(now() ,if((DATE_FORMAT(#{attendTime},'%H:%i') > " +
            "time_format((select ct_attend_endtime from Classtime where c_idx = #{c_idx}),'%H:%i')), 1, 0), #{u_idx})")
    int insertCheck(String attendTime, int u_idx, int c_idx);

    //  update Attend set a_exit_time = #{attendTime}, a_leave = 1 where a_today_date = #{attendDate} and u_idx = #{u_idx}
    @Update("update Attend \n" +
            "set a_leave = 1, a_exit_time = #{attendTime}, a_result_time = timediff(DATE_FORMAT(now(),'%H:%i:%S'), DATE_FORMAT(a_attend_time,'%H:%i:%S')) \n" +
            "where a_today_date = #{attendDate} and u_idx = #{u_idx}")
    int insertCheckLeave(String attendDate, String attendTime, int u_idx);

    @Update("update Attend set a_exit_time = #{attendTime}, a_result_time = timediff(DATE_FORMAT(now(),'%H:%i:%S'), DATE_FORMAT(a_attend_time,'%H:%i:%S'))\n" +
            "where a_today_date = #{attendDate} and u_idx = #{u_idx}")
    int insertCheckExit(String attendDate, String attendTime, int u_idx);

    // 외출 , 외출종료
    @Update("update Attend set a_start_outgo = #{attendTime}, a_outgo_status=1 where a_today_date = #{attendDate} and u_idx = #{u_idx}")
    int insertOutgo(String attendDate, String attendTime, int u_idx);

    @Update("update Attend set a_end_outgo = #{attendTime}, a_outgo_end_status=1 where a_today_date = #{attendDate} and u_idx = #{u_idx}")
    int insertOutgoEnd(String attendDate, String attendTime, int u_idx);


    @Select("select count(*) as 'a_total_cnt', sum(a_leave) as 'a_leave_cnt', sum(a_late_status) as 'a_late_status_cnt', \n" +
            "       sum(a_absent) as 'a_absent_cnt', sum(a_not_exit) as 'a_not_exit_cnt', count(*) as 'a_real_date_cnt' \n" +
            "       from Attend where u_idx=#{u_idx} and substr(a_today_date,6,7) = #{month}")
    LoadAttendCnt getLoadAttendCnt(int u_idx, int month);

    @Select("select count(*) as 'a_total_cnt', sum(a_leave) as 'a_leave_cnt', sum(a_late_status) as 'a_late_status_cnt', \n" +
            "       sum(a_absent) as 'a_absent_cnt', sum(a_not_exit) as 'a_not_exit_cnt', count(*) as 'a_real_date_cnt' \n" +
            "       from Attend where u_idx=#{u_idx} ")
    LoadAttendCnt getLoadAllAttendCnt(int u_idx);

    @Select("select a_today_date, DATE_FORMAT(a_attend_time,'%H:%i') as 'a_attend_time', DATE_FORMAT(a_exit_time,'%H:%i') as 'a_exit_time', \n" +
            "a_result_time, if((a_absent=1),'결석','출석') AS 'a_attend_state'\n" +
            "from Attend where u_idx = #{u_idx} and substr(a_today_date,6,7) = #{month}")
    List<AttendList> getLoadAttendList(int u_idx, int month);

    @Select("select a_today_date, DATE_FORMAT(a_attend_time,'%H:%i') as 'a_attend_time', DATE_FORMAT(a_exit_time,'%H:%i') as 'a_exit_time', \n" +
            "a_result_time, if((a_absent=1),'결석','출석') AS 'a_attend_state'\n" +
            "from Attend where u_idx = #{u_idx} ")
    List<AttendList> getLoadAllAttendList(int u_idx);

    @Select("select count(*) from Internal where ag_idx = #{ag_idx} and c_idx = #{c_idx} and i_bssid IN(#{bssid})")
    int checkInternalWifiInfo(String bssid, int ag_idx, int c_idx);

    @Select("select count(*) from External where u_idx = #{u_idx} and c_idx = #{c_idx} and e_accept = #{e_accept} and e_bssid IN(#{bssid})")
    int checkExternalWifiInfo(String bssid, int u_idx, int c_idx, int e_accept);

    @Select("select a_leave, a_attend_time, a_exit_time, a_outgo_status, a_outgo_end_status, a_start_outgo, a_end_outgo from Attend where a_today_date = #{today} and u_idx = #{u_idx} order by a_idx desc limit 1")
    TodayAttendList getLoadTodayAttendList(int u_idx, String today);
}
