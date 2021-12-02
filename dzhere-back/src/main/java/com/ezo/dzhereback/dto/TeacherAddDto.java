package com.ezo.dzhereback.dto;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Data
@Slf4j
@NoArgsConstructor
@Getter
@Setter
public class TeacherAddDto {
    private String u_name;
    private String u_phone;
    private String u_email;
    private int c_idx;
    private int ag_idx;

    @Builder
    public TeacherAddDto(String u_name, String u_phone, String u_email, int c_idx, int ag_idx) {
        this.u_name = u_name;
        this.u_phone = u_phone;
        this.u_email = u_email;
        this.c_idx = c_idx;
        this.ag_idx = ag_idx;
    }
}
