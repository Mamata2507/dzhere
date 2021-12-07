package com.ezo.dzhereback.dto;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Data
@NoArgsConstructor
@Getter
@Setter
public class MyInfoDto {
	private String u_phone;
	private String u_email;
	private String u_pw;
	private int ct_start_hour;
	private int ct_start_minute;
	private int ct_end_hour;
	private int ct_end_minute;
	private String ct_day;

	@Builder
	public MyInfoDto(String u_phone, String u_email, String u_pw, int ct_start_hour, int ct_start_minute, int ct_end_hour, int ct_end_minute, String ct_day) {
		this.u_phone = u_phone;
		this.u_email = u_email;
		this.u_pw = u_pw;
		this.ct_start_hour = ct_start_hour;
		this.ct_start_minute = ct_start_minute;
		this.ct_end_hour = ct_end_hour;
		this.ct_end_minute = ct_end_minute;
		this.ct_day = ct_day;
	}
}