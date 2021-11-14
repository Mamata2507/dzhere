package com.ezo.dzhereback.domain;

import lombok.*;

@Data
@Getter @Setter
@NoArgsConstructor
public class Alarm {
    private int al_idx;
    private int u_idx;
    private int ct_idx;

    @Builder
    public Alarm(int al_idx, int u_idx, int ct_idx) {
        this.al_idx = al_idx;
        this.u_idx = u_idx;
        this.ct_idx = ct_idx;
    }
}
