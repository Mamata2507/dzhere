package com.ezo.dzhereback.domain;

import lombok.*;

@Data
@Getter @Setter
@NoArgsConstructor
public class ClassInfo {
    private int c_idx;
    private String c_name;
    private int ag_idx;

    @Builder
    public ClassInfo(int c_idx, String c_name, int ag_idx) {
        this.c_idx = c_idx;
        this.c_name = c_name;
        this.ag_idx = ag_idx;
    }
}
