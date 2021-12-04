package com.ezo.dzhereback.service.admin;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ezo.dzhereback.domain.*;
import com.ezo.dzhereback.dto.*;
import com.ezo.dzhereback.mapper.admin.LessonAdminMapper;

@Service
public class LessonAdminService {
	private final LessonAdminMapper classMapper;
	
	@Autowired
	public LessonAdminService(LessonAdminMapper classMapper) {
		this.classMapper = classMapper;
	}
	
	public AgencyDto selectAgencyName(String u_phone){
		return classMapper.selectAgencyName(u_phone);
	}
	
	public List<LessonDto> selectClassList(User user) {
		return classMapper.selectClassList(user);
	}

	public List<UserDto> selectClassStudentList(UserDto userDto) {
		return classMapper.selectClassStudentList(userDto);
	}
//	
	public List<LessontimeDto> selectClassTimeList(UserDto userdto) {
		return classMapper.selectClassTimeList(userdto);
	}
	
	public List<LessonlocationDto> selectClassLocationList(UserDto userdto) {
		return classMapper.selectClassLocationList(userdto);
	}
	
	public List<ExternalDto> selectClassExternalList(UserDto userdto) {
		return classMapper.selectClassExternalList(userdto);
	}
	
	public List<InternalDto> selectClassInternalList(UserDto userdto) {
		return classMapper.selectClassInternalList(userdto);
	}

	public void insertClassInternal(UserDto userdto) {
		classMapper.insertClassInternal(userdto);
	}
	
	public void addClass(LessonDto classinfodto) {
		classMapper.addClass(classinfodto);
	}
//	
	public void deleteClassTime(int c_idx) {
		classMapper.deleteClassTime(c_idx);
	}
	
	public void deleteClassName(int c_idx) {
		classMapper.deleteClassName(c_idx);
	}
	
	public void deleteClasslocation(int c_idx) {
		classMapper.deleteClasslocation(c_idx);
	}
	
	public void deleteClassInternal(int c_idx) {
		classMapper.deleteClassInternal(c_idx);
	}
	
	
	public void deleteExternalList(int e_idx) {
		classMapper.deleteExternalList(e_idx);
	}
	public void updateClassInternal(InternalDto internalDto) {
		classMapper.updateClassInternal(internalDto);
	}
	
	public void updateClassLocation(InternalDto internalDto) {
		classMapper.updateClassLocation(internalDto);
	}
//	public void addClass(ClasstimeDto classtimedto) {
//		classMapper.addClass(classtimedto);
//	}
	
	public void updateClasstime(LessontimeDto classtimeDto) {
		classMapper.updateClasstime(classtimeDto);
	}
	
	public void updateExternalAccept(int e_idx) {
		classMapper.updateExternalAccept(e_idx);
	}
	
	public int selectClassId(LessonDto classinfodto) {
		return classMapper.selectClassId(classinfodto);
	}
//	public int selectClassId(ClasstimeDto classtimedto) {
//		return classMapper.selectClassId(classtimedto);
//	}
	
	public void addClasstime(LessontimeDto classtimedto) {
		classMapper.addClasstime(classtimedto);
	}

	public void addClasslocation(int c_idx) {
		classMapper.addClasslocation(c_idx);
	}
	
	public void addClassLocation(InternalDto internalDto) {
		classMapper.addClassLocation(internalDto);
	}
	
	public void addClassInternal(InternalDto internalDto) {
		classMapper.addClassInternal(internalDto);
	}
//	public void removeExternalId(External external) {
//		externalMapper.removeExternalId(external);
//	}
//	
//	public List<ExternalSelectDto> selectExternal(User user) {
//		return externalMapper.selectExternal(user);
//	}
}

