package com.ezo.dzhereback.dto;
import lombok.*;

@Data
@Getter @Setter
@NoArgsConstructor
public class UserDto {
    private int u_idx;
    private String u_phone;
    private String u_pw;
    private String u_email;
    private int u_alarm; // tinyint
    private String u_name;
    private int u_accept; // tinyint
    private int u_auth;
    private int c_idx;
    private int ag_idx;

    @Builder
    public UserDto(int u_idx, String u_phone, String u_pw, String u_email, int u_alarm, String u_name, int u_accept, int u_auth, int c_idx, int ag_idx) {
        this.u_idx = u_idx;
        this.u_phone = u_phone;
        this.u_pw = u_pw;
        this.u_email = u_email;
        this.u_alarm = u_alarm;
        this.u_name = u_name;
        this.u_accept = u_accept;
        this.u_auth = u_auth;
        this.c_idx = c_idx;
        this.ag_idx = ag_idx;
    }
}