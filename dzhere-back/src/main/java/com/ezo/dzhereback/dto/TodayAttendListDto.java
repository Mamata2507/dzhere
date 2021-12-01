package com.ezo.dzhereback.dto;

import com.ezo.dzhereback.domain.TodayAttendList;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@Getter
@Setter
public class TodayAttendListDto {
    private int a_absent;
    private String a_attend_time;
    private String a_exit_time;

    public TodayAttendList toEntity(){
        return TodayAttendList.builder()
                .a_absent(a_absent)
                .a_attend_time(a_attend_time)
                .a_exit_time(a_exit_time)
                .build();
    }

    public TodayAttendListDto(int a_absent, String a_attend_time, String a_exit_time) {
        this.a_absent = a_absent;
        this.a_attend_time = a_attend_time;
        this.a_exit_time = a_exit_time;
    }
}
