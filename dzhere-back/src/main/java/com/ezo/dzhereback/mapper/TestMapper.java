package com.ezo.dzhereback.mapper;

import com.ezo.dzhereback.domain.Attend;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface TestMapper {
    // #{} : 작은 따옴표(') 포함
    // ${} : 작은 따옴표(') 미포함.
    @Select("select a_result_time, a_today_date from Attend where u_idx=${id}")
    // Attend -> resultType
    // getAttend가 select 쿼리문을 실행함
    Attend getAttend(int id);
}
