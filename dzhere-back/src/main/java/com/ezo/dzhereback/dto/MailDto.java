package com.ezo.dzhereback.dto;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Data
@Slf4j
@NoArgsConstructor
@Getter
@Setter
public class MailDto {
    private String address;
    private String title;
    private String message;

    @Builder

    public MailDto(String address, String title, String message) {
        this.address = address;
        this.title = title;
        this.message = message;
    }
}
