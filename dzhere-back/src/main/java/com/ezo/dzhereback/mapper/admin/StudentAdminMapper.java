package com.ezo.dzhereback.mapper.admin;

import com.ezo.dzhereback.domain.Agency;
import com.ezo.dzhereback.domain.Class;
import com.ezo.dzhereback.domain.User;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface StudentAdminMapper {
	@Select("select a.ag_name, a.ag_idx from User u join Agency a on u.ag_idx = a.ag_idx where u.u_phone='${u_phone}'")
    Agency getAgName(String u_phone);
	
	@Select("select c.c_idx, c.c_name from User u join Class c on u.c_idx = c.c_idx where u.u_phone='${u_phone}';")
	List<Class> getClassList(String u_phone);
	
	@Select("select u_idx, u_name, u_phone, u_accept from User where ag_idx='${ag_idx}' and c_idx='${c_idx}';")
	List<User> getStudentList(int ag_idx, int c_idx);
	
	@Select("select u_idx, u_name, u_phone, u_accept from User;")
	List<User> getStudentListAll(int ag_idx, int c_idx);
	
	@Delete("delete from User where u_idx='${u_idx}'")
	int deleteUser(int u_idx);
	
	@Insert("insert into User(u_phone, u_name, ag_idx, c_idx, u_auth) values ('${u_phone}', '${u_name}', '${ag_idx}', '${c_idx}', 1);")
	int insertUser(int ag_idx, int c_idx, String u_name, String u_phone);
	
	@Select("select count(*) from User where u_phone='${u_phone}';")
	int countUser(String u_phone);
}
