package com.ezo.dzhereback.controller.user;

import org.springframework.web.bind.annotation.RestController;

import com.ezo.dzhereback.domain.*;
import com.ezo.dzhereback.dto.CheckInsertDto;
import com.ezo.dzhereback.dto.WifiInfoDto;
import com.ezo.dzhereback.service.CheckService;
import com.ezo.dzhereback.service.LessonService;
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
public class CheckController {
    private final CheckService checkService;
    private final LessonService lessonService;
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
    public CheckController(CheckService checkService, LessonService lessonService){
        this.checkService = checkService;
        this.lessonService = lessonService;
        this.internal_cnt = 0;
        this.external_ctn = 0;
    }

    @PostMapping("/m/user/attend/insert")
    public int insertAttend(@RequestBody CheckInsertDto checkInsertDto){
        String u_phone = checkInsertDto.getU_phone();
        u_idx = checkService.getUidx(u_phone);   // 유저 index
        c_idx = lessonService.getCidx(u_phone);  // 수업 index
        System.out.println("c_idx----->"+c_idx);
        DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        // Calendar형식에서 날짜를 가져온다. 특이점은 Calendar가 singleton 형식이다.
        // Date 값을 가져와서 String으로 변환한다.
        String attendTime = format.format(Calendar.getInstance().getTime());

        System.out.println(attendTime);
        return checkService.insertCheck(attendTime, u_idx, c_idx);
    }

    @PostMapping("/m/user/attend/reaveinsert")
    public int insertLeaveAttend(@RequestBody CheckInsertDto checkInsertDto){
        u_phone = checkInsertDto.getU_phone();
        int u_idx = checkService.getUidx(u_phone);

        format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        format2 = new SimpleDateFormat("yyyy-MM-dd");
        attendExitTime = format.format(Calendar.getInstance().getTime());
        attendExitDate = format2.format(Calendar.getInstance().getTime());

        int result = checkService.insertCheckLeave(attendExitDate, attendExitTime, u_idx);
        System.out.println(result);
        return result;
    }

    @PostMapping("/m/user/attend/exitinsert")
    public int insertExitAttend(@RequestBody CheckInsertDto checkInsertDto){
        System.out.println("exit insert");
        u_phone = checkInsertDto.getU_phone();
        int u_idx = checkService.getUidx(u_phone);

        format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        format2 = new SimpleDateFormat("yyyy-MM-dd");
        attendExitTime = format.format(Calendar.getInstance().getTime());
        attendExitDate = format2.format(Calendar.getInstance().getTime());

        int result = checkService.insertCheckExit(attendExitDate, attendExitTime, u_idx);
        System.out.println(result);
        return result;
    }

    @GetMapping("/m/user/attend/load")
    public LoadAttendCnt LoadAttendList(@RequestParam("u_phone") String u_phone, @RequestParam("month") String month){
        int u_idx = checkService.getUidx(u_phone);
        LoadAttendCnt loadAttendList;
        if(Integer.parseInt(month)>0){
            loadAttendList = checkService.loadAttendCnt(u_idx, Integer.parseInt(month));
        }else{
            loadAttendList = checkService.loadAllAttendCnt(u_idx);
        }
        System.out.println("/m/user/attend/load");
        System.out.println(loadAttendList);
        return loadAttendList;
    }

    // list 페이지 전체 검색
    @GetMapping("/m/user/attend/allload")
    public List<AttendList> AllLoadAttendList(@RequestParam("u_phone") String u_phone, @RequestParam("month") String month){
        int u_idx = checkService.getUidx(u_phone);
        System.out.println("/m/user/attend/allload");
        List<AttendList> attend;
        if(Integer.parseInt(month)>0){
            attend = checkService.loadAttendList(u_idx, Integer.parseInt(month));
        }else{
            attend = checkService.loadAllAttendList(u_idx);
        }
        return attend;
    }

    @GetMapping("/m/user/attend/todayload")
    public TodayAttendList TodayAttendList(@RequestParam("u_phone") String u_phone, @RequestParam("today") String today){
        int u_idx = checkService.getUidx(u_phone);
        TodayAttendList  todayAttendList = checkService.loadTodayAttendList(u_idx,today);
        System.out.println("m/user/attend/todayload");
        System.out.println(todayAttendList);
        return todayAttendList;
    }

    @PostMapping("/m/user/check/wifi")
    public String CheckWifi(@RequestBody WifiInfoDto wifiInfoDto ){
        WifiInfo wifiInfo = wifiInfoDto.toEntity();
        String bssid = wifiInfo.getBssid();
        u_phone = wifiInfo.getU_phone();
        u_idx = checkService.getUidx(u_phone);
        c_idx = lessonService.getCidx(u_phone);
        ag_idx = lessonService.getAgidx(c_idx);
        internal_cnt = checkService.checkInternalWifiInfo(bssid, ag_idx, c_idx);
        external_ctn = checkService.checkExternalWifiInfo(bssid, u_idx, c_idx, 1);  // a_accept 0 미승인 , 1 승인
        System.out.println("/m/user/check/wifi");
        System.out.println(bssid+" , "+u_phone+" , "+u_idx+" , "+c_idx+" , "+ag_idx);
        System.out.println(internal_cnt+" , "+external_ctn);
        if(internal_cnt > 0 || external_ctn > 0) return "ok";
        else return "failure";
    }

}
