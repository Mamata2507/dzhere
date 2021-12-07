package com.ezo.dzhereback.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

@Builder @Slf4j
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ResponseDto<T> {
    private String error;
    private List<T> data;
}