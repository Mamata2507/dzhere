package com.ezo.dzhereback.dto;
import com.ezo.dzhereback.domain.ClassInfo;

import lombok.*;

@Data
@Getter @Setter
@NoArgsConstructor
public class ClassInfoDto {
    private int c_idx;
    private String c_name;
    private int ag_idx;

    @Builder
    public ClassInfoDto(int c_idx, String c_name, int ag_idx) {
        this.c_idx = c_idx;
        this.c_name = c_name;
        this.ag_idx = ag_idx;
    }
    
    public ClassInfo toEntity() {
		return ClassInfo.builder()
				.c_idx(c_idx)
				.c_name(c_name)
				.ag_idx(ag_idx)
				.build();
	}
}
