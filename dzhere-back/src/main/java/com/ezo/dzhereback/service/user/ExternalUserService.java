package com.ezo.dzhereback.service.user;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ezo.dzhereback.domain.*;
import com.ezo.dzhereback.dto.ExternalSelectDto;
import com.ezo.dzhereback.mapper.user.ExternalUserMapper;

@Service
public class ExternalUserService {
	private final ExternalUserMapper externalUserMapper;
	
	@Autowired
	public ExternalUserService(ExternalUserMapper externalUserMapper) {
		this.externalUserMapper = externalUserMapper;
	}
	
	public Member findUser(String u_phone) {
		return externalUserMapper.findUser(u_phone);
	}

	public void addWifi(External external) {
		externalUserMapper.addWifi(external);
	}
	
	public void removeExternalId(External external) {
		externalUserMapper.removeExternalId(external);
	}
	
	public List<ExternalSelectDto> selectExternal(Member member) {
		return externalUserMapper.selectExternal(member);
	}

}
