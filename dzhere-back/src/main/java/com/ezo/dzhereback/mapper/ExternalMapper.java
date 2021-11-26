package com.ezo.dzhereback.mapper;
import java.util.List;
import org.apache.ibatis.annotations.*;
import com.ezo.dzhereback.domain.*;
import com.ezo.dzhereback.dto.ExternalSelectDto;

@Mapper
public interface ExternalMapper {
	// 외부 장소 추가
	@Insert("insert into External(e_ssid, e_bssid, e_name, u_idx, c_idx) values(#{e.e_ssid}, #{e.e_bssid}, #{e.e_name}, #{e.u_idx}, #{e.c_idx})")
	void addWifi(@Param("e") final External external);

	// 외부 장소 삭제
	@Delete("delete from External where e_idx=#{e.e_idx} and u_idx=#{e.u_idx} and c_idx=#{e.c_idx}")
    void removeExternalId(@Param("e") final External external);
	
	// 외부 장소 리스트 (검색 조건 : 강의명, 수강생명)
	@Select("select e_idx, e_ssid, e_bssid, e_name, e_accept from External where u_idx=#{user.u_idx} and c_idx=#{user.c_idx}")
	List<ExternalSelectDto> selectExternal(@Param("user") final User user);
	
//	// 외부 장소 리스트 (검색 조건 : 강의명)
//	@Select("select * from External where c_idx=#{user.c_idx}")
//	List<ExternalSelectDto> selectExternal(@Param("user") final User user);
}
