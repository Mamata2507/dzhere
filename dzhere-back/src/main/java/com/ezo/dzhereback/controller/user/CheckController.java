package com.ezo.dzhereback.controller.user;

import com.ezo.dzhereback.domain.LoadAttendCnt;
import com.ezo.dzhereback.dto.CheckInsertDto;
import com.ezo.dzhereback.service.CheckService;
import com.ezo.dzhereback.service.LessonService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;

@RestController
@CrossOrigin
@Slf4j
public class CheckController {
    private final CheckService checkService;

    @Autowired
    public CheckController(CheckService checkService){
        this.checkService = checkService;
    }

    @PostMapping("/m/user/attend/insert")
    public int insertAttend(@RequestBody CheckInsertDto checkInsertDto){
        String u_phone = checkInsertDto.getU_phone();
        int u_idx = checkService.getUidx(u_phone);
        System.out.println("u_idx :"+u_idx);

        DateFormat format = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        // Calendar형식에서 날짜를 가져온다. 특이점은 Calendar가 singleton 형식이다.
        // Date 값을 가져와서 String으로 변환한다.
        String attendTime = format.format(Calendar.getInstance().getTime());

        System.out.println(attendTime);
        return checkService.insertCheck(attendTime, u_idx);
    }

    @PostMapping("/m/user/attend/exitinsert")
    public int insertExitAttend(@RequestBody CheckInsertDto checkInsertDto){
        System.out.println("exit insert");
        String u_phone = checkInsertDto.getU_phone();
        int u_idx = checkService.getUidx(u_phone);

        DateFormat format = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        DateFormat format2 = new SimpleDateFormat("yyyy-MM-dd");
        String attendExitTime = format.format(Calendar.getInstance().getTime());
        String attendExitDate = format2.format(Calendar.getInstance().getTime());

        int result = checkService.insertCheckExit(attendExitDate, attendExitTime, u_idx);
        System.out.println(result);
        return result;
    }

    @GetMapping("/m/user/attend/load")
    public LoadAttendCnt AllLoadAttendList(@RequestParam("u_phone") String u_phone, @RequestParam("month") String month){
        int u_idx = checkService.getUidx(u_phone);
        LoadAttendCnt loadAttendList = checkService.loadAttendCnt(u_idx, Integer.parseInt(month));
        System.out.println("/m/user/attend/load");
        System.out.println(loadAttendList);
        return loadAttendList;
    }

}
