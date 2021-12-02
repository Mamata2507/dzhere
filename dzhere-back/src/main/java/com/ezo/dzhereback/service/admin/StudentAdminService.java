package com.ezo.dzhereback.service.admin;

import com.ezo.dzhereback.domain.Agency;
import com.ezo.dzhereback.domain.Lesson;
import com.ezo.dzhereback.domain.User;
import com.ezo.dzhereback.mapper.admin.StudentAdminMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentAdminService {
	private final StudentAdminMapper studentMapper;
	
	@Autowired
	public StudentAdminService(StudentAdminMapper studentMapper) {
		this.studentMapper = studentMapper;
	}
	
	public Agency getAgName(String u_phone) {return studentMapper.getAgName(u_phone);}
	
	public List<Lesson> getClassList(String u_phone) {return studentMapper.getClassList(u_phone);}
	
	public List<User> getStudentList(int ag_idx, int c_idx) {return studentMapper.getStudentList(ag_idx, c_idx);}
	
	public List<User> getStudentListAll(int ag_idx, int c_idx) {return studentMapper.getStudentListAll(ag_idx, c_idx);}

	public int deleteUser(int u_idx) {return studentMapper.deleteUser(u_idx);}
	
	public int insertUser(int ag_idx, int c_idx, String u_name, String u_phone) {return studentMapper.insertUser(ag_idx, c_idx, u_name, u_phone);}
	
	public int countUser(String u_phone) {return studentMapper.countUser(u_phone);}
	
	public User getStudentInfo(int u_idx) {return studentMapper.getStudentInfo(u_idx);}
	
	public int updateUser(int u_idx, int c_idx, String u_name, String u_phone) {return studentMapper.updateUser(u_idx, c_idx, u_name, u_phone);}
	
	
}
