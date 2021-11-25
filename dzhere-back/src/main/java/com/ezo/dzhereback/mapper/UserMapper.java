package com.ezo.dzhereback.mapper;

import com.ezo.dzhereback.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {
	// u_idx, c_idx 얻기
	@Select("select * from User where u_phone=#{u_phone}")
	User findUser(@Param("u_phone") final String u_phone);
}
