package com.ezo.dzhereback.mapper;
import java.util.List;
import org.apache.ibatis.annotations.*;
import com.ezo.dzhereback.domain.*;
import com.ezo.dzhereback.dto.*;

@Mapper
public interface ClassListMapper {
	// 소속 기관 및 관리자 정보
	@Select("select u.u_idx, u.u_phone, u.u_pw, u.u_email, u.u_alarm, u.u_name, u.u_accept, u.u_auth, a.ag_idx, a.ag_name from User as u join Agency as a on a.ag_idx=u.ag_idx and u.u_phone=#{u_phone}")
	AgencyDto selectAgencyName(@Param("u_phone") final String u_phone);

	// 소속 기관이 연 강의 리스트
	@Select("select * from Class where ag_idx=#{user.ag_idx}")
	List<ClassInfoDto> selectClassList(@Param("user") final User user);

	// 소속 기관이 연 강의의 수강생 리스트
	@Select("select * from User where ag_idx=#{user.ag_idx} and c_idx=#{user.c_idx}")
	List<UserDto> selectClassStudentList(@Param("user") final UserDto userDto);

	// 소속 기관이 연 강의 장소 리스트
	@Select("select c.c_idx, c.c_name, cl.cl_idx, cl.cl_name from Class as c join Classlocation as cl on c.c_idx = cl.c_idx where ag_idx=#{user.ag_idx}")
	List<ClasslocationDto> selectClassLocationList(@Param("user") final UserDto userDto);

	// 소속 기관이 연 강의 정보(classtime) 리스트
	@Select("select ct.ct_idx, ct.ct_day, ct.ct_start_time, ct.ct_end_time, ct.ct_attend_starttime, ct.ct_attend_endtime, ct.ct_start_date, ct.ct_end_date, ct.ct_break_start, ct.ct_break_end, cl.c_idx, cl.c_name from Classtime as ct join Class as cl on cl.c_idx=ct.c_idx and cl.ag_idx=#{user.ag_idx}")
	List<ClasstimeDto> selectClassTimeList(@Param("user") final UserDto userDto);

	//	// 소속 기관이 연 강의 정보(classtime) 리스트
	//	@Select("select * from Classtime where c_idx in (select c_idx from Class where ag_idx=#{user.ag_idx})")
	//	List<ClasstimeDto> selectClassTimeList(@Param("user") final UserDto userDto);
}
