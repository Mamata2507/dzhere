package com.ezo.dzhereback.dto;

import com.ezo.dzhereback.domain.StudentCount;
import lombok.*;

@Data
@NoArgsConstructor
@Getter
@Setter
public class StudentCountDto {
    private int c_idx;
    private String c_name;
    private int ag_idx;
    private String ag_name;
    private int ct_idx;
    private String ct_day;
    private String ct_start_date;
    private String ct_end_date;
    private int total_count;

    public StudentCount toEntity(){
        return StudentCount.builder()
                .c_idx(c_idx)
                .c_name(c_name)
                .ag_idx(ag_idx)
                .ag_name(ag_name)
                .ct_idx(ct_idx)
                .ct_day(ct_day)
                .ct_start_date(ct_start_date)
                .ct_end_date(ct_end_date)
                .total_count(total_count)
                .build();
    }

    @Builder
    public StudentCountDto(int c_idx, String c_name, int ag_idx, String ag_name, int ct_idx, String ct_day, String ct_start_date, String ct_end_date, int total_count) {
        this.c_idx = c_idx;
        this.c_name = c_name;
        this.ag_idx = ag_idx;
        this.ag_name = ag_name;
        this.ct_idx = ct_idx;
        this.ct_day = ct_day;
        this.ct_start_date = ct_start_date;
        this.ct_end_date = ct_end_date;
        this.total_count = total_count;
    }
}
