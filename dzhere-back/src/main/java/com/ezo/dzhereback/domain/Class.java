package com.ezo.dzhereback.domain;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Data @Slf4j
@Getter @Setter
@NoArgsConstructor
public class Class {
    private int c_idx;
    private String c_name;
    private int ag_idx;

    @Builder
    public Class(int c_idx, String c_name, int ag_idx) {
        this.c_idx = c_idx;
        this.c_name = c_name;
        this.ag_idx = ag_idx;
    }
}
