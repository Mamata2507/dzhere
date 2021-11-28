package com.ezo.dzhereback.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.ezo.dzhereback.domain.Member;

@Mapper
public interface MyInfoMapper {
	@Select("select u_email, u_phone from User where u_phone='${u_phone}'")
	Member getEmail(String u_phone);
	
	@Update("update User set u_email='${u_email}' where u_phone='${u_phone}'")
	int updateEmail(String u_phone, String u_email);
	
	@Select("select u_pw from User where u_phone='${u_phone}'")
	Member getPw(String u_phone);
	
	@Update("update User set u_pw='${u_pw}' where u_phone='${u_phone}'")
	int updatePw(String u_phone, String u_pw);
	
}
