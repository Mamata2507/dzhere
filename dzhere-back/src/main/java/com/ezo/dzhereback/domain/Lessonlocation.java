package com.ezo.dzhereback.domain;

import lombok.*;

@Data
@Getter @Setter
@NoArgsConstructor
public class Lessonlocation {
    private int cl_idx;
    private String cl_name;
    private int c_idx;
    private String c_name;

    @Builder
    public Lessonlocation(int cl_idx, String cl_name, int c_idx, String c_name) {
        this.cl_idx = cl_idx;
        this.cl_name = cl_name;
        this.c_idx = c_idx;
        this.c_name = c_name;
    }
}
