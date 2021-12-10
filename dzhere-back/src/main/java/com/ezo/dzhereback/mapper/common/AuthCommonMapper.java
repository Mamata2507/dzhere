package com.ezo.dzhereback.mapper.common;

import com.ezo.dzhereback.domain.Member;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface AuthCommonMapper {
    @Select("SELECT * FROM User WHERE u_email=#{u_email}")
    Member findByEmail(@Param("u_email") String u_email);

    @Update("UPDATE User SET u_pw=#{u_pw} WHERE u_idx=#{u_idx}")
    int updatePw(@Param("u_pw") String u_pw, @Param("u_idx") int u_idx);
}
