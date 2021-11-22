package com.ezo.dzhereback.dto;
import com.ezo.dzhereback.domain.External;
import com.ezo.dzhereback.domain.External.ExternalBuilder;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
public class ExternalDto {
	private int e_idx;
	private String e_name;
	private String e_ssid;
	private String e_bssid;
	private int e_accept; // tinyint
	private int u_idx;
	private int c_idx;
	private String u_phone;

	@Builder
	public ExternalDto(int e_idx, String e_name, String e_ssid, String e_bssid, int e_accept, int u_idx, int c_idx, String u_phone) {
		this.e_idx = e_idx;
		this.e_name = e_name;
		this.e_ssid = e_ssid;
		this.e_bssid = e_bssid;
		this.e_accept = e_accept;
		this.u_idx = u_idx;
		this.c_idx = c_idx;
		this.u_phone = u_phone;
	}

	public External toEntity() {
		return External.builder()
				.e_idx(e_idx)
				.e_name(e_name)
				.e_ssid(e_ssid)
				.e_bssid(e_bssid)
				.e_accept(e_accept)
				.u_idx(u_idx)
				.c_idx(c_idx)
				.build();
	}

}
