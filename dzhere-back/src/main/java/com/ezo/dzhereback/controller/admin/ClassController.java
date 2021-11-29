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
//		System.out.println("u_phone:"+u_phone);
//		User user = userService.findUser(u_phone);
		AgencyDto agency = classService.selectAgencyName(u_phone);
		System.out.println(agency);
		return new Result(agency);
	}
	
	// 기관의 강의(class) 리스트 호출
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
	
	//기관의 강의 수강기간(classtime) 정보 리스트 호출
	@PostMapping("/api/class/time/list")
	public Result selectClassTimeList(@RequestBody UserDto userDto){  //ag_idx
		List<ClasstimeDto> classtimeList = classService.selectClassTimeList(userDto);
		System.out.println(classtimeList);
		return new Result(classtimeList);
	}

	//기관의 강의 장소(location) 정보 리스트 호출
	@PostMapping("/api/class/location/list")
	public Result selectClassLocationList(@RequestBody UserDto userDto){  //ag_idx
		List<ClasslocationDto> classlocationList = classService.selectClassLocationList(userDto);
		System.out.println(classlocationList);
		return new Result(classlocationList);
	}
	

	//기관의 강의 외부장소 정보 리스트 호출
	@PostMapping("/api/class/external/list")
	public Result selectClassExternalList(@RequestBody UserDto userDto){  // u_name, c_idx
		List<ExternalDto> classexternalList = classService.selectClassExternalList(userDto);
		System.out.println(classexternalList);
		return new Result(classexternalList);
	}
	
	//기관의 강의 내부장소 정보 리스트 호출
	@PostMapping("/api/class/internal/list")
	public Result selectClassInternalList(@RequestBody UserDto userDto){  //ag_idx
		List<InternalDto> classinternalList = classService.selectClassInternalList(userDto);
		System.out.println(classinternalList);
		return new Result(classinternalList);
	}
	
//
	// 강의명(Class) 등록
	@PostMapping("/api/class/add")
	public int addClass(@RequestBody ClassInfoDto classinfoDto){  //ag_idx
		classService.addClass(classinfoDto);
		int c_idx = classService.selectClassId(classinfoDto);
		System.out.println(c_idx);
		return c_idx;
	}
	
	//강의(Classtime) 등록
	@PostMapping("/api/class/time/add")
	public Result addClasstime(@RequestBody ClasstimeDto classtimeDto, UserDto userDto){  //ag_idx
		userDto.setAg_idx(classtimeDto.getAg_idx());
		System.out.println(userDto.getAg_idx());
//		classService.addClass(classtimeDto);
//		int c_idx = classService.selectClassId(classtimeDto);
//		System.out.println(c_idx);
		classService.addClasstime(classtimeDto);
		classService.addClasslocation(classtimeDto.getC_idx());
		List<ClasstimeDto> classtimeList = classService.selectClassTimeList(userDto);
		System.out.println(classtimeList);
		return new Result(classtimeList);
	}
	
	//강의 삭제
		@PostMapping("/api/class/delete")
		public Result addClasstime(@RequestBody UserDto userDto, ClasstimeDto classtimeDto){  //ag_idx
			classService.deleteClassTime(userDto.getC_idx());
			classService.deleteClasslocation(userDto.getC_idx());
			classService.deleteClassInternal(userDto.getC_idx());
			classService.deleteClassName(userDto.getC_idx());
			List<ClasstimeDto> classtimeList = classService.selectClassTimeList(userDto);
			System.out.println(classtimeList);
			return new Result(classtimeList);
		}
		
	// 강의 장소 등록
		@PostMapping("/api/class/location/add")
		public Result addClassLocation(@RequestBody InternalDto internalDto, UserDto userDto){  //ag_idx
			userDto.setAg_idx(internalDto.getAg_idx());
			classService.addClassInternal(internalDto);
			System.out.println(internalDto.getAg_idx());
			System.out.println(internalDto.getC_idx());
			classService.addClassLocation(internalDto);
			List<ClasslocationDto> classlocationList = classService.selectClassLocationList(userDto);
			System.out.println(classlocationList);
			return new Result(classlocationList);
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

}
