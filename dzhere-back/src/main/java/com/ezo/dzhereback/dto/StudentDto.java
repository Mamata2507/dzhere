package com.ezo.dzhereback.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@Getter
@Setter
public class StudentDto {
	private int ag_idx;
	private String ag_name;
	private int c_idx;
	private String c_name;

	@Builder
	public StudentDto(int ag_idx, String ag_name, int c_idx, String c_name) {
		this.ag_idx = ag_idx;
		this.ag_name = ag_name;
		this.c_idx = c_idx;
		this.c_name = c_name;
	}
	

}
