package com.ezo.dzhereback.domain;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
public class AttendList {
    private String a_today_date;
    private String a_attend_time;
    private String a_exit_time;
    private String a_result_time;
    private String a_attend_state;
    @Builder
    public AttendList(String a_today_date, String a_attend_time, String a_exit_time, String a_result_time, String a_attend_state) {
        this.a_today_date = a_today_date;
        this.a_attend_time = a_attend_time;
        this.a_exit_time = a_exit_time;
        this.a_result_time = a_result_time;
        this.a_attend_state = a_attend_state;
    }
}
