package com.ezo.dzhereback.dto;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

// Mapper 함수를 통해서 받은
// 쿼리 결과를 Result에 담아서
// 요청에 대한 응답으로 넘겨준다.
@Data @Slf4j
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Result<T> {
    private T data;
}
