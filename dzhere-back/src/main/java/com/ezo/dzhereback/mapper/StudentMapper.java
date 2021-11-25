package com.ezo.dzhereback.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.ezo.dzhereback.domain.Agency;
import com.ezo.dzhereback.domain.User;
import com.ezo.dzhereback.domain.Class;

@Mapper
public interface StudentMapper {
	@Select("select a.ag_name, a.ag_idx from User u join Agency a on u.ag_idx = a.ag_idx where u.u_phone='${u_phone}'")
	Agency getAgName(String u_phone);
	
	@Select("select c.c_idx, c.c_name from User u join Class c on u.c_idx = c.c_idx where u.u_phone='${u_phone}';")
	List<Class> getClassList(String u_phone);
	
}
