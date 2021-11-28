package com.ezo.dzhereback.dto;

import com.ezo.dzhereback.domain.WifiInfo;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@Getter
@Setter
public class WifiInfoDto {
    private String ssid;
    private String ipAddress;
    private String bssid;
    private String u_phone;

    public WifiInfo toEntity() {
        return WifiInfo.builder()
                .ssid(ssid)
                .ipAddress(ipAddress)
                .bssid(bssid)
                .u_phone(u_phone)
                .build();
    }

    public WifiInfoDto(String ssid, String ipAddress, String bssid, String u_phone) {
        this.ssid = ssid;
        this.ipAddress = ipAddress;
        this.bssid = bssid;
        this.u_phone = u_phone;
    }
}
