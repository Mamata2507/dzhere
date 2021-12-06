package com.ezo.dzhereback.domain;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Data
@Slf4j
@Getter
@Setter
@NoArgsConstructor
public class Teacher {
    private int a_idx;
    private int ag_idx;
    private int c_inx;
    private int u_auth;
    private String c_name;
    private String ag_name;
    private String u_name;
    private String u_phone;
    private String start_date;
    private String end_date;
    private String a_attend_time;  // 출석 시간
    private String a_exit_time;    // 퇴실 시간
    private String a_today_date;
    private int a_late_status;     // 지각
    private int a_absent;         // 조퇴
    private int a_leave;           // 결석
    private int a_not_exit;        // 미퇴실
    private int attend_state;      // 검색 조건 0 출석 1 지각 2 조퇴 3 결석 4 미퇴실
    private int attend_date_state; // 조회 기간 조건 0 사용 1 비사용

    @Builder
    public Teacher(int a_idx, int ag_idx, int c_inx, int u_auth, String c_name, String ag_name, String u_name, String u_phone, String start_date, String end_date, String a_attend_time, String a_exit_time, String a_today_date, int a_late_status, int a_absent, int a_leave, int a_not_exit, int attend_state, int attend_date_state) {
        this.a_idx = a_idx;
        this.ag_idx = ag_idx;
        this.c_inx = c_inx;
        this.u_auth = u_auth;
        this.c_name = c_name;
        this.ag_name = ag_name;
        this.u_name = u_name;
        this.u_phone = u_phone;
        this.start_date = start_date;
        this.end_date = end_date;
        this.a_attend_time = a_attend_time;
        this.a_exit_time = a_exit_time;
        this.a_today_date = a_today_date;
        this.a_late_status = a_late_status;
        this.a_absent = a_absent;
        this.a_leave = a_leave;
        this.a_not_exit = a_not_exit;
        this.attend_state = attend_state;
        this.attend_date_state = attend_date_state;
    }
}
