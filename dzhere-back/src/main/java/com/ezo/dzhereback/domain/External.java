package com.ezo.dzhereback.domain;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

@Data @Slf4j
@Getter @Setter
@NoArgsConstructor
public class External {
    private int e_idx;
    private String e_name;
    private String e_ssid;
    private String e_bssid;
    private int e_accept; // tinyint
    private int u_idx;
    private int c_idx;

    @Builder
    public External(int e_idx, String e_name, String e_ssid, String e_bssid, int e_accept, int u_idx, int c_idx) {
        this.e_idx = e_idx;
        this.e_name = e_name;
        this.e_ssid = e_ssid;
        this.e_bssid = e_bssid;
        this.e_accept = e_accept;
        this.u_idx = u_idx;
        this.c_idx = c_idx;
    }
}
