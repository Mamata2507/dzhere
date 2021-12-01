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

    @Builder
    public TeacherDeleteDto(int[] u_idxes) {
        this.u_idxes = u_idxes;
    }
}


