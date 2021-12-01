package com.ezo.dzhereback.domain;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
public class WifiInfo {
    private String ssid;
    private String ipAddress;
    private String bssid;
    private String u_phone;

    @Builder
    public WifiInfo(String ssid, String ipAddress, String bssid, String u_phone) {
        this.ssid = ssid;
        this.ipAddress = ipAddress;
        this.bssid = bssid;
        this.u_phone = u_phone;
    }
}
