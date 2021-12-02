package com.ezo.dzhereback.dto;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Data
@Slf4j
@NoArgsConstructor
@Getter
@Setter
public class TeacherDeleteDto {
    private int[] u_idxes;
    private int c_idx;
    private int ag_idx;

    @Builder
    public TeacherDeleteDto(int[] u_idxes, int c_idx, int ag_idx) {
        this.u_idxes = u_idxes;
        this.c_idx = c_idx;
        this.ag_idx = ag_idx;
    }
}


