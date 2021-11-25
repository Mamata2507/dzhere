package com.ezo.dzhereback.controller.user;
import java.util.List;
import org.apache.ibatis.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.ezo.dzhereback.domain.*;
import com.ezo.dzhereback.service.*;
import lombok.extern.slf4j.Slf4j;
import com.ezo.dzhereback.dto.*;
import com.ezo.dzhereback.dto.Result;

@RestController
@CrossOrigin
@Slf4j
public class ExternalController {
	private final ExternalService externalService;
	private final UserService userService;
	
	@Autowired
	public ExternalController(ExternalService externalService, UserService userService) {
		this.externalService = externalService;
		this.userService = userService;
	}
	
	@PostMapping("/api/external/add")
	public String addWifi(@RequestBody ExternalDto externalDto, External external){
		String u_phone = externalDto.getU_phone();
		System.out.println("u_phone:"+u_phone);
		User user = userService.findUser(u_phone); //u_id, c_id 저장
		external.setC_idx(user.getC_idx());
		external.setU_idx(user.getU_idx());
		external.setE_ssid(externalDto.getE_ssid());
		external.setE_bssid(externalDto.getE_bssid());
		external.setE_name(externalDto.getE_name());
		externalService.addWifi(external);
		return "Ok";
	}
	
	@PostMapping("/api/external/delete")
	public String removeExternalId(@RequestBody ExternalDto externalDto, External external){
		String u_phone = externalDto.getU_phone();
		int e_idx = externalDto.getE_idx();
		User user = userService.findUser(u_phone); //u_id, c_id 저장
		external.setC_idx(user.getC_idx());
		external.setU_idx(user.getU_idx());
		external.setE_idx(e_idx);
		externalService.removeExternalId(external);
		return "Ok";
	}
	
	@PostMapping("/api/external/select")
	public Result selectExternal(@RequestBody ExternalDto externalDto){
		String u_phone = externalDto.getU_phone();
		User user = userService.findUser(u_phone); //u_id, c_id 저장
		List<ExternalSelectDto> external = externalService.selectExternal(user);
		System.out.println(external);
		return new Result(external);
	}

}
