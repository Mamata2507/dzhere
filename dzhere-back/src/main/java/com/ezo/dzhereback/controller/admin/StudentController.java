package com.ezo.dzhereback.controller.admin;

import com.ezo.dzhereback.domain.Agency;
import com.ezo.dzhereback.domain.Class;
import com.ezo.dzhereback.domain.User;
import com.ezo.dzhereback.dto.Result;
import com.ezo.dzhereback.dto.StudentDto;
import com.ezo.dzhereback.service.admin.StudentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@Slf4j
public class StudentController {
	private final StudentService studentService;
	
	@Autowired
	public StudentController(StudentService studentService) {
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
	
//	@GetMapping("/api/getClassList/{u_phone}")
//	public Result getClassList(@PathVariable("u_phone") String u_phone) {
//		System.out.println("<<<<<< getClassList 컨트롤러 시작 >>>>>>");
//		List<Class> classList = studentService.getClassList(u_phone);
//		System.out.println("<<<<<< getClassList 컨트롤러 완료 >>>>>>"+classList);
//		return new Result(classList);
//	}
	
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
//	@GetMapping("/api/getStudentList")
//	public Result getStudentList(@RequestParam("ag_idx") String ag_idx,
//			@RequestParam("c_idx") String c_idx) {
//		System.out.println("<<<<<< studentList 컨트롤러 시작 >>>>>>");
//		List<User> studentList = studentService.getStudentList(Integer.parseInt(c_idx), Integer.parseInt(ag_idx));
//		System.out.println("<<<<<< studentList 컨트롤러 완료 >>>>>>"+studentList);
//		return new Result(studentList);
//	}
//	@GetMapping("/api/getStudentList/{ag_idx}/{c_idx}")
//	public Result getStudentList(@PathVariable("ag_idx") String ag_idx,
//			@PathVariable("c_idx") String c_idx) {
//		System.out.println("<<<<<< studentList 컨트롤러 시작 >>>>>>");
//		List<User> studentList = studentService.getStudentList(Integer.parseInt(c_idx), Integer.parseInt(ag_idx));
//		System.out.println("<<<<<< studentList 컨트롤러 완료 >>>>>>"+studentList);
//		return new Result(studentList);
//	}
}
