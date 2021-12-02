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
    private int c_idx;
    private int ag_idx;
    private String u_name;
    private String u_phone;
    private String u_email;

    @Builder
    public TeacherUpdateDto(int u_idx, int c_idx, int ag_idx, String u_name, String u_phone, String u_email) {
        this.u_idx = u_idx;
        this.c_idx = c_idx;
        this.ag_idx = ag_idx;
        this.u_name = u_name;
        this.u_phone = u_phone;
        this.u_email = u_email;
    }
}
