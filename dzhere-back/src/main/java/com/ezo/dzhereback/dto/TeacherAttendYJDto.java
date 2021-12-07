package com.ezo.dzhereback.dto;

import lombok.*;
import lombok.extern.slf4j.Slf4j;


@Data
@Slf4j
@NoArgsConstructor
@Getter
@Setter
public class TeacherAttendYJDto {
    private int a_idx;
    private int u_idx;
    private String a_today_date;    // Timestamp ? String
    private String c_name;
    private String u_name;
    private String a_attend_time; // Timestamp ? String
    private String a_exit_time; // Timestamp ? String
    private int a_late_status; // tinyint
    private int a_leave; // tinyint
    private int a_absent; // tinyint
    private int a_not_exit;
    private String a_result_time; // Timestamp ? String ? Time
    private String start_date;
    private String end_date;

    @Builder
    public TeacherAttendYJDto(int a_idx, int u_idx, String a_today_date, String c_name, String u_name, String a_attend_time, String a_exit_time, int a_late_status, int a_leave, int a_absent, int a_not_exit, String a_result_time, String start_date, String end_date) {
        this.a_idx = a_idx;
        this.u_idx = u_idx;
        this.a_today_date = a_today_date;
        this.c_name = c_name;
        this.u_name = u_name;
        this.a_attend_time = a_attend_time;
        this.a_exit_time = a_exit_time;
        this.a_late_status = a_late_status;
        this.a_leave = a_leave;
        this.a_absent = a_absent;
        this.a_not_exit = a_not_exit;
        this.a_result_time = a_result_time;
        this.start_date = start_date;
        this.end_date = end_date;
    }
}
