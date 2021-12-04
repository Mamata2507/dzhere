package com.ezo.dzhereback.dto;

import com.ezo.dzhereback.domain.Teacher;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Data
@Slf4j
@NoArgsConstructor
@Getter
@Setter
public class TeacherSearchDto {
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
    private String a_today_date;
    private int a_late_status;     // 지각
    private int a_abscent;       // 조퇴
    private int a_leave;         // 결석
    private int a_not_exit;      // 미퇴실
    private int attend_state;    // 상태 코드
    private int attend_date_state;

    public Teacher toEntity(){
        return Teacher.builder()
                .a_idx(a_idx)
                .ag_idx(ag_idx)
                .c_inx(c_inx)
                .u_auth(u_auth)
                .c_name(c_name)
                .ag_name(ag_name)
                .u_name(u_name)
                .u_phone(u_phone)
                .start_date(start_date)
                .end_date(end_date)
                .a_today_date(a_today_date)
                .a_late_status(a_late_status)
                .a_abscent(a_abscent)
                .a_leave(a_leave)
                .a_not_exit(a_not_exit)
                .attend_state(attend_state)
                .attend_date_state(attend_date_state)
                .build();
    }

    @Builder
    public TeacherSearchDto(int ag_idx, int c_inx, String c_name, String ag_name, String u_name, String u_phone, String start_date, String end_date, int a_late_status, int a_abscent, int a_leave, int a_not_exit) {
        this.ag_idx = ag_idx;
        this.c_inx = c_inx;
        this.c_name = c_name;
        this.ag_name = ag_name;
        this.u_name = u_name;
        this.u_phone = u_phone;
        this.start_date = start_date;
        this.end_date = end_date;
        this.a_late_status = a_late_status;
        this.a_abscent = a_abscent;
        this.a_leave = a_leave;
        this.a_not_exit = a_not_exit;
    }
}
