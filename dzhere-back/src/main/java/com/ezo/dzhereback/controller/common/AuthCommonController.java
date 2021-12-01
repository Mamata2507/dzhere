package com.ezo.dzhereback.controller.common;

import com.ezo.dzhereback.dto.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// rest api 용도로 쓸 거기 때문에
// @Controller가 아닌 @RestController 어노테이션을 사용한다.
@RestController
@CrossOrigin
@Slf4j
public class AuthCommonController {
    // 로그아웃
    @PostMapping("/api/logout")
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response) {
        log.info("로그아웃 요청");
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        log.info("로그아웃 auth 정보 : " + auth);
        if (auth != null && auth.isAuthenticated()) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
            log.info("로그아웃 성공");
            return ResponseEntity.ok().body(new Result<String>("로그아웃 성공"));
        }
        else {
            log.info("로그아웃 실패");
            return ResponseEntity.status(404).body("로그아웃 실패");
        }
    }
}
