package com.ezo.dzhereback.controller.admin;
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
public class ClassController {
	private final ClassService classService;
	private final UserService userService;
	
	@Autowired
	public ClassController(ClassService classService, UserService userService) {
		this.classService = classService;
		this.userService = userService;
	}
	
	// 관리자(기관) 정보 호출
	@PostMapping("/api/admin/agency")
	public Result selectAgency(@RequestBody UserDto userDto){
		String u_phone = userDto.getU_phone();
		System.out.println("u_phone:"+u_phone);
		User user = userService.findUser(u_phone);
		Agency agency = classService.selectAgencyName(user);
		System.out.println(agency);
		return new Result(agency);
	}
	
	// 기관의 강의 리스트 호출
	@PostMapping("/api/class/list")
	public Result selectClassList(@RequestBody UserDto userDto){
		String u_phone = userDto.getU_phone();
		System.out.println("u_phone:"+u_phone);
		User user = userService.findUser(u_phone); 
		List<ClassInfoDto> classList = classService.selectClassList(user);
		System.out.println(classList);
		return new Result(classList);
	}
	
	// 강의의 수강생 리스트 호출
	@PostMapping("/api/class/student/list")
	public Result selectClassStudentList(@RequestBody UserDto userDto){
		List<UserDto> classStudentList = classService.selectClassStudentList(userDto);
		System.out.println(classStudentList);
		return new Result(classStudentList);
	}
//	
//	@PostMapping("/api/external/delete")
//	public String removeExternalId(@RequestBody ExternalDto externalDto, External external){
//		String u_phone = externalDto.getU_phone();
//		int e_idx = externalDto.getE_idx();
//		User user = externalService.findUser(u_phone); //u_id, c_id 저장
//		external.setC_idx(user.getC_idx());
//		external.setU_idx(user.getU_idx());
//		external.setE_idx(e_idx);
//		externalService.removeExternalId(external);
//		return "Ok";
//	}
//	
//	@PostMapping("/api/external/select")
//	public Result selectExternal(@RequestBody ExternalDto externalDto){
//		String u_phone = externalDto.getU_phone();
//		User user = externalService.findUser(u_phone); //u_id, c_id 저장
//		List<ExternalSelectDto> external = externalService.selectExternal(user);
//		System.out.println(external);
//		return new Result(external);
//	}

}
