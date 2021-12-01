package com.ezo.dzhereback.dto;
import lombok.*;
import java.sql.Time;
import java.util.Date;

import com.ezo.dzhereback.domain.Lessontime;

@Data
@Getter @Setter
@NoArgsConstructor
public class LessontimeDto {
	private int ct_idx;
	private String ct_day;
	private String ct_start_time;
	private String ct_end_time;
	private String ct_attend_starttime;
	private String ct_attend_endtime;
	private String ct_start_date;
	private String ct_end_date;
	private String ct_break_start;
	private String ct_break_end;
	private String c_name;
	private int ag_idx;
	private int c_idx;

	@Builder
	public LessontimeDto(int ct_idx, String ct_day, String ct_start_time, String ct_end_time, String ct_attend_starttime,String ct_attend_endtime, String ct_start_date, String ct_end_date, String ct_break_start, String ct_break_end, String c_name, int ag_idx, int c_idx) {
		this.ct_idx = ct_idx;
		this.ct_day = ct_day;
		this.ct_start_time = ct_start_time;
		this.ct_end_time = ct_end_time;
		this.ct_attend_starttime = ct_attend_starttime;
		this.ct_attend_endtime = ct_attend_endtime;
		this.ct_start_date = ct_start_date;
		this.ct_end_date = ct_end_date;
		this.ct_break_start = ct_break_start;
		this.ct_break_end = ct_break_end;
		this.c_name = c_name; // 강의명
		this.ag_idx = ag_idx;
		this.c_idx = c_idx;
	}

	public Lessontime toEntity() {
		return Lessontime.builder()
				.ct_idx(ct_idx)
				.ct_day(ct_day)
				.ct_start_time(ct_start_time)
				.ct_end_time(ct_end_time)
				.ct_attend_starttime(ct_attend_starttime)
				.ct_attend_endtime(ct_attend_endtime)
				.ct_start_date(ct_start_date)
				.ct_end_date(ct_end_date)
				.ct_break_start(ct_break_start)
				.ct_break_end(ct_break_end)
				.c_idx(c_idx)
				.build();
	}
}

