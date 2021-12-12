package com.ezo.dzhereback.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Builder
@Slf4j
@NoArgsConstructor
@Data
public class PhoneDto {
    private String u_phone;
    private String insert_time;
    @Builder
    public PhoneDto(String u_phone, String insert_time) {
        this.u_phone = u_phone;
        this.insert_time = insert_time;
    }
}
