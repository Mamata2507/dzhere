package com.ezo.dzhereback.dto;

import com.ezo.dzhereback.domain.User;
import lombok.*;

@Data
@NoArgsConstructor
@Getter
@Setter
public class CheckInsertDto {
    String u_phone;
    public User toEntity(){
        return User.builder()
                .u_phone(u_phone)
                .build();
    }

    @Builder
    public CheckInsertDto(String u_phone) {
        this.u_phone = u_phone;
    }
}
