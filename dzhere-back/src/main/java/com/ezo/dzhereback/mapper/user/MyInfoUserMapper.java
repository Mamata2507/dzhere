package com.ezo.dzhereback.mapper.user;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.domain.User;

@Mapper
<<<<<<< HEAD:dzhere-back/src/main/java/com/ezo/dzhereback/mapper/user/MyInfoUserMapper.java
public interface MyInfoUserMapper {
=======
public interface MyInfoMapper {

>>>>>>> 625e7ac4bb41dd28b7e9e49badccd96b8c38d036:dzhere-back/src/main/java/com/ezo/dzhereback/mapper/MyInfoMapper.java
	@Select("select u_email, u_phone from User where u_phone='${u_phone}'")
	User getEmail(String u_phone);
	
	@Update("update User set u_email='${u_email}' where u_phone='${u_phone}'")
	int updateEmail(String u_phone, String u_email);
	
    @Select("select * from User where u_phone='${u_phone}'")
    User readPhone(String u_phone);	
    
	@Update("update User set u_pw='${u_pw}' where u_phone='${u_phone}'")
	int updatePw(String u_pw, String u_phone);
	
//	@Select("select u_pw from User where u_phone='${u_phone}'")
//	Member getPw(String u_phone);
//	

	
}
