package com.ezo.dzhereback.controller.common;

import com.ezo.dzhereback.domain.Attend;
import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.dto.Result;
import com.ezo.dzhereback.dto.TestDto;
import com.ezo.dzhereback.dto.UserTestDto;
import com.ezo.dzhereback.service.common.TestService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@Slf4j
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

    @GetMapping("/api/kre")
    public Result kre(@AuthenticationPrincipal String userId) {
        Member findKre = testService.findKre();
        UserTestDto result = UserTestDto.builder()
                .u_name(findKre.getU_name())
                .build();

        return new Result(result);
    }

    @GetMapping("/api/user/test")
    public Result userTest(@AuthenticationPrincipal String userId) {
        Member findKre = testService.findKre();
        UserTestDto result = UserTestDto.builder()
                .u_name(findKre.getU_name())
                .build();

        return new Result(result);
    }
}