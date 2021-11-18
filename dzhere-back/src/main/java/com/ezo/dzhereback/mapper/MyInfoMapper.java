package com.ezo.dzhereback.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.ezo.dzhereback.domain.User;

@Mapper
public interface MyInfoMapper {
	@Select("select u_email, u_phone from User where u_phone=${u_phone}")
	User getEmail(String u_phone);
}
