package com.ezo.dzhereback.domain;

import lombok.*;

@Data
@Getter @Setter
@NoArgsConstructor
public class Internal {
    private int i_idx;
    private String i_name;
    private String i_ssid;
    private String i_bssid;
    private int ag_idx;
    private int c_idx;

    @Builder
    public Internal(int i_idx, String i_name, String i_ssid, String i_bssid, int ag_idx, int c_idx) {
        this.i_idx = i_idx;
        this.i_name = i_name;
        this.i_ssid = i_ssid;
        this.i_bssid = i_bssid;
        this.ag_idx = ag_idx;
        this.c_idx = c_idx;
    }
}
