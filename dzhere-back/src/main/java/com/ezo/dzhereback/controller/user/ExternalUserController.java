package com.ezo.dzhereback.controller.user;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import com.ezo.dzhereback.domain.*;
import com.ezo.dzhereback.service.user.ExternalUserService;
import lombok.extern.slf4j.Slf4j;
import com.ezo.dzhereback.dto.*;
import com.ezo.dzhereback.dto.Result;

@RestController
@CrossOrigin
@Slf4j
public class ExternalUserController {
	private final ExternalUserService externalUserService;

	@Autowired
	public ExternalUserController(ExternalUserService externalUserService) {
		this.externalUserService = externalUserService;
	}
	
	@PostMapping("/api/external/add")
	public Result addWifi(@RequestBody ExternalDto externalDto, External external){
		String u_phone = externalDto.getU_phone();
		System.out.println("u_phone:"+u_phone);
		Member member = externalUserService.findUser(u_phone); //u_id, c_id 저장
		external.setC_idx(member.getC_idx());
		external.setU_idx(member.getU_idx());
		external.setE_ssid(externalDto.getE_ssid());
		external.setE_bssid(externalDto.getE_bssid());
		external.setE_name(externalDto.getE_name());
		externalUserService.addWifi(external);
		List<ExternalSelectDto> externalList = externalUserService.selectExternal(member);
		System.out.println(externalList);
		return new Result(externalList);
	}
	
	@PostMapping("/api/external/delete")
	public Result removeExternalId(@RequestBody ExternalDto externalDto, External external){
		String u_phone = externalDto.getU_phone();
		int e_idx = externalDto.getE_idx();
		Member member = externalUserService.findUser(u_phone); //u_id, c_id 저장
		external.setC_idx(member.getC_idx());
		external.setU_idx(member.getU_idx());
		external.setE_idx(e_idx);
		externalUserService.removeExternalId(external);
		List<ExternalSelectDto> externalList = externalUserService.selectExternal(member);
		return new Result(externalList);
	}
	
	@PostMapping("/api/external/select")
	public Result selectExternal(@RequestBody ExternalDto externalDto, @AuthenticationPrincipal String userId){
		String u_phone = externalDto.getU_phone();
		Member member = externalUserService.findUser(u_phone); //u_id, c_id 저장
		List<ExternalSelectDto> externalList = externalUserService.selectExternal(member);
		System.out.println(externalList);
		return new Result(externalList);
	}

}
