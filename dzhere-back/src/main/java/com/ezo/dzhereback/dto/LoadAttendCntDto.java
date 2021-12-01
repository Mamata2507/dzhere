package com.ezo.dzhereback.dto;

import com.ezo.dzhereback.domain.LoadAttendCnt;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@Getter
@Setter
public class LoadAttendCntDto {
    private int a_leave_cnt; // 결석일수
    private int a_late_status_cnt; // 지각일수
    private int a_absent_cnt; // 조퇴일수
    private int a_not_exit_cnt; // 미퇴실일수
    private int a_total_cnt;  // 총 훈련일수
    private int a_real_date_cnt;  // 실시 일수

    public LoadAttendCnt toEntity(){
        return LoadAttendCnt.builder()
                .a_leave_cnt(a_leave_cnt)
                .a_late_status_cnt(a_late_status_cnt)
                .a_absent_cnt(a_absent_cnt)
                .a_not_exit_cnt(a_not_exit_cnt)
                .build();
    }

    public LoadAttendCntDto(int a_leave_cnt, int a_late_status_cnt, int a_absent_cnt, int a_not_exit_cnt, int a_total_cnt, int a_real_date_cnt) {
        this.a_leave_cnt = a_leave_cnt;
        this.a_late_status_cnt = a_late_status_cnt;
        this.a_absent_cnt = a_absent_cnt;
        this.a_not_exit_cnt = a_not_exit_cnt;
        this.a_total_cnt = a_total_cnt;
        this.a_real_date_cnt = a_real_date_cnt;
    }
}
