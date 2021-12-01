package com.ezo.dzhereback.service.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.mapper.user.MyInfoUserMapper;

@Service
public class MyInfoUserService {
	private final MyInfoUserMapper myInfoUserMapper;
	
	@Autowired
	public MyInfoUserService(MyInfoUserMapper myInfoUserMapper) {
		this.myInfoUserMapper = myInfoUserMapper;
	}
	
	public Member getEmail(String u_phone) {return myInfoUserMapper.getEmail(u_phone);}
	
	public int updateEmail(String u_phone, String u_email) {return myInfoUserMapper.updateEmail(u_phone, u_email);}

	public Member getPw(String u_phone) {return myInfoUserMapper.getPw(u_phone);}
	
	public int updatePw(String u_phone, String u_pw) {return myInfoUserMapper.updatePw(u_phone, u_pw);}
	

}
