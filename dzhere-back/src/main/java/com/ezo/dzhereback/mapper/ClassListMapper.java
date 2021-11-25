package com.ezo.dzhereback.mapper;
import java.util.List;
import org.apache.ibatis.annotations.*;
import com.ezo.dzhereback.domain.*;
import com.ezo.dzhereback.dto.*;

@Mapper
public interface ClassListMapper {
	// 소속 기관이 연 강의 리스트
	@Select("select ag_name from Agency where ag_idx=#{user.ag_idx}")
	Agency selectAgencyName(@Param("user") final User user);
	
	@Select("select * from Class where ag_idx=#{user.ag_idx}")
	List<ClassInfoDto> selectClassList(@Param("user") final User user);

	// 소속 기관이 연 강의의 수강생 리스트
	@Select("select * from User where ag_idx=#{user.ag_idx} and c_idx=#{user.c_idx}")
	List<UserDto> selectClassStudentList(@Param("user") final UserDto userDto);

}
