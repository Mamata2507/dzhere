package com.ezo.dzhereback.controller.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.dto.MyInfoDto;
import com.ezo.dzhereback.dto.Result;
import com.ezo.dzhereback.service.user.MyInfoUserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@CrossOrigin
@Slf4j
public class MyInfoUserController {
	private final MyInfoUserService myInfoUserService;
	
	@Autowired
	public MyInfoUserController(MyInfoUserService myInfoUserService) {
		this.myInfoUserService = myInfoUserService;
	}
	
	@GetMapping("/api/getEmail/{u_phone}")
	public Result getEmail(@PathVariable("u_phone") String u_phone) {
		System.out.println("로컬폰---->"+u_phone);
		Member email = myInfoUserService.getEmail(u_phone);
		MyInfoDto result = MyInfoDto.builder()
				.u_phone(email.getU_phone())
				.u_email(email.getU_email())
				.build();
		System.out.println("완료"+result);
		return new Result(result);
	}
		
	@PostMapping("/api/updateEmail/{u_phone}/{u_email}")
	public Result updateEmail(@PathVariable("u_phone") String u_phone,
							  @PathVariable("u_email") String u_email) {
		System.out.println("로컬폰------->"+u_phone);
		System.out.println("로컬이메일---->"+u_email);
		int updateResult = myInfoUserService.updateEmail(u_phone, u_email);
		if(updateResult>0) {
			Member email = myInfoUserService.getEmail(u_phone);
			MyInfoDto result = MyInfoDto.builder()
					.u_phone(email.getU_phone())
					.u_email(email.getU_email())
					.build();
			return new Result(result);
		} else {
			System.out.println("업데이트 실패");
			return new Result(null);
		}
	}
	
	@GetMapping("/api/getPw/{u_phone}")
	public Result getPw(@PathVariable("u_phone") String u_phone) {
		System.out.println("로컬폰---->"+u_phone);
		Member pw = myInfoUserService.getPw(u_phone);
		MyInfoDto result = MyInfoDto.builder()
				.u_pw(pw.getU_pw())
				.build();
		System.out.println("완료"+result);
		return new Result(result);
	}
	
	@PostMapping("/api/updatePw/{u_phone}/{u_pw}")
	public Result updatePw(@PathVariable("u_phone") String u_phone,
							  @PathVariable("u_pw") String u_pw) {
		System.out.println("로컬폰------->"+u_phone);
		System.out.println("로컬패스워드---->"+u_pw);
		int updateResult = myInfoUserService.updatePw(u_phone, u_pw);
		if(updateResult>0) {
			Member pw = myInfoUserService.getPw(u_phone);
			MyInfoDto result = MyInfoDto.builder()
					.u_phone(pw.getU_phone())
					.u_pw(pw.getU_pw())
					.build();
			return new Result(result);
		} else {
			System.out.println("업데이트 실패");
			return new Result(null);
		}
	}
}
