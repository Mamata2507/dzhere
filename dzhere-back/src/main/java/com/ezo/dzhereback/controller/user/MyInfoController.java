package com.ezo.dzhereback.controller.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ezo.dzhereback.domain.User;
import com.ezo.dzhereback.dto.MyInfoDto;
import com.ezo.dzhereback.dto.Result;
import com.ezo.dzhereback.service.MyInfoService;

@RestController
@CrossOrigin
public class MyInfoController {
	private final MyInfoService myInfoService;
	
	@Autowired
	public MyInfoController(MyInfoService myInfoService) {
		this.myInfoService = myInfoService;
	}
	
	@GetMapping("/api/getEmail/{u_phone}")
	public Result getEmail(@PathVariable("u_phone") String u_phone) {
		System.out.println(u_phone);
		User email = myInfoService.getEmail(u_phone);
		MyInfoDto result = MyInfoDto.builder()
				.u_phone(email.getU_phone())
				.u_email(email.getU_email())
				.build();
		
		return new Result(result);
	}
}
