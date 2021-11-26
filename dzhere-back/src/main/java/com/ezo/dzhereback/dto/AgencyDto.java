package com.ezo.dzhereback.dto;
import com.ezo.dzhereback.domain.Agency;

import lombok.*;

@Data
@Getter @Setter
@NoArgsConstructor
public class AgencyDto {
	private int u_idx;
	private String u_phone;
	private String u_pw;
	private String u_email;
	private int u_alarm; // tinyint
	private String u_name;
	private int u_accept; // tinyint
	private int u_auth;
	private int c_idx;
	private int ag_idx;
	private String ag_name;

	@Builder
	public AgencyDto(int u_idx, String u_phone, String u_pw, String u_email, int u_alarm, String u_name, int u_accept, int u_auth, int c_idx, int ag_idx, String ag_name) {
		this.u_idx = u_idx;
		this.u_phone = u_phone;
		this.u_pw = u_pw;
		this.u_email = u_email;
		this.u_alarm = u_alarm;
		this.u_name = u_name;
		this.u_accept = u_accept;
		this.u_auth = u_auth;
		this.c_idx = c_idx;
		this.ag_idx = ag_idx;
		this.ag_name = ag_name;
	}

	public Agency toEntity() {
		return Agency.builder()
				.u_idx(u_idx)
				.u_phone(u_phone)
				.u_pw(u_pw)
				.u_email(u_email)
				.u_alarm(u_alarm)
				.u_name(u_name)
				.u_accept(u_accept)
				.u_auth(u_auth)
				.c_idx(c_idx)
				.ag_idx(ag_idx)
				.ag_name(ag_name)
				.build();
	}
}