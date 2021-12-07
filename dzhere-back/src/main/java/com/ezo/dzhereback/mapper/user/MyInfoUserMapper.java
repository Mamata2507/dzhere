package com.ezo.dzhereback.mapper.user;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.ezo.dzhereback.domain.Lessontime;
import com.ezo.dzhereback.domain.User;
@Mapper
public interface MyInfoUserMapper {
	@Select("select u_email, u_phone from User where u_phone='${u_phone}'")
	User getEmail(String u_phone);

	@Update("update User set u_email='${u_email}' where u_phone='${u_phone}'")
	int updateEmail(String u_phone, String u_email);

	@Select("select * from User where u_phone='${u_phone}'")
	User readPhone(String u_phone);

	@Update("update User set u_pw='${u_pw}' where u_phone='${u_phone}'")
	int updatePw(String u_pw, String u_phone);

	@Select("select ct.ct_day, hour(ct_start_time) as ct_start_hour, "
			+ "minute(date_sub(ct.ct_start_time, interval 10 minute)) as ct_start_minute, "
			+ "hour(ct_end_time) as ct_end_hour, "
			+ "minute(date_sub(ct.ct_end_time, interval 10 minute)) as ct_end_minute "
			+ "from User u join Classtime ct on u.c_idx = ct.c_idx "
			+ "where u_phone='${u_phone}'")
	Lessontime getClassTime(String u_phone);


}