package com.ezo.dzhereback.service.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.domain.User;
import com.ezo.dzhereback.mapper.user.MyInfoUserMapper;

import io.jsonwebtoken.lang.Assert;

@Service
public class MyInfoUserService {
	private final MyInfoUserMapper myInfoUserMapper;
	
	@Autowired
	public MyInfoUserService(MyInfoUserMapper myInfoUserMapper) {
		this.myInfoUserMapper = myInfoUserMapper;
	}
	
	public User getEmail(String u_phone) {return myInfoUserMapper.getEmail(u_phone);}
	
	public int updateEmail(String u_phone, String u_email) {return myInfoUserMapper.updateEmail(u_phone, u_email);}

    public boolean getCheckResult(final String u_pw, final String u_phone, final PasswordEncoder passwordEncoder) {
    	final User readPhone = myInfoUserMapper.readPhone(u_phone);
        boolean check = passwordEncoder.matches(u_pw, readPhone.getU_pw());
        System.out.println("체크------>"+check);
        return check;
    }	
	
    public int updatePw(final String u_pw, final String u_phone) {
    	BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    	final User readUser = myInfoUserMapper.readPhone(u_phone);
    	readUser.setU_pw(passwordEncoder.encode(u_pw));
    	return myInfoUserMapper.updatePw(readUser.getU_pw(), u_phone);
    }
	
	

}
