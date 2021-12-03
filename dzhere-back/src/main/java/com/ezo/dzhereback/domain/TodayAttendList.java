package com.ezo.dzhereback.domain;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
public class TodayAttendList {
    private int a_absent;
    private String a_attend_time;
    private String a_exit_time;

    @Builder
    public TodayAttendList(int a_absent, String u_phone, String a_attend_time, String a_exit_time) {
        this.a_absent = a_absent;
        this.a_attend_time = a_attend_time;
        this.a_exit_time = a_exit_time;
    }

}
