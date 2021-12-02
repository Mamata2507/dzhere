package com.ezo.dzhereback.dto;

import com.ezo.dzhereback.domain.Member;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Data @Slf4j
@NoArgsConstructor
@Getter @Setter
public class AuthAdminDto {
    private String token;
    private int u_idx;
    private String userPhone;
    private String password;
    private String userEmail;
    private String userName;
    private int c_idx;
    private int ag_idx;

    public Member toEntity(){
        return Member.builder()
                .u_idx(u_idx)
                .u_phone(userPhone)
                .u_pw(password)
                .u_email(userEmail)
                .u_name(userName)
                .c_idx(c_idx)
                .ag_idx(ag_idx)
                .build();
    }

    @Builder

    public AuthAdminDto(String token, int u_idx, String userPhone, String password, String userEmail, String userName, int c_idx, int ag_idx) {
        this.token = token;
        this.u_idx = u_idx;
        this.userPhone = userPhone;
        this.password = password;
        this.userEmail = userEmail;
        this.userName = userName;
        this.c_idx = c_idx;
        this.ag_idx = ag_idx;
    }
}