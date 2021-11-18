package com.ezo.dzhereback.dto;

import com.ezo.dzhereback.domain.Attend;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import java.sql.Time;
import java.sql.Timestamp;

@Data @Slf4j
@NoArgsConstructor
@Getter
@Setter
public class TestDto {
    private Time a_result_time;
    private Timestamp a_today_date;

//    public Attend toEntity(){
//        // builder -> Attend 객체 생성
//        // builder? 원하는 필드만 가지는 객체를 만들 때 유용하다
//        return Attend.builder()
//                //.원형 객체 필드(현재 dto 클래스 필드)
//                // get, set 같은 느낌..
//                .a_result_time(a_result_time)
//                .a_today_date(a_today_date)
//                .build();
//    }

    @Builder
    public TestDto(Time a_result_time, Timestamp a_today_date) {
        this.a_result_time = a_result_time;
        this.a_today_date = a_today_date;
    }
}
