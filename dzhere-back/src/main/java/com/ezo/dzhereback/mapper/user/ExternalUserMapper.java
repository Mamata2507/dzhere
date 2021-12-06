package com.ezo.dzhereback.mapper.user;

import java.util.List;

import org.apache.ibatis.annotations.*;
import com.ezo.dzhereback.domain.*;
import com.ezo.dzhereback.dto.ExternalSelectDto;

@Mapper
public interface ExternalUserMapper {
	// u_idx, c_idx 얻기
	@Select("select u_idx, c_idx from User where u_phone=#{u_phone}")
	Member findUser(@Param("u_phone") final String u_phone);

	// 외부 장소 추가
	@Insert("insert into External(e_ssid, e_bssid, e_name, u_idx, c_idx) values(#{e.e_ssid}, #{e.e_bssid}, #{e.e_name}, #{e.u_idx}, #{e.c_idx})")
	void addWifi(@Param("e") final External external);

	// 외부 장소 삭제
	@Delete("delete from External where e_idx=#{e.e_idx} and u_idx=#{e.u_idx} and c_idx=#{e.c_idx}")
    void removeExternalId(@Param("e") final External external);
	
	// 외부 장소 리스트
	@Select("select e_idx, e_ssid, e_bssid, e_name, e_accept from External where u_idx=#{member.u_idx} and c_idx=#{member.c_idx}")
	List<ExternalSelectDto> selectExternal(@Param("member") final Member member);
}
