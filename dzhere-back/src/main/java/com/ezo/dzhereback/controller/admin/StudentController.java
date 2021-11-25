package com.ezo.dzhereback.controller.admin;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ezo.dzhereback.controller.user.MyInfoController;
import com.ezo.dzhereback.domain.Agency;
import com.ezo.dzhereback.domain.User;
import com.ezo.dzhereback.domain.Class;
import com.ezo.dzhereback.dto.Result;
import com.ezo.dzhereback.dto.StudentDto;
import com.ezo.dzhereback.service.StudentService;

import lombok.extern.slf4j.Slf4j;

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
	
	@GetMapping("/api/getClassList/{u_phone}")
	public Result getClassList(@PathVariable("u_phone") String u_phone) {
		System.out.println("<<<<<< getClassList 컨트롤러 시작 >>>>>>");
		List<Class> classList = studentService.getClassList(u_phone);
		System.out.println("<<<<<< getClassList 컨트롤러 완료 >>>>>>"+classList);
		return new Result(classList);
	}
	


}
