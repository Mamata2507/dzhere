package com.ezo.dzhereback.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ezo.dzhereback.domain.*;
import com.ezo.dzhereback.dto.ExternalSelectDto;
import com.ezo.dzhereback.mapper.ExternalMapper;

@Service
public class ExternalService {
	private final ExternalMapper externalMapper;
	
	@Autowired
	public ExternalService(ExternalMapper externalMapper) {
		this.externalMapper = externalMapper;
	}

	public void addWifi(External external) {
		externalMapper.addWifi(external);
	}
	
	public void removeExternalId(External external) {
		externalMapper.removeExternalId(external);
	}
	
	public List<ExternalSelectDto> selectExternal(User user) {
		return externalMapper.selectExternal(user);
	}

}
