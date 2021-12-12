package com.ezo.dzhereback.dto;

import com.ezo.dzhereback.domain.User;
import lombok.*;

@Data
@NoArgsConstructor
@Getter
@Setter
public class CheckInsertDto {
    String u_phone;
    String insert_time;
    public User toEntity(){
        return User.builder()
                .u_phone(u_phone)
                .insert_time(insert_time)
                .build();
    }

    @Builder
    public CheckInsertDto(String u_phone, String insert_time) {
        this.u_phone = u_phone;
        this.insert_time = insert_time;
    }
}
