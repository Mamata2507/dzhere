package com.ezo.dzhereback.dto;

import com.ezo.dzhereback.domain.Member;
import lombok.*;

@Data
@NoArgsConstructor
@Getter @Setter
public class UserTestDto {
    private String u_name;

    public Member toEntity(){
        return Member.builder()
                .u_name(u_name)
                .build();
    }

    @Builder
    public UserTestDto(String u_name) {
        this.u_name = u_name;
    }
}
