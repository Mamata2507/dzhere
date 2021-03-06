package com.ezo.dzhereback.mapper.common;

import com.ezo.dzhereback.domain.Attend;
import com.ezo.dzhereback.domain.Member;
import lombok.extern.slf4j.Slf4j;
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

    @Select("select u_name from User where u_idx=4")
    Member findKre();
}
