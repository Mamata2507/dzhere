package com.ezo.dzhereback.service;

import com.ezo.dzhereback.domain.Attend;
import com.ezo.dzhereback.mapper.TestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestService {
    private final TestMapper testMapper;

    @Autowired
    public TestService(TestMapper testMapper) {
        this.testMapper = testMapper;
    }

    public Attend getAttend(int id) { return testMapper.getAttend(id); }
}
