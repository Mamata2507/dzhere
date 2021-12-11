package com.ezo.dzhereback.controller.common;

import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.dto.Result;
import com.ezo.dzhereback.service.common.EmailService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// rest api 용도로 쓸 거기 때문에
// @Controller가 아닌 @RestController 어노테이션을 사용한다.
@RestController
@CrossOrigin
@Slf4j
public class AuthCommonController {
    private final EmailService emailService;

    @Autowired
    public AuthCommonController(EmailService emailService) {
        this.emailService = emailService;
    }

    // 비밀번호 찾기
    @PostMapping("/api/find-pw")
    public ResponseEntity<?> findPw(@RequestBody Result<String> u_email){
        log.info("email : " + u_email.getData());
        try{
            emailService.sendNewPasswordMail(u_email.getData());
            return ResponseEntity.ok().body(new Result<String>("성공"));
        }
        catch (Exception e){
            log.error("에러", e);
            return ResponseEntity.status(444).body(new Result<String>("실패"));
        }
    }

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
