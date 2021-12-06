package com.ezo.dzhereback.dto;


import com.ezo.dzhereback.domain.TeacherAttend;
import lombok.*;
import lombok.extern.slf4j.Slf4j;



import lombok.*;
import lombok.extern.slf4j.Slf4j;

import java.sql.Time;
import java.sql.Timestamp;


@Data
@Slf4j
@NoArgsConstructor
@Getter
@Setter
public class TeacherAttendSYDto {

    private int  a_absent;
    private String  a_attend_time;
    private String  a_exit_time;
    private int a_idx;
    private int a_late_status;
    private int a_leave;
    private int a_not_exit;
    private String a_today_date;
    private int ag_idx;
    private String ag_name;
    private int attend_date_state;
    private int attend_state;
    private int c_inx;
    private String c_name;
    private String end_date;
    private String start_date;
    private String u_name;
    private String u_phone;

    @Builder
    public TeacherAttendSYDto(int a_absent, String a_attend_time, String a_exit_time, int a_idx, int a_late_status, int a_leave, int a_not_exit, String a_today_date, int ag_idx, String ag_name, int attend_date_state, int attend_state, int c_inx, String c_name, String end_date, String start_date, String u_name, String u_phone) {
        this.a_absent = a_absent;
        this.a_attend_time = a_attend_time;
        this.a_exit_time = a_exit_time;
        this.a_idx = a_idx;
        this.a_late_status = a_late_status;
        this.a_leave = a_leave;
        this.a_not_exit = a_not_exit;
        this.a_today_date = a_today_date;
        this.ag_idx = ag_idx;
        this.ag_name = ag_name;
        this.attend_date_state = attend_date_state;
        this.attend_state = attend_state;
        this.c_inx = c_inx;
        this.c_name = c_name;
        this.end_date = end_date;
        this.start_date = start_date;
        this.u_name = u_name;
        this.u_phone = u_phone;
    }

    public TeacherAttend toEntity() {
        return TeacherAttend.builder()
                .a_absent(a_absent)
                .a_attend_time(a_attend_time)
                .a_exit_time(a_exit_time)
                .a_idx(a_idx)
                .a_late_status(a_late_status)
                .a_leave(a_leave)
                .a_not_exit(a_not_exit)
                .a_today_date(a_today_date)
                .ag_idx(ag_idx)
                .ag_name(ag_name)
                .attend_date_state(attend_date_state)
                .attend_state(attend_state)
                .c_inx(c_inx)
                .c_name(c_name)
                .end_date(end_date)
                .start_date(start_date)
                .u_name(u_name)
                .u_phone(u_phone)
                .build();


    }
}
