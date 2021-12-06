package com.ezo.dzhereback.controller.user;

import org.springframework.web.bind.annotation.RestController;

import com.ezo.dzhereback.domain.*;
import com.ezo.dzhereback.dto.CheckInsertDto;
import com.ezo.dzhereback.dto.WifiInfoDto;
import com.ezo.dzhereback.service.user.CheckUserService;
import com.ezo.dzhereback.service.user.LessonUserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

@RestController
@CrossOrigin
@Slf4j
public class CheckUserController {
    private final CheckUserService checkUserService;
    private final LessonUserService lessonUserService;
    DateFormat format;
    DateFormat format2;
    String attendExitTime;
    String attendExitDate;
    String u_phone;
    int c_idx;
    int u_idx;
    int ag_idx;
    int internal_cnt;
    int external_ctn;

    @Autowired
    public CheckUserController(CheckUserService checkUserService, LessonUserService lessonUserService){
        this.checkUserService = checkUserService;
        this.lessonUserService = lessonUserService;
        this.internal_cnt = 0;
        this.external_ctn = 0;
    }

    @PostMapping("/api/user/get/name")
    public String getUserName(@RequestParam("u_phone") String u_phone){
        String u_name = checkUserService.getUserName(u_phone);
        System.out.println(u_name);
        return u_name;
    }
    
    @PostMapping("/api/user/attend/insert")
    public int insertAttend(@RequestBody CheckInsertDto checkInsertDto){
        String u_phone = checkInsertDto.getU_phone();
        u_idx = checkUserService.getUidx(u_phone);   // 유저 index
        c_idx = lessonUserService.getCidx(u_phone);  // 수업 index
        System.out.println("c_idx----->"+c_idx);
        DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        // Calendar형식에서 날짜를 가져온다. 특이점은 Calendar가 singleton 형식이다.
        // Date 값을 가져와서 String으로 변환한다.
        String attendTime = format.format(Calendar.getInstance().getTime());

        System.out.println(attendTime);
        return checkUserService.insertCheck(attendTime, u_idx, c_idx);
    }

    @PostMapping("/api/user/attend/reaveinsert")
    public int insertLeaveAttend(@RequestBody CheckInsertDto checkInsertDto){
        u_phone = checkInsertDto.getU_phone();
        int u_idx = checkUserService.getUidx(u_phone);

        format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        format2 = new SimpleDateFormat("yyyy-MM-dd");
        attendExitTime = format.format(Calendar.getInstance().getTime());
        attendExitDate = format2.format(Calendar.getInstance().getTime());

        int result = checkUserService.insertCheckLeave(attendExitDate, attendExitTime, u_idx);
        System.out.println(result);
        return result;
    }

    @PostMapping("/api/user/attend/exitinsert")
    public int insertExitAttend(@RequestBody CheckInsertDto checkInsertDto){
        System.out.println("exit insert");
        u_phone = checkInsertDto.getU_phone();
        int u_idx = checkUserService.getUidx(u_phone);

        format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        format2 = new SimpleDateFormat("yyyy-MM-dd");
        attendExitTime = format.format(Calendar.getInstance().getTime());
        attendExitDate = format2.format(Calendar.getInstance().getTime());

        int result = checkUserService.insertCheckExit(attendExitDate, attendExitTime, u_idx);
        System.out.println(result);
        return result;
    }

    @GetMapping("/api/user/attend/load")
    public LoadAttendCnt LoadAttendList(@RequestParam("u_phone") String u_phone, @RequestParam("month") String month){
        int u_idx = checkUserService.getUidx(u_phone);
        LoadAttendCnt loadAttendList;
        if(Integer.parseInt(month)>0){
            loadAttendList = checkUserService.loadAttendCnt(u_idx, Integer.parseInt(month));
        }else{
            loadAttendList = checkUserService.loadAllAttendCnt(u_idx);
        }
        System.out.println("/api/user/attend/load");
        System.out.println(loadAttendList);
        return loadAttendList;
    }

    // list 페이지 전체 검색
    @GetMapping("/api/user/attend/allload")
    public List<AttendList> AllLoadAttendList(@RequestParam("u_phone") String u_phone, @RequestParam("month") String month){
        int u_idx = checkUserService.getUidx(u_phone);
        System.out.println("/api/user/attend/allload");
        List<AttendList> attend;
        if(Integer.parseInt(month)>0){
            attend = checkUserService.loadAttendList(u_idx, Integer.parseInt(month));
        }else{
            attend = checkUserService.loadAllAttendList(u_idx);
        }
        return attend;
    }

    @GetMapping("/api/user/attend/todayload")
    public TodayAttendList TodayAttendList(@RequestParam("u_phone") String u_phone, @RequestParam("today") String today){
        int u_idx = checkUserService.getUidx(u_phone);
        TodayAttendList  todayAttendList = checkUserService.loadTodayAttendList(u_idx,today);
        System.out.println("/api/user/attend/todayload");
        System.out.println(todayAttendList);
        return todayAttendList;
    }

    @PostMapping("/api/user/check/wifi")
    public String CheckWifi(@RequestBody WifiInfoDto wifiInfoDto ){
        WifiInfo wifiInfo = wifiInfoDto.toEntity();
        String bssid = wifiInfo.getBssid();
        u_phone = wifiInfo.getU_phone();
        u_idx = checkUserService.getUidx(u_phone);
        c_idx = lessonUserService.getCidx(u_phone);
        ag_idx = lessonUserService.getAgidx(c_idx);
        internal_cnt = checkUserService.checkInternalWifiInfo(bssid, ag_idx, c_idx);
        external_ctn = checkUserService.checkExternalWifiInfo(bssid, u_idx, c_idx, 1);  // a_accept 0 미승인 , 1 승인
        System.out.println("/api/user/check/wifi");
        System.out.println(bssid+" , "+u_phone+" , "+u_idx+" , "+c_idx+" , "+ag_idx);
        System.out.println(internal_cnt+" , "+external_ctn);
        if(internal_cnt > 0 || external_ctn > 0) return "ok";
        else return "failure";
    }

}
