package com.ezo.dzhereback.dto;
import com.ezo.dzhereback.domain.External;
import com.ezo.dzhereback.domain.External.ExternalBuilder;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
public class ExternalSelectDto {
	private int e_idx;
	private String e_name;
	private String e_ssid;
	private int e_accept; // tinyint


	@Builder
	public ExternalSelectDto(int e_idx, String e_name, String e_ssid, int e_accept) {
		this.e_idx = e_idx;
		this.e_name = e_name;
		this.e_ssid = e_ssid;
		this.e_accept = e_accept;
	}

	public External toEntity() {
		return External.builder()
				.e_idx(e_idx)
				.e_name(e_name)
				.e_ssid(e_ssid)
				.e_accept(e_accept)
				.build();
	}

}
