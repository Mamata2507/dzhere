package com.ezo.dzhereback.dto;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Data
@Slf4j
@NoArgsConstructor
@Getter
@Setter
public class TeacherInfoDto {
    private int u_idx;
    private int ag_idx;
    private int c_idx;
    private String ag_name;
    private String c_name;
    private String u_name;
    private String u_phone;
    private String u_email;
    private int u_accept;

    @Builder
    public TeacherInfoDto(int u_idx, int ag_idx, int c_idx, String ag_name, String c_name, String u_name, String u_phone, String u_email, int u_accept) {
        this.u_idx = u_idx;
        this.ag_idx = ag_idx;
        this.c_idx = c_idx;
        this.ag_name = ag_name;
        this.c_name = c_name;
        this.u_name = u_name;
        this.u_phone = u_phone;
        this.u_email = u_email;
        this.u_accept = u_accept;
    }
}
