package com.ezo.dzhereback.dto;

import com.ezo.dzhereback.domain.Member;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Data @Slf4j
@NoArgsConstructor
@Getter @Setter
public class AuthDto {
    private String token;
    private int u_id;
    private String userPhone;
    private String password;
    private String u_email;

    public Member toEntity(){
        return Member.builder()
                .u_id(u_id)
                .u_phone(userPhone)
                .u_pw(password)
                .u_email(u_email)
                .build();
    }

    @Builder
    public AuthDto(String token, int u_id, String u_phone, String u_pw, String u_email) {
        this.token = token;
        this.u_id = u_id;
        this.userPhone = u_phone;
        this.password = u_pw;
        this.u_email = u_email;
    }
}
