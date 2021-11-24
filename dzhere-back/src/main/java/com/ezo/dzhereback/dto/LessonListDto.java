package com.ezo.dzhereback.dto;

import com.ezo.dzhereback.domain.Lesson;
import lombok.*;

@Data
@NoArgsConstructor
@Getter
@Setter
public class LessonListDto {
    private int c_idx;
    private String c_name;
    private int ag_idx;

    public Lesson toEntity(){
        return Lesson.builder()
                .c_idx(c_idx)
                .c_name(c_name)
                .ag_idx(ag_idx)
                .build();
    }

    @Builder
    public LessonListDto(int c_idx, String c_name, int ag_idx) {
        this.c_idx = c_idx;
        this.c_name = c_name;
        this.ag_idx = ag_idx;
    }
}
