package com.ezo.dzhereback.controller.user;

import com.ezo.dzhereback.domain.Lessontime;
import com.ezo.dzhereback.domain.User;
import com.ezo.dzhereback.dto.MyInfoDto;
import com.ezo.dzhereback.dto.Result;
import com.ezo.dzhereback.service.user.MyInfoUserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@Slf4j
public class MyInfoUserController {
	private final MyInfoUserService myInfoService;

	@Autowired
	public MyInfoUserController(MyInfoUserService myInfoService) {
		this.myInfoService = myInfoService;
	}

	private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

	@GetMapping("/api/user/getEmail/{u_phone}")
	public Result getEmail(@PathVariable("u_phone") String u_phone) {
		System.out.println("로컬폰---->"+u_phone);
		User email = myInfoService.getEmail(u_phone);
		MyInfoDto result = MyInfoDto.builder()
				.u_phone(email.getU_phone())
				.u_email(email.getU_email())
				.build();
		System.out.println("완료"+result);
		return new Result(result);
	}

	@PostMapping("/api/user/updateEmail/{u_phone}/{u_email}")
	public Result updateEmail(@PathVariable("u_phone") String u_phone,
							  @PathVariable("u_email") String u_email) {
		System.out.println("로컬폰------->"+u_phone);
		System.out.println("로컬이메일---->"+u_email);
		int updateResult = myInfoService.updateEmail(u_phone, u_email);
		return new Result(updateResult);
	}

	@PostMapping("/api/user/checkPw")
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

	@PostMapping("/api/user/updatePw")
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
		} else {
			System.out.println("업데이트 실패!"+updateResult);
			return new Result(updateResult);
		}
	}
	
	@GetMapping("/api/user/getClassTime/{u_phone}")
	public Result getClassTime(@PathVariable("u_phone") String u_phone) {
		System.out.println("<<<<<<<<<<<<<< getClassTime 컨트롤러 시작>>>>>>>>>>>");
		Lessontime ct = myInfoService.getClassTime(u_phone);
		MyInfoDto result = MyInfoDto.builder()
			    .ct_start_hour(ct.getCt_start_hour())
			    .ct_start_minute(ct.getCt_start_minute())
			    .ct_end_hour(ct.getCt_end_hour())
			    .ct_end_minute(ct.getCt_end_minute())
				.ct_day(ct.getCt_day())
				.build();
		System.out.println("완료"+result);
		System.out.println("<<<<<<<<<<<<<< getClassTime 컨트롤러 완료 >>>>>>>>>>>");
		return new Result(result);
	}
	
	
}