package com.ezo.dzhereback.controller.admin;

import com.ezo.dzhereback.domain.Agency;
import com.ezo.dzhereback.domain.Lesson;
import com.ezo.dzhereback.domain.User;
import com.ezo.dzhereback.dto.MyInfoDto;
import com.ezo.dzhereback.dto.Result;
import com.ezo.dzhereback.dto.StudentDto;
import com.ezo.dzhereback.service.admin.StudentAdminService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@Slf4j
public class StudentAdminController {
	private final StudentAdminService studentService;
	
	@Autowired
	public StudentAdminController(StudentAdminService studentService) {
		this.studentService = studentService;
	}
	
	@GetMapping("/api/getAgName/{u_phone}")
	public Result getAgName(@PathVariable("u_phone") String u_phone) {
		System.out.println("<<<<<< getAgName 컨트롤러 시작 >>>>>>");
		Agency agName = studentService.getAgName(u_phone);
		StudentDto result = StudentDto.builder()
				.ag_name(agName.getAg_name())
				.ag_idx(agName.getAg_idx())
				.build();
		System.out.println("<<<<<< getAgName 컨트롤러 완료 >>>>>>"+result);
		return new Result(result);
	} 
	
	@GetMapping("/api/getClassList/{u_phone}")
	public Result getClassList(@PathVariable("u_phone") String u_phone) {
		System.out.println("<<<<<< getClassList 컨트롤러 시작 >>>>>>");
		List<Lesson> classList = studentService.getClassList(u_phone);
		System.out.println("<<<<<< getClassList 컨트롤러 완료 >>>>>>"+classList);
		return new Result(classList);
	}
	
	@PostMapping("/api/getStudentList")
	public Result getStudentList(@RequestBody StudentDto studentDto) {
		System.out.println("<<<<<< studentList 컨트롤러 시작 >>>>>>");
		System.out.println(studentDto.getAg_idx()+" "+studentDto.getC_idx());
		if(studentDto.getC_idx() == 0) {
			List<User> studentList = studentService.getStudentListAll(studentDto.getAg_idx(), studentDto.getC_idx());
			return new Result(studentList);
		} else {
			List<User> studentList = studentService.getStudentList(studentDto.getAg_idx(), studentDto.getC_idx());
			return new Result(studentList);
		}
	}
	
	@PostMapping("/api/deleteUser/{u_idx}")
	public Result deleteUser(@PathVariable("u_idx") int u_idx) {
		System.out.println("<<<<<< userDelete 컨트롤러 시작 >>>>>>");
		int deleteResult = studentService.deleteUser(u_idx);
		System.out.println("<<<<<< userDelete 컨트롤러 완료 >>>>>>"+deleteResult);
		return new Result(deleteResult);
	}
	
	@PostMapping("/api/insertUser")
	public Result insertUser(@RequestBody StudentDto studentDto) {
		System.out.println("<<<<<< insertUser 컨트롤러 시작 >>>>>>");
		System.out.println(studentDto.getAg_idx()+" "+studentDto.getC_idx()+" "+studentDto.getU_name()+" "+studentDto.getU_phone());
		int result = studentService.insertUser(
				studentDto.getAg_idx(), 
				studentDto.getC_idx(), 
				studentDto.getU_name(), 
				studentDto.getU_phone()
				);
		System.out.println("<<<<<< insertUser 컨트롤러 완료 >>>>>>"+result);
		return new Result(result);
	}
	
	@GetMapping("/api/countUser/{u_phone}")
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
	
	@GetMapping("/api/getStudentInfo/{u_idx}")
	public Result getStudentInfo(@PathVariable("u_idx") int u_idx) {
		System.out.println(u_idx + "<<<<<< getStudentInfo 컨트롤러 시작 >>>>>>");
		User getStudentInfo = studentService.getStudentInfo(u_idx);
		StudentDto result = StudentDto.builder()
				.u_phone(getStudentInfo.getU_phone())
				.u_name(getStudentInfo.getU_name())
				.c_idx(getStudentInfo.getC_idx())
				.build();
		System.out.println("완료"+result);
		System.out.println(result + "<<<<<< getStudentInfo 컨트롤러 끝 >>>>>>");
		return new Result(result);
	}
	
	@PostMapping("/api/updateUser")
	public Result updateUser(@RequestBody StudentDto studentDto) {
		System.out.println("<<<<<< updateUser 컨트롤러 시작 >>>>>>");
		System.out.println(studentDto.getU_idx()+" "+studentDto.getC_idx()+" "+studentDto.getU_name()+" "+studentDto.getU_phone());
		int result = studentService.updateUser(
				studentDto.getU_idx(),
				studentDto.getC_idx(), 
				studentDto.getU_name(), 
				studentDto.getU_phone()
				);
		System.out.println("<<<<<< updateUser 컨트롤러 완료 >>>>>>"+result);
		return new Result(result);
	}

}
