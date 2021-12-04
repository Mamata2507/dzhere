package com.ezo.dzhereback.mapper.admin;

import com.ezo.dzhereback.domain.Member;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface AuthAdminMapper {
    @Select("select * from User where u_phone = #{u_phone} and u_auth = 0")
    Member findByPhone(@Param("u_phone") String u_phone);

    @Insert("insert into " +
            "User(u_phone, u_pw, u_email, u_name, u_accept, u_auth, c_idx, ag_idx) " +
            "values(#{member.u_phone}, #{member.u_pw}, #{member.u_email}, #{member.u_name}, 1, 0, ${member.c_idx}, ${member.ag_idx})")
    int join(@Param("member") Member member);

    @Select("select u_idx, u_phone, u_email, u_name, c_idx, ag_idx from User where u_phone=#{u_phone} and u_auth = 0")
    Member findRegisteredAdminByPhone(@Param("u_phone") String u_phone);
}
