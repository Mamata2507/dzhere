package com.ezo.dzhereback.service.user;

import com.ezo.dzhereback.domain.AttendList;
import com.ezo.dzhereback.domain.LoadAttendCnt;
import com.ezo.dzhereback.domain.TodayAttendList;
import com.ezo.dzhereback.mapper.user.CheckUserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CheckUserService {
    CheckUserMapper checkUserMapper;
    @Autowired
    public CheckUserService(CheckUserMapper checkUserMapper){
        this.checkUserMapper = checkUserMapper;
    }

    public int getUidx(String u_phone){
        return checkUserMapper.getUidx(u_phone);
    }

    public int insertCheck(String attendTime, int u_idx, int c_idx){
        return checkUserMapper.insertCheck(attendTime, u_idx, c_idx);
    }

    public int insertCheckLeave(String attendDate,String attendTime, int u_idx){
        return checkUserMapper.insertCheckLeave(attendDate, attendTime, u_idx);
    }

    public int insertCheckExit(String attendDate,String attendTime, int u_idx){
        return checkUserMapper.insertCheckExit(attendDate, attendTime, u_idx);
    }

    public LoadAttendCnt loadAttendCnt(int u_idx, int month){
        return checkUserMapper.getLoadAttendCnt(u_idx,month);
    }

    public LoadAttendCnt loadAllAttendCnt(int u_idx){
        return checkUserMapper.getLoadAllAttendCnt(u_idx);
    }

    public List<AttendList> loadAttendList(int u_idx, int month){
        return checkUserMapper.getLoadAttendList(u_idx,month);
    }

    public List<AttendList> loadAllAttendList(int u_idx){
        return checkUserMapper.getLoadAllAttendList(u_idx);
    }

    public int checkInternalWifiInfo(String bssid, int ag_idx, int c_idx){
        return checkUserMapper.checkInternalWifiInfo(bssid, ag_idx, c_idx);
    }

    public int checkExternalWifiInfo(String bssid, int u_idx, int c_idx, int e_accept){
        return checkUserMapper.checkExternalWifiInfo(bssid, u_idx, c_idx, e_accept);
    }

    public TodayAttendList loadTodayAttendList(int u_idx, String today){
        return checkUserMapper.getLoadTodayAttendList(u_idx, today);
    }
}
