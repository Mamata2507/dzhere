package com.ezo.dzhereback.dto;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Data
@Slf4j
@NoArgsConstructor
@Getter
@Setter
public class TeacherAddDto {
    private String u_phone;
    private String u_name;
    private String c_idx;
    private String ag_idx;

    @Builder
    public TeacherAddDto(String u_phone, String u_name, String c_idx, String ag_idx) {
        this.u_phone = u_phone;
        this.u_name = u_name;
        this.c_idx = c_idx;
        this.ag_idx = ag_idx;
    }
}
