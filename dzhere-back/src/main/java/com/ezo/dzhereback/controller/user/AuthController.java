package com.ezo.dzhereback.controller.user;

import com.ezo.dzhereback.domain.User;
import com.ezo.dzhereback.dto.Result;
import com.ezo.dzhereback.dto.UserTestDto;
import com.ezo.dzhereback.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// 우리는 rest api 용도로 쓸 거기 때문에
// @Controller가 아닌 @RestController 어노테이션을 사용한다.
@RestController
public class AuthController {
    private final UserService userService;
    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

//    @GetMapping("/api/kre")
//    public Result kre() {
//        User findKre = userService.findKre();
//        UserTestDto result = UserTestDto.builder()
//                .u_name(findKre.getU_name())
//                .build();
//
//        return new Result(result);
//    }
}
