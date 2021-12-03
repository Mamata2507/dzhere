package com.ezo.dzhereback.domain;

import lombok.*;

import java.sql.Time;
import java.sql.Timestamp;

@Data
@Getter @Setter
@NoArgsConstructor
public class Attend {
    private int a_idx;
    private Timestamp a_attend_time;
    private Timestamp a_exit_time;
    private int a_leave; // tinyint
    private int a_late_status; // tinyint
    private int a_absent; // tinyint
    private int a_not_exit; // tinyint
    private Time a_result_time;
    private Timestamp a_today_date;
    private int u_idx;
    private String a_attend_state;  // 출결 상태 (출석, 결석)

    @Builder
    public Attend(int a_idx, Timestamp a_attend_time, Timestamp a_exit_time, int a_leave, int a_late_status, int a_absent, int a_not_exit, Time a_result_time, Timestamp a_today_date, int u_idx, String a_attend_state) {
        this.a_idx = a_idx;
        this.a_attend_time = a_attend_time;
        this.a_exit_time = a_exit_time;
        this.a_leave = a_leave;
        this.a_late_status = a_late_status;
        this.a_absent = a_absent;
        this.a_not_exit = a_not_exit;
        this.a_result_time = a_result_time;
        this.a_today_date = a_today_date;
        this.u_idx = u_idx;
        this.a_attend_state = a_attend_state;
    }
}
