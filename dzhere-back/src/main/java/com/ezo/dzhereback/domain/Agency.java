package com.ezo.dzhereback.domain;

import lombok.*;

@Data
@Getter @Setter
@NoArgsConstructor
public class Agency {
    private int ag_idx;
    private String ag_name;

    @Builder
    public Agency(int ag_idx, String ag_name) {
        this.ag_idx = ag_idx;
        this.ag_name = ag_name;
    }
}
