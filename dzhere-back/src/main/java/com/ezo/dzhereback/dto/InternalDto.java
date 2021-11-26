package com.ezo.dzhereback.dto;
import com.ezo.dzhereback.domain.Internal;
import lombok.*;

@Data
@Getter @Setter
@NoArgsConstructor
public class InternalDto {
	private int i_idx;
	private String i_name;
	private String i_ssid;
	private String i_bssid;
	private int ag_idx;
	private int c_idx;

	@Builder
	public InternalDto(int i_idx, String i_name, String i_ssid, String i_bssid, int ag_idx, int c_idx) {
		this.i_idx = i_idx;
		this.i_name = i_name;
		this.i_ssid = i_ssid;
		this.i_bssid = i_bssid;
		this.ag_idx = ag_idx;
		this.c_idx = c_idx;
	}

	public Internal toEntity() {
		return Internal.builder()
				.i_idx(i_idx)
				.i_name(i_name)
				.i_ssid(i_ssid)
				.i_bssid(i_bssid)
				.ag_idx(ag_idx)
				.c_idx(c_idx)
				.build();
	}

}
