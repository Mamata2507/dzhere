package com.ezo.dzhereback.dto;

import com.ezo.dzhereback.domain.Member;
import lombok.*;

@Data
@NoArgsConstructor
@Getter @Setter
public class AuthDto {
    private String token;
    private int u_id;
    private String u_phone;
    private String u_pw;
    private String u_email;

    public Member toEntity(){
        return Member.builder()
                .u_id(u_id)
                .u_phone(u_phone)
                .u_pw(u_pw)
                .u_email(u_email)
                .build();
    }

    @Builder
    public AuthDto(String token, int u_id, String u_phone, String u_pw, String u_email) {
        this.token = token;
        this.u_id = u_id;
        this.u_phone = u_phone;
        this.u_pw = u_pw;
        this.u_email = u_email;
    }
}
