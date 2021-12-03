package com.ezo.dzhereback.dto;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Data
@Slf4j
@NoArgsConstructor
@Getter
@Setter
public class TeacherIdxNameDto {
    private int u_idx;
    private String u_name;

    @Builder
    public TeacherIdxNameDto(int u_idx, String u_name) {
        this.u_idx = u_idx;
        this.u_name = u_name;
    }
}
