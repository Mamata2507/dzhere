package com.ezo.dzhereback.mapper;

import com.ezo.dzhereback.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {

    @Select("select u_name from User where u_idx=4")
    User findKre();
}
