package com.ezo.dzhereback.dto;

import lombok.*;

@Data
@NoArgsConstructor
@Getter
@Setter
public class ListAdminDto {
	private int ag_idx;
	private String ag_name;
	private int c_idx;
	private String c_name;
	private int u_idx;
	private String u_name;
	private String u_phone;
	private int u_accept;

	@Builder
	public ListAdminDto(int ag_idx, String ag_name, int c_idx, String c_name,
                      int u_idx, String u_name, String u_phone, int u_accept) {
		this.ag_idx = ag_idx;
		this.ag_name = ag_name;
		this.c_idx = c_idx;
		this.c_name = c_name;
		this.u_idx = u_idx;
		this.u_name = u_name;
		this.u_phone = u_phone;
		this.u_accept = u_accept;
		
	}
	

}
