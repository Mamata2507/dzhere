package com.ezo.dzhereback.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ezo.dzhereback.domain.*;
import com.ezo.dzhereback.dto.*;
import com.ezo.dzhereback.mapper.ClassListMapper;

@Service
public class ClassService {
	private final ClassListMapper classMapper;
	
	@Autowired
	public ClassService(ClassListMapper classMapper) {
		this.classMapper = classMapper;
	}
	
	public AgencyDto selectAgencyName(String u_phone){
		return classMapper.selectAgencyName(u_phone);
	}
	
	public List<ClassInfoDto> selectClassList(User user) {
		return classMapper.selectClassList(user);
	}

	public List<UserDto> selectClassStudentList(UserDto userDto) {
		return classMapper.selectClassStudentList(userDto);
	}
//	
	public List<ClasstimeDto> selectClassTimeList(UserDto userdto) {
		return classMapper.selectClassTimeList(userdto);
	}
	
	public List<ClasslocationDto> selectClassLocationList(UserDto userdto) {
		return classMapper.selectClassLocationList(userdto);
	}
	
	public List<ExternalDto> selectClassExternalList(UserDto userdto) {
		return classMapper.selectClassExternalList(userdto);
	}
	
	public List<InternalDto> selectClassInternalList(UserDto userdto) {
		return classMapper.selectClassInternalList(userdto);
	}
	
//	public void removeExternalId(External external) {
//		externalMapper.removeExternalId(external);
//	}
//	
//	public List<ExternalSelectDto> selectExternal(User user) {
//		return externalMapper.selectExternal(user);
//	}

}
