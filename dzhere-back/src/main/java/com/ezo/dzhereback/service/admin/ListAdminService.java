package com.ezo.dzhereback.service.admin;

import com.ezo.dzhereback.domain.Agency;
import com.ezo.dzhereback.domain.Lesson;
import com.ezo.dzhereback.domain.User;
import com.ezo.dzhereback.mapper.admin.ListAdminMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListAdminService {
	private final ListAdminMapper studentMapper;
	
	@Autowired
	public ListAdminService(ListAdminMapper studentMapper) {
		this.studentMapper = studentMapper;
	}
	
	public Agency getAgName(String u_phone) {return studentMapper.getAgName(u_phone);}
	
	public int getAgIdx(String u_phone) {return studentMapper.getAgIdx(u_phone);}
	
	public List<Lesson> getClassList(int ag_idx) {return studentMapper.getClassList(ag_idx);}
	
	public List<User> getStudentList(int ag_idx, int c_idx) {return studentMapper.getStudentList(ag_idx, c_idx);}
	
	public List<User> getStudentListAll(int ag_idx, int c_idx) {return studentMapper.getStudentListAll(ag_idx, c_idx);}

	public List<User> getTeacherList(int ag_idx, int c_idx) {return studentMapper.getTeacherList(ag_idx, c_idx);}
	
	public List<User> getTeacherListAll(int ag_idx, int c_idx) {return studentMapper.getTeacherListAll(ag_idx, c_idx);}

	public int deleteUser(int u_idx) {return studentMapper.deleteUser(u_idx);}
	
	public int insertUser(int ag_idx, int c_idx, String u_name, String u_phone, int u_auth) {return studentMapper.insertUser(ag_idx, c_idx, u_name, u_phone, u_auth);}
	
	public int countUser(String u_phone) {return studentMapper.countUser(u_phone);}
	
	public User getStudentInfo(int u_idx) {return studentMapper.getStudentInfo(u_idx);}
	
	public int updateUser(int u_idx, int c_idx, String u_name, String u_phone) {return studentMapper.updateUser(u_idx, c_idx, u_name, u_phone);}
	
	
}
