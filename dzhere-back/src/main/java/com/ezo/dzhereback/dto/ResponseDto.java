package com.ezo.dzhereback.dto;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Builder @Slf4j
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ResponseDto<T> {
    private String error;
    private List<T> data;
}