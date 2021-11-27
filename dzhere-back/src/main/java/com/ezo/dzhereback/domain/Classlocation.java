package com.ezo.dzhereback.domain;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Data @Slf4j
@Getter @Setter
@NoArgsConstructor
public class Classlocation {
    private int cl_idx;
    private String cl_name;
    private int c_idx;

    @Builder
    public Classlocation(int cl_idx, String cl_name, int c_idx) {
        this.cl_idx = cl_idx;
        this.cl_name = cl_name;
        this.c_idx = c_idx;
    }
}
