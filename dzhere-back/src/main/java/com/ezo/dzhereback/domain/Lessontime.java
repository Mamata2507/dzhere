package com.ezo.dzhereback.domain;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

import java.sql.Time;
import java.util.Date;

@Data @Slf4j

@Getter @Setter
@NoArgsConstructor
public class Lessontime {
    private int ct_idx;
    private String ct_day;
    private String ct_start_time;
    private String ct_end_time;
    private String ct_attend_starttime;
    private String ct_attend_endtime;
    private String ct_start_date;
    private String ct_end_date;
    private String ct_break_start;
    private String ct_break_end;
    private int c_idx;
    private int ct_start_hour;
    private int ct_start_minute;
    private int ct_end_hour;
    private int ct_end_minute;

    @Builder
    public Lessontime(int ct_idx, String ct_day, String ct_start_time, String ct_end_time, String ct_attend_starttime,String ct_attend_endtime, String ct_start_date, String ct_end_date, String ct_break_start, String ct_break_end, int c_idx, int ct_start_hour, int ct_start_minute, int ct_end_hour, int ct_end_minute) {
        this.ct_idx = ct_idx;
        this.ct_day = ct_day;
        this.ct_start_time = ct_start_time;
        this.ct_end_time = ct_end_time;
        this.ct_attend_starttime = ct_attend_starttime;
        this.ct_attend_endtime = ct_attend_endtime;
        this.ct_start_date = ct_start_date;
        this.ct_end_date = ct_end_date;
        this.ct_break_start = ct_break_start;
        this.ct_break_end = ct_break_end;
        this.c_idx = c_idx;
        this.ct_start_hour = ct_start_hour;
        this.ct_start_minute = ct_start_minute;
        this.ct_end_hour = ct_end_hour;
        this.ct_end_minute = ct_end_minute;
    }
}
