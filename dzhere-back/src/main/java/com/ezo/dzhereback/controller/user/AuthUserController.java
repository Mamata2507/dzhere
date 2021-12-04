package com.ezo.dzhereback.controller.user;

import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.dto.AuthDto;
import com.ezo.dzhereback.dto.Result;
import com.ezo.dzhereback.jwt.TokenProvider;
import com.ezo.dzhereback.service.user.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
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
public class AuthUserController {
    private final AuthUserService authService;
    private final TokenProvider tokenProvider;

    @Autowired
    public AuthUserController(AuthUserService authService, TokenProvider tokenProvider) {
        this.authService = authService;
        this.tokenProvider = tokenProvider;
    }

    // Bean으로 작성해도 됨.
    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // 회원가입
    @PostMapping("/api/user/register")
    public ResponseEntity<?> registerMember(@RequestBody AuthDto authDto) {
        // 관리자는 사전에 사용자 정보로 전화번호, 이름, auth_role, 강의, 소속 등록
        // 사용자는 회원 가입 시 전화번호, 패스워드, 이메일 입력
        try {
            System.out.println("post : register");
            System.out.println(authDto.toString());

            // 회원 가입할 사용자 객체 생성
            Member member = Member.builder()
                    .u_phone(authDto.getUserPhone())
                    .u_pw(authDto.getPassword())
                    .u_email(authDto.getUserEmail())
                    .build();
            System.out.println(member.toString());

            authService.join(member);
            Member registeredMember = authService.findRegisteredMemberByPhone(member.getU_phone());
            AuthDto responseMemberDto = AuthDto.builder()
                    .u_idx(registeredMember.getU_idx())
                    .userPhone(registeredMember.getU_phone())
                    .userEmail(registeredMember.getU_email())
                    .build();
            return ResponseEntity.ok().body(responseMemberDto);
        } catch (Exception e) {
            if (e.getMessage().equals("가입 불가 : 이미 가입한 회원,409"))
                return ResponseEntity.status(409).body(new Result<String>("가입 불가 : 이미 가입한 회원"));
            else if (e.getMessage().equals("가입 불가 : 관리자가 등록하지 않은 사용자,410"))
                return ResponseEntity.status(410).body(new Result<String>("가입 불가 : 관리자가 등록하지 않은 사용자"));
            else return ResponseEntity.status(500).body(new Result<String>(e.getMessage()));
        }
    }

    // 로그인
    @PostMapping("/api/user/login")
    public ResponseEntity<?> authenticate(@RequestBody AuthDto authDto) {
        log.info(String.valueOf(authDto));
        try {
            Member member = authService.getByCredentials(
                    authDto.getUserPhone(),
                    authDto.getPassword(),
                    passwordEncoder
            );

            final String token = tokenProvider.create(member);
            final AuthDto responseAuthDto = AuthDto.builder()
                    .token(token)
                    .u_idx(member.getU_idx())
                    .userPhone(member.getU_phone())
                    .userEmail(member.getU_email())
                    .build();
            return ResponseEntity.ok().body(responseAuthDto);
        } catch (Exception e) {
            if (e.getMessage().equals("잘못된 비밀번호,401"))
                return ResponseEntity.status(401).body(new Result<String>("잘못된 비밀번호"));
            else if (e.getMessage().equals("존재하지 않는 아이디,402"))
                return ResponseEntity.status(402).body(new Result<String>("존재하지 않는 아이디"));
            else return ResponseEntity.status(500).body(new Result<String>("기타"));
        }
    }

    // 로그아웃
    @PostMapping("/api/user/logout")
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