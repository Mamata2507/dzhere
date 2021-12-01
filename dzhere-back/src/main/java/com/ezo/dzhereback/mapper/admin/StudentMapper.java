package com.ezo.dzhereback.mapper.admin;

import com.ezo.dzhereback.domain.Agency;
import com.ezo.dzhereback.domain.Lesson;
import com.ezo.dzhereback.domain.User;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface StudentMapper {
	@Select("select a.ag_name, a.ag_idx from User u join Agency a on u.ag_idx = a.ag_idx where u.u_phone='${u_phone}'")
    Agency getAgName(String u_phone);
	
	@Select("select c.c_idx, c.c_name from User u join Class c on u.c_idx = c.c_idx where u.u_phone='${u_phone}';")
	List<Lesson> getClassList(String u_phone);
	
	@Select("select u_idx, u_name, u_phone, u_accept from User where ag_idx='${ag_idx}' and c_idx='${c_idx}';")
	List<User> getStudentList(int ag_idx, int c_idx);
	
	@Select("select u_idx, u_name, u_phone, u_accept from User;")
	List<User> getStudentListAll(int ag_idx, int c_idx);
	
	@Delete("delete from User where u_idx='${u_idx}'")
	int deleteUser(int u_idx);
	
}
