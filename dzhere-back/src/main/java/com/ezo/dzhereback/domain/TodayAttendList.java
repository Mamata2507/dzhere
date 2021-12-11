package com.ezo.dzhereback.domain;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
public class TodayAttendList {
    private int a_absent;
    private int a_leave;
    private int a_outgo_status;
    private int a_outgo_end_status;
    private String a_attend_time;
    private String a_exit_time;
    private String a_start_outgo;
    private String a_end_outgo;

    @Builder
    public TodayAttendList(int a_absent, int a_leave, int a_outgo_status, int a_outgo_end_status, String a_attend_time, String a_exit_time, String a_start_outgo, String a_end_outgo) {
        this.a_absent = a_absent;
        this.a_leave = a_leave;
        this.a_outgo_status = a_outgo_status;
        this.a_outgo_end_status = a_outgo_end_status;
        this.a_attend_time = a_attend_time;
        this.a_exit_time = a_exit_time;
        this.a_start_outgo = a_start_outgo;
        this.a_end_outgo = a_end_outgo;
    }
}
