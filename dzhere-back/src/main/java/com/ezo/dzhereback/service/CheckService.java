package com.ezo.dzhereback.service;

import com.ezo.dzhereback.domain.AttendList;
import com.ezo.dzhereback.domain.LoadAttendCnt;
import com.ezo.dzhereback.domain.TodayAttendList;
import com.ezo.dzhereback.domain.WifiInfo;
import com.ezo.dzhereback.mapper.CheckMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public int insertCheck(String attendTime, int u_idx, int c_idx){
        return checkMapper.insertCheck(attendTime, u_idx, c_idx);
    }

    public int insertCheckLeave(String attendDate,String attendTime, int u_idx){
        return checkMapper.insertCheckLeave(attendDate, attendTime, u_idx);
    }

    public int insertCheckExit(String attendDate,String attendTime, int u_idx){
        return checkMapper.insertCheckExit(attendDate, attendTime, u_idx);
    }

    public LoadAttendCnt loadAttendCnt(int u_idx, int month){
        return checkMapper.getLoadAttendCnt(u_idx,month);
    }

    public LoadAttendCnt loadAllAttendCnt(int u_idx){
        return checkMapper.getLoadAllAttendCnt(u_idx);
    }

    public List<AttendList> loadAttendList(int u_idx, int month){
        return checkMapper.getLoadAttendList(u_idx,month);
    }

    public List<AttendList> loadAllAttendList(int u_idx){
        return checkMapper.getLoadAllAttendList(u_idx);
    }

    public int checkInternalWifiInfo(String bssid, int ag_idx, int c_idx){
        return checkMapper.checkInternalWifiInfo(bssid, ag_idx, c_idx);
    }

    public int checkExternalWifiInfo(String bssid, int u_idx, int c_idx, int e_accept){
        return checkMapper.checkExternalWifiInfo(bssid, u_idx, c_idx, e_accept);
    }

    public TodayAttendList loadTodayAttendList(int u_idx, String today){
        return checkMapper.getLoadTodayAttendList(u_idx, today);
    }
}
