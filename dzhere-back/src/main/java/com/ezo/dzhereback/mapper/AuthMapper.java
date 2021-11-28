package com.ezo.dzhereback.mapper;

import com.ezo.dzhereback.domain.Member;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface AuthMapper {
    @Update("update User set u_pw=#{member.u_pw}, u_email=#{member.u_email}, u_accept=1 where u_phone=#{member.u_phone}")
    int join(@Param("member") Member member);

    @Select("select * from User where u_phone = #{u_phone}")
    Member findByPhone(@Param("u_phone") String u_phone);

    @Select("select if(count(*) = 1, 1, 0) from User where u_phone=#{u_phone}")
    boolean existsByPhone(@Param("u_phone") String u_phone);

    @Select("select u_accept from User where u_phone=#{u_phone}")
    int findAcceptByPhone(@Param("u_phone") String u_phone);

    @Select("select u_auth from User where u_phone=#{u_phone}")
    int findAuthByPhone(@Param("u_phone") String u_phone);

    @Select("select u_idx, u_phone, u_email from User where u_phone=#{u_phone}")
    Member findRegisteredMemberByPhone(@Param("u_phone") String u_phone);

    @Select("select * from User where u_phone=#{u_phone} and u_pw=#{u_pw}")
    Member findByPhoneAndPassword(@Param("u_phone") String u_phone, @Param("u_pw") String u_pw);
}
