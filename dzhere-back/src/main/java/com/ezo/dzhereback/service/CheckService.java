package com.ezo.dzhereback.service;

import com.ezo.dzhereback.domain.LoadAttendCnt;
import com.ezo.dzhereback.mapper.CheckMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CheckService {
    CheckMapper checkMapper;
    @Autowired
    public CheckService(CheckMapper checkMapper){
        this.checkMapper = checkMapper;
    }

    public int getUidx(String u_phone){
        return checkMapper.getUidx(u_phone);
    }

    public int insertCheck(String attendTime, int u_idx){
        return checkMapper.insertCheck(attendTime, u_idx);
    }

    public int insertCheckExit(String attendDate,String attendTime, int u_idx){
        return checkMapper.insertCheckExit(attendDate, attendTime, u_idx);
    }

    public LoadAttendCnt loadAttendCnt(int u_idx, int month){
        return checkMapper.getLoadAttendCnt(u_idx,month);
    }
}
