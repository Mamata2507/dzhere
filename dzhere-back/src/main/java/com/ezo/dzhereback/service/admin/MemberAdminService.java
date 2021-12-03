package com.ezo.dzhereback.service.admin;
import com.ezo.dzhereback.domain.User;
import com.ezo.dzhereback.mapper.admin.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberAdminService {
    private final UserMapper userMapper;

    @Autowired
    public MemberAdminService(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public User findUser(String u_phone) {
		return userMapper.findUser(u_phone);
	}
}
