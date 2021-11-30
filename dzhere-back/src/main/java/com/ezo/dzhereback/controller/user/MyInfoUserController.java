package com.ezo.dzhereback.controller.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
<<<<<<< HEAD:dzhere-back/src/main/java/com/ezo/dzhereback/controller/user/MyInfoUserController.java
=======
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
>>>>>>> 625e7ac4bb41dd28b7e9e49badccd96b8c38d036:dzhere-back/src/main/java/com/ezo/dzhereback/controller/user/MyInfoController.java
import org.springframework.web.bind.annotation.RestController;

import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.domain.User;
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
	
	private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

	@GetMapping("/api/getEmail/{u_phone}")
	public Result getEmail(@PathVariable("u_phone") String u_phone) {
		System.out.println("로컬폰---->"+u_phone);
<<<<<<< HEAD:dzhere-back/src/main/java/com/ezo/dzhereback/controller/user/MyInfoUserController.java
		Member email = myInfoUserService.getEmail(u_phone);
=======
		User email = myInfoService.getEmail(u_phone);
>>>>>>> 625e7ac4bb41dd28b7e9e49badccd96b8c38d036:dzhere-back/src/main/java/com/ezo/dzhereback/controller/user/MyInfoController.java
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
<<<<<<< HEAD:dzhere-back/src/main/java/com/ezo/dzhereback/controller/user/MyInfoUserController.java
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
=======
		int updateResult = myInfoService.updateEmail(u_phone, u_email);
		return new Result(updateResult);
//		if(updateResult>0) {
//			Member email = myInfoService.getEmail(u_phone);
//			MyInfoDto result = MyInfoDto.builder()
//					.u_phone(email.getU_phone())
//					.u_email(email.getU_email())
//					.build();
//			return new Result(result);
//		} else {
//			System.out.println("업데이트 실패");
//			return new Result(null);
//		}
	}
	
	@PostMapping("/api/checkPw")
	public Result checkPw(@RequestBody MyInfoDto myInfoDto) {
		System.out.println("<<<<<< checkPw 컨트롤러 시작 >>>>>>");
		System.out.println("폰"+myInfoDto.getU_phone());
		System.out.println("비번"+myInfoDto.getU_pw());
		boolean result = myInfoService.getCheckResult(
				myInfoDto.getU_pw(),
				myInfoDto.getU_phone(), 
				passwordEncoder
				);
		return new Result(result);
	}

	@PostMapping("/api/updatePw")
	public Result updatePw(@RequestBody MyInfoDto myInfoDto) {
		System.out.println("<<<<<< updatePw 컨트롤러 시작 >>>>>>");
		System.out.println("비번"+myInfoDto.getU_pw());
		System.out.println("폰"+myInfoDto.getU_phone());
		int updateResult = myInfoService.updatePw(
				myInfoDto.getU_pw(),
				myInfoDto.getU_phone()
				);
		if(updateResult > 0) {
			System.out.println("업데이트 성공!"+updateResult);
			return new Result(updateResult);
>>>>>>> 625e7ac4bb41dd28b7e9e49badccd96b8c38d036:dzhere-back/src/main/java/com/ezo/dzhereback/controller/user/MyInfoController.java
		} else {
			System.out.println("업데이트 실패!"+updateResult);
			return new Result(updateResult);
		}
	}
}
