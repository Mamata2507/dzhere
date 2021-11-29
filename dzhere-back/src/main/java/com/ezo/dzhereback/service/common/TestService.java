package com.ezo.dzhereback.service.common;

import com.ezo.dzhereback.domain.Attend;
import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.mapper.common.TestMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service @Slf4j
public class TestService {
    private final TestMapper testMapper;

    @Autowired
    public TestService(TestMapper testMapper) {
        this.testMapper = testMapper;
    }

    public Attend getAttend(int id) { return testMapper.getAttend(id); }

    public Member findKre(){
        return testMapper.findKre();
    }
}
