package com.ezo.dzhereback.mapper.admin;

import com.ezo.dzhereback.domain.StudentCount;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface StudentCountMapper {
    @Select("select AG.ag_name, CT.ct_start_date, CT.ct_end_date, C.c_name,count(*)\n" +
            "from User U \n" +
            "left join Class C\n" +
            "on U.c_idx = C.c_idx\n" +
            "left join Agency AG\n" +
            "on U.ag_idx = AG.ag_idx\n" +
            "left join Classtime CT\n" +
            "on U.c_idx = CT.c_idx\n" +
            "where AG.ag_idx = #{stCount.ag_idx} and C.c_idx=#{stCount.c_idx}\n" +
            "group by C.c_idx")
    StudentCount getStudentCount(@Param("stCount") StudentCount studentCount);
}
