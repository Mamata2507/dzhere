package com.ezo.dzhereback.controller.admin;

import com.ezo.dzhereback.domain.Agency;
import com.ezo.dzhereback.domain.Lesson;
import com.ezo.dzhereback.domain.User;
import com.ezo.dzhereback.dto.ListAdminDto;
import com.ezo.dzhereback.dto.Result;
import com.ezo.dzhereback.service.admin.ListAdminService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@Slf4j
public class ListAdminController {
	private final ListAdminService studentService;
	
	@Autowired
	public ListAdminController(ListAdminService studentService) {
		this.studentService = studentService;
	}
	
	@GetMapping("/api/admin/getAgName/{u_phone}")
	public Result getAgName(@PathVariable("u_phone") String u_phone) {
		System.out.println("<<<<<< getAgName 컨트롤러 시작 >>>>>>");
		Agency agName = studentService.getAgName(u_phone);
		ListAdminDto result = ListAdminDto.builder()
				.ag_name(agName.getAg_name())
				.ag_idx(agName.getAg_idx())
				.build();
		System.out.println("<<<<<< getAgName 컨트롤러 완료 >>>>>>"+result);
		return new Result(result);
	} 
	
	@GetMapping("/api/admin/getClassList/{phone}")
	public Result getClassList(@PathVariable("phone") String u_phone) {
		System.out.println("<<<<<< getClassList 컨트롤러 시작 >>>>>>");
		int agIdx = studentService.getAgIdx(u_phone);
		List<Lesson> classList = studentService.getClassList(agIdx);
		System.out.println("<<<<<< getClassList 컨트롤러 완료 >>>>>>"+classList);
		return new Result(classList);
	}
	
	// 수강생 리스트
	@PostMapping("/api/admin/getStudentList")
	public Result getStudentList(@RequestBody ListAdminDto listDto) {
		System.out.println("<<<<<< studentList 컨트롤러 시작 >>>>>>");
		System.out.println(listDto.getAg_idx()+" "+listDto.getC_idx());
		if(listDto.getC_idx() == 0) {
			List<User> studentList = studentService.getStudentListAll(listDto.getAg_idx(), listDto.getC_idx());
			System.out.println("<<<<<< studentList 컨트롤러 완료 >>>>>>"+studentList);
			return new Result(studentList);
		} else {
			List<User> studentList = studentService.getStudentList(listDto.getAg_idx(), listDto.getC_idx());
			System.out.println("<<<<<< studentList 컨트롤러 완료 >>>>>>"+studentList);
			return new Result(studentList);
		}
	}
	
	// 강사 리스트
	@PostMapping("/api/admin/getTeacherList")
	public Result getTeacherList(@RequestBody ListAdminDto listDto) {
		System.out.println("<<<<<< getTeacherList 컨트롤러 시작 >>>>>>");
		System.out.println(listDto.getAg_idx()+" "+listDto.getC_idx());
		if(listDto.getC_idx() == 0) {
			List<User> teacherList = studentService.getTeacherListAll(listDto.getAg_idx(), listDto.getC_idx());
			System.out.println("<<<<<< getTeacherList 컨트롤러 완료 >>>>>>"+teacherList);
			return new Result(teacherList);
		} else {
			List<User> teacherList = studentService.getTeacherList(listDto.getAg_idx(), listDto.getC_idx());
			System.out.println("<<<<<< getTeacherList 컨트롤러 완료 >>>>>>"+teacherList);
			return new Result(teacherList);
		}
	}
	
	@PostMapping("/api/admin/deleteUser/{u_idx}/{ag_idx}/{c_idx}")
	public Result deleteUser(@PathVariable("u_idx") int u_idx,
							 @PathVariable("ag_idx") int ag_idx,
							 @PathVariable("c_idx") int c_idx) {
		System.out.println("<<<<<< userDelete 컨트롤러 시작 >>>>>>");
		int deleteResult = studentService.deleteUser(u_idx);
		List<User> studentList = studentService.getStudentListAll(ag_idx, c_idx);
		System.out.println("<<<<<< userDelete 컨트롤러 완료 >>>>>>"+deleteResult);
		System.out.println("<<<<<< userDelete 컨트롤러 완료 >>>>>>"+studentList);
		return new Result(studentList);
	}
	
	@PostMapping("/api/admin/insertUser")
	public Result insertUser(@RequestBody ListAdminDto listDto) {
		System.out.println("<<<<<< insertUser 컨트롤러 시작 >>>>>>");
		System.out.println(listDto.getAg_idx()+" "+listDto.getC_idx()+" "+listDto.getU_name()+" "+listDto.getU_phone()+listDto.getU_auth());
		int result = studentService.insertUser(
				listDto.getAg_idx(), 
				listDto.getC_idx(), 
				listDto.getU_name(), 
				listDto.getU_phone(),
				listDto.getU_auth()
				);
		System.out.println("<<<<<< insertUser 컨트롤러 완료 >>>>>>"+result);
		return new Result(result);
	}
	
	@GetMapping("/api/admin/countUser/{u_phone}")
	public Result countUser(@PathVariable("u_phone") String u_phone) {
		System.out.println("<<<<<< countUser 컨트롤러 시작 >>>>>>");
		int countUser = studentService.countUser(u_phone);
		Boolean result = true;
		if(countUser < 1) {
			result = true; // 동일한 핸드폰 X, 사용가능
		} else {
			result = false; // 동일한 핸드폰 O, 사용불가
		}
		System.out.println("<<<<<< countUser 컨트롤러 완료 >>>>>>"+result);
		return new Result(result);
	} 
	
	@GetMapping("/api/admin/getStudentInfo/{u_idx}")
	public Result getStudentInfo(@PathVariable("u_idx") int u_idx) {
		System.out.println(u_idx + "<<<<<< getStudentInfo 컨트롤러 시작 >>>>>>");
		User getStudentInfo = studentService.getStudentInfo(u_idx);
		ListAdminDto result = ListAdminDto.builder()
				.u_phone(getStudentInfo.getU_phone())
				.u_name(getStudentInfo.getU_name())
				.c_idx(getStudentInfo.getC_idx())
				.build();
		System.out.println("완료"+result);
		System.out.println("<<<<<< getStudentInfo 컨트롤러 완료 >>>>>>"+result);
		return new Result(result);
	}
	
	@PostMapping("/api/admin/updateUser")
	public Result updateUser(@RequestBody ListAdminDto listDto) {
		System.out.println("<<<<<< updateUser 컨트롤러 시작 >>>>>>");
		System.out.println(listDto.getU_idx()+" "+listDto.getC_idx()+" "+listDto.getU_name()+" "+listDto.getU_phone());
		int result = studentService.updateUser(
				listDto.getU_idx(),
				listDto.getC_idx(), 
				listDto.getU_name(), 
				listDto.getU_phone()
				);
		System.out.println("<<<<<< updateUser 컨트롤러 완료 >>>>>>"+result);
		return new Result(result);
	}

}
