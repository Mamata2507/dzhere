package com.ezo.dzhereback.controller.user;

import com.ezo.dzhereback.domain.Attend;
import com.ezo.dzhereback.dto.Result;
import com.ezo.dzhereback.dto.TestDto;
import com.ezo.dzhereback.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    private final TestService testService;

    @Autowired
    public TestController(TestService testService) {
        this.testService = testService;
    }

    // @GetMapping("접근할 api url 주소")
    @GetMapping("/api/get-attend/{id}")
    public Result getAttend(@PathVariable("id") int id){
        Attend attendInfo = testService.getAttend(id);
        TestDto result = TestDto.builder()
                .a_result_time(attendInfo.getA_result_time())
                .a_today_date(attendInfo.getA_today_date())
                .build();

        return new Result(result);
    }
}