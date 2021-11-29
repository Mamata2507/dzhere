package com.ezo.dzhereback.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.domain.User;
import com.ezo.dzhereback.mapper.MyInfoMapper;

import io.jsonwebtoken.lang.Assert;

@Service
public class MyInfoService {
	private final MyInfoMapper myInfoMapper;
	
	@Autowired
	public MyInfoService(MyInfoMapper myInfoMapper) {
		this.myInfoMapper = myInfoMapper;
	}
	
	public User getEmail(String u_phone) {return myInfoMapper.getEmail(u_phone);}
	
	public int updateEmail(String u_phone, String u_email) {return myInfoMapper.updateEmail(u_phone, u_email);}

    public boolean getCheckResult(final String u_pw, final String u_phone, final PasswordEncoder passwordEncoder) {
    	final User readPhone = myInfoMapper.readPhone(u_phone);
        boolean check = passwordEncoder.matches(u_pw, readPhone.getU_pw());
        System.out.println("체크------>"+check);
        return check;
    }	
	
    public int updatePw(final String u_pw, final String u_phone) {
    	BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    	final User readUser = myInfoMapper.readPhone(u_phone);
    	readUser.setU_pw(passwordEncoder.encode(u_pw));
    	return myInfoMapper.updatePw(readUser.getU_pw(), u_phone);
    }
	
//	public Member getPw(String u_phone) {return myInfoMapper.getPw(u_phone);}
//	
//	public int updatePw(String u_phone, String u_pw) {return myInfoMapper.updatePw(u_phone, u_pw);}
	

}
