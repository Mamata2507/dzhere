package com.ezo.dzhereback.controller.admin;
import java.util.List;
import org.apache.ibatis.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.ezo.dzhereback.domain.*;
import com.ezo.dzhereback.service.admin.*;
import lombok.extern.slf4j.Slf4j;
import com.ezo.dzhereback.dto.*;
import com.ezo.dzhereback.dto.Result;

@RestController
@CrossOrigin
@Slf4j
public class LessonAdminController {
	private final LessonAdminService classService;
	private final MemberAdminService userService;
	
	@Autowired
	public LessonAdminController(LessonAdminService classService, MemberAdminService userService) {
		this.classService = classService;
		this.userService = userService;
	}
	
	// 관리자(기관) 정보 호출
	@PostMapping("/api/admin/agency")
	public Result selectAgency(@RequestBody UserDto userDto){
		String u_phone = userDto.getU_phone();
//		System.out.println("u_phone:"+u_phone);
//		User user = userService.findUser(u_phone);
		AgencyDto agency = classService.selectAgencyName(u_phone);
		System.out.println(agency);
		return new Result(agency);
	}
	
	// 기관의 강의(class) 리스트 호출
	@PostMapping("/api/admin/class/list")
	public Result selectClassList(@RequestBody UserDto userDto){
		String u_phone = userDto.getU_phone();
		System.out.println("u_phone:"+u_phone);
		User user = userService.findUser(u_phone); 
		List<LessonDto> classList = classService.selectClassList(user);
		System.out.println(classList);
		return new Result(classList);
	}
	
	// 강의의 수강생 리스트 호출
	@PostMapping("/api/admin/class/student/list")
	public Result selectClassStudentList(@RequestBody UserDto userDto){
		List<UserDto> classStudentList = classService.selectClassStudentList(userDto);
		System.out.println(classStudentList);
		return new Result(classStudentList);
	}
	
	//기관의 강의 수강기간(classtime) 정보 리스트 호출
	@PostMapping("/api/admin/class/time/list")
	public Result selectClassTimeList(@RequestBody UserDto userDto){  //ag_idx
		List<LessontimeDto> classtimeList = classService.selectClassTimeList(userDto);
		System.out.println(classtimeList);
		return new Result(classtimeList);
	}

	//기관의 강의 장소(location) 정보 리스트 호출
	@PostMapping("/api/admin/class/location/list")
	public Result selectClassLocationList(@RequestBody UserDto userDto){  //ag_idx
		List<LessonlocationDto> classlocationList = classService.selectClassLocationList(userDto);
		System.out.println(classlocationList);
		return new Result(classlocationList);
	}
	

	//기관의 강의 외부장소 정보 리스트 호출
	@PostMapping("/api/admin/class/external/list")
	public Result selectClassExternalList(@RequestBody UserDto userDto){  // u_name, c_idx
		List<ExternalDto> classexternalList = classService.selectClassExternalList(userDto);
		System.out.println(classexternalList);
		return new Result(classexternalList);
	}
	
	//기관의 강의 내부장소 정보 리스트 호출
	@PostMapping("/api/admin/class/internal/list")
	public Result selectClassInternalList(@RequestBody UserDto userDto){  //ag_idx
		List<InternalDto> classinternalList = classService.selectClassInternalList(userDto);
		System.out.println(classinternalList);
		return new Result(classinternalList);
	}
	
	
	//기관의 강의 내부장소 정보 리스트 업데이트
		@PostMapping("/api/admin/class/internal/update")
		public Result updateClassInternal(@RequestBody InternalDto internalDto, UserDto userDto){  //ag_idx
			classService.updateClassInternal(internalDto);
			classService.updateClassLocation(internalDto);
			userDto.setAg_idx(internalDto.getAg_idx());
			List<InternalDto> classinternalList = classService.selectClassInternalList(userDto);
			System.out.println(classinternalList);
			return new Result(classinternalList);
		}
		
	
	
//
	// 강의명(Class) 등록
	@PostMapping("/api/admin/class/add")
	public int addClass(@RequestBody LessonDto classinfoDto){  //ag_idx
		classService.addClass(classinfoDto);
		int c_idx = classService.selectClassId(classinfoDto);
		System.out.println(c_idx);
		return c_idx;
	}
	
	//강의(Classtime) 등록
	@PostMapping("/api/admin/class/time/add")
	public Result addClasstime(@RequestBody LessontimeDto classtimeDto, UserDto userDto){  //ag_idx
		userDto.setAg_idx(classtimeDto.getAg_idx());
		userDto.setC_idx(classtimeDto.getC_idx());
		System.out.println(userDto.getAg_idx());
//		classService.addClass(classtimeDto);
//		int c_idx = classService.selectClassId(classtimeDto);
//		System.out.println(c_idx);
		// Classtime 테이블 insert
		classService.addClasstime(classtimeDto);
		// Classlocation 테이블 insert
		classService.addClasslocation(classtimeDto.getC_idx());
		// Internal 테이블 insert
		classService.insertClassInternal(userDto);
		List<LessontimeDto> classtimeList = classService.selectClassTimeList(userDto);
		System.out.println(classtimeList);
		return new Result(classtimeList);
	}
	
	
	// 강의(classtime) 수정하기
	@PostMapping("/api/admin/class/time/update")
	public Result updateClasstime(@RequestBody LessontimeDto classtimeDto, UserDto userDto){  //ag_idx
		userDto.setAg_idx(classtimeDto.getAg_idx());
		userDto.setC_idx(classtimeDto.getC_idx());
		System.out.println(userDto.getAg_idx());
		//classtime 업데이트
		classService.updateClasstime(classtimeDto);
		List<LessontimeDto> classtimeList = classService.selectClassTimeList(userDto);
		System.out.println(classtimeList);
		return new Result(classtimeList);
	}
	
	
	//강의 삭제
		@PostMapping("/api/admin/class/delete")
		public Result addClasstime(@RequestBody UserDto userDto, LessontimeDto classtimeDto){  //ag_idx
			classService.deleteClassTime(userDto.getC_idx());
			classService.deleteClasslocation(userDto.getC_idx());
			classService.deleteClassInternal(userDto.getC_idx());
			classService.deleteClassName(userDto.getC_idx());
			List<LessontimeDto> classtimeList = classService.selectClassTimeList(userDto);
			System.out.println(classtimeList);
			return new Result(classtimeList);
		}
		

		//기관의 강의 외부장소 삭제
		@PostMapping("/api/admin/external/delete")
		public Result deleteExternalList(@RequestBody ExternalDto externalDto, UserDto userDto){  // u_name, c_idx
			classService.deleteExternalList(externalDto.getE_idx());
			userDto.setU_name(externalDto.getU_name());
			userDto.setC_idx(externalDto.getC_idx());
			userDto.setAg_idx(externalDto.getAg_idx());
			List<ExternalDto> classexternalList = classService.selectClassExternalList(userDto);
			System.out.println(classexternalList);
			return new Result(classexternalList);
		}
		
	// 강의 장소 등록
		@PostMapping("/api/admin/class/location/add")
		public Result addClassLocation(@RequestBody InternalDto internalDto, UserDto userDto){  //ag_idx
			userDto.setAg_idx(internalDto.getAg_idx());
			classService.addClassInternal(internalDto);
			System.out.println(internalDto.getAg_idx());
			System.out.println(internalDto.getC_idx());
			classService.addClassLocation(internalDto);
			List<InternalDto> selectClassInternalList = classService.selectClassInternalList(userDto);
//			List<ClasslocationDto> classlocationList = classService.selectClassLocationList(userDto);
			System.out.println(selectClassInternalList);
			return new Result(selectClassInternalList);
		}
	
//	//강의(Classtime) 등록
//	@PostMapping("/api/class/time/add")
//	public Result addClasstime(@RequestBody ClasstimeDto classtimeDto){  //ag_idx
//		classService.addClass(classtimeDto);
//		int c_idx = classService.selectClassId(classtimeDto);
//		System.out.println(c_idx);
//		classService.addClasstime(classtimeDto, c_idx);
//		UserDto userdto = null;
//		userdto.setAg_idx(classtimeDto.getAg_idx());
//		List<ClasstimeDto> classtimeList = classService.selectClassTimeList(userdto);
//		return new Result(classtimeList);
//	}
	
}