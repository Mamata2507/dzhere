package com.ezo.dzhereback.dto;

import com.ezo.dzhereback.domain.Member;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Data @Slf4j
@NoArgsConstructor
@Getter @Setter
public class AuthDto {
    private String token;
    private int u_idx;
    private String userPhone;
    private String password;
    private String userEmail;

    public Member toEntity(){
        return Member.builder()
                .u_idx(u_idx)
                .u_phone(userPhone)
                .u_pw(password)
                .u_email(userEmail)
                .build();
    }

    @Builder
    public AuthDto(String token, int u_idx, String userPhone, String password, String userEmail) {
        this.token = token;
        this.u_idx = u_idx;
        this.userPhone = userPhone;
        this.password = password;
        this.userEmail = userEmail;
    }
}
