package com.ezo.dzhereback.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.mapper.MyInfoMapper;

@Service
public class MyInfoService {
	private final MyInfoMapper myInfoMapper;
	
	@Autowired
	public MyInfoService(MyInfoMapper myInfoMapper) {
		this.myInfoMapper = myInfoMapper;
	}
	
	public Member getEmail(String u_phone) {return myInfoMapper.getEmail(u_phone);}
	
	public int updateEmail(String u_phone, String u_email) {return myInfoMapper.updateEmail(u_phone, u_email);}


}
