package com.ezo.dzhereback.domain;

import lombok.*;

import java.sql.Time;
import java.util.Date;

@Data
@Getter @Setter
@NoArgsConstructor
public class Lessontime {
    private int ct_idx;
    private String ct_day;
    private Time ct_start_time;
    private Time ct_end_time;
    private Time ct_attend_starttime;
    private Time ct_attend_endtime;
    private Date ct_start_date;
    private Date ct_end_date;
    private Time ct_break_start;
    private Time ct_break_end;
    private int c_idx;

    @Builder
    public Lessontime(int ct_idx, String ct_day, Time ct_start_time, Time ct_end_time, Time ct_attend_starttime, Time ct_attend_endtime, Date ct_start_date, Date ct_end_date, Time ct_break_start, Time ct_break_end, int c_idx) {
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
    }
}
