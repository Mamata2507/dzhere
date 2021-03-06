package com.ezo.dzhereback.mapper.admin;

import com.ezo.dzhereback.domain.Agency;
import com.ezo.dzhereback.domain.Lesson;
import com.ezo.dzhereback.domain.User;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ListAdminMapper {
	@Select("select a.ag_name, a.ag_idx from User u join Agency a on u.ag_idx = a.ag_idx where u.u_phone='${u_phone}'")
    Agency getAgName(String u_phone);
	
	@Select("select a.ag_idx from User u join Agency a on u.ag_idx = a.ag_idx where u.u_phone='${u_phone}'")
	int getAgIdx(String u_phone);
	
	@Select("select c.c_idx, c.c_name from Agency a join Class c on a.ag_idx = c.ag_idx where a.ag_idx='${ag_idx}';")
	List<Lesson> getClassList(int ag_idx);
	
	@Select("select u_idx, u_name, u_phone, u_accept from User where ag_idx='${ag_idx}' and c_idx='${c_idx}' and u_auth=1;")
	List<User> getStudentList(int ag_idx, int c_idx);
	
	@Select("select u_idx, u_name, u_phone, u_accept from User where u_auth=1 and ag_idx='${ag_idx}'")
	List<User> getStudentListAll(int ag_idx, int c_idx);
	
	@Select("select u_idx, u_name, u_phone, u_accept from User where ag_idx='${ag_idx}' and c_idx='${c_idx}' and u_auth=2;")
	List<User> getTeacherList(int ag_idx, int c_idx);
	
	@Select("select u_idx, u_name, u_phone, u_accept from User where u_auth=2 and ag_idx='${ag_idx}';")
	List<User> getTeacherListAll(int ag_idx, int c_idx);
	
	@Delete("delete from User where u_idx='${u_idx}'")
	int deleteUser(int u_idx);
	
	@Insert("insert into User(u_phone, u_name, ag_idx, c_idx, u_auth) values ('${u_phone}', '${u_name}', '${ag_idx}', '${c_idx}', '${u_auth}');")
	int insertUser(int ag_idx, int c_idx, String u_name, String u_phone, int u_auth);
	
	@Select("select count(*) from User where u_phone='${u_phone}';")
	int countUser(String u_phone);
	
	@Select("select u_phone, u_name, c_idx from User where u_idx='${u_idx}';")
	User getStudentInfo(int u_idx);
	
	@Update("update User set u_phone='${u_phone}', u_name='${u_name}', c_idx='${c_idx}' where u_idx='${u_idx}';")
	int updateUser(int u_idx, int c_idx, String u_name, String u_phone);
	
}
