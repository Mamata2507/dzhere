package com.ezo.dzhereback.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ezo.dzhereback.domain.Agency;
import com.ezo.dzhereback.domain.Class;
import com.ezo.dzhereback.domain.User;
import com.ezo.dzhereback.mapper.StudentMapper;

@Service
public class StudentService {
	private final StudentMapper studentMapper;
	
	@Autowired
	public StudentService(StudentMapper studentMapper) {
		this.studentMapper = studentMapper;
	}
	
	public Agency getAgName(String u_phone) {return studentMapper.getAgName(u_phone);}
	
	public List<Class> getClassList(String u_phone) {return studentMapper.getClassList(u_phone);}
	
	public List<User> getStudentList(int ag_idx, int c_idx) {return studentMapper.getStudentList(ag_idx, c_idx);}
	
	public List<User> getStudentListAll(int ag_idx, int c_idx) {return studentMapper.getStudentListAll(ag_idx, c_idx);}

	public int deleteUser(int u_idx) {return studentMapper.deleteUser(u_idx);}
}
