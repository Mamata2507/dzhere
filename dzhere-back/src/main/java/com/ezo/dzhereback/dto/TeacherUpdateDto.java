package com.ezo.dzhereback.dto;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Data
@Slf4j
@NoArgsConstructor
@Getter
@Setter
public class TeacherUpdateDto {
    private int u_idx;
    private String u_phone;
    private String u_email;

    @Builder
    public TeacherUpdateDto(int u_idx, String u_phone, String u_email) {
        this.u_idx = u_idx;
        this.u_phone = u_phone;
        this.u_email = u_email;
    }
}
