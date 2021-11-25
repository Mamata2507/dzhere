package com.ezo.dzhereback.service;

import com.ezo.dzhereback.domain.User;
import com.ezo.dzhereback.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserMapper userMapper;

    @Autowired
    public UserService(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public User findUser(String u_phone) {
		return userMapper.findUser(u_phone);
	}
}
