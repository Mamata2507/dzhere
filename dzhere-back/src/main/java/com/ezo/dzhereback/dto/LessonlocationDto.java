package com.ezo.dzhereback.dto;

import com.ezo.dzhereback.domain.Lessonlocation;
import lombok.*;

@Data
@Getter @Setter
@NoArgsConstructor
public class LessonlocationDto {
    private int cl_idx;
    private String cl_name;
    private int c_idx;
    private String c_name;

    @Builder
    public LessonlocationDto(int cl_idx, String cl_name, int c_idx, String c_name) {
        this.cl_idx = cl_idx;
        this.cl_name = cl_name;
        this.c_idx = c_idx;
        this.c_name = c_name;
    }
    
    public Lessonlocation toEntity() {
		return Lessonlocation.builder()
				.cl_idx(cl_idx)
				.cl_name(cl_name)
				.c_idx(c_idx)
				.c_name(c_name)
				.build();
	}
}