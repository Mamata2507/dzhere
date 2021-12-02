package com.ezo.dzhereback.controller.admin;

import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.dto.AuthAdminDto;
import com.ezo.dzhereback.dto.Result;
import com.ezo.dzhereback.jwt.TokenProvider;
import com.ezo.dzhereback.service.admin.AuthAdminService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

// rest api 용도로 쓸 거기 때문에
// @Controller가 아닌 @RestController 어노테이션을 사용한다.
@RestController
@CrossOrigin
@Slf4j
public class AuthAdminController {
    private final AuthAdminService authAdminService;
    private final TokenProvider tokenProvider;

    @Autowired
    public AuthAdminController(AuthAdminService authAdminService, TokenProvider tokenProvider) {
        this.authAdminService = authAdminService;
        this.tokenProvider = tokenProvider;
    }

    // Bean으로 작성해도 됨.
    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // 회원가입
    @PostMapping("/api/admin/register")
    public ResponseEntity<?> registerAdmin(@RequestBody AuthAdminDto authAdminDto) {
        // 관리자는 사전에 사용자 정보로 전화번호, 이름, auth_role, 강의, 소속 등록
        // 사용자는 회원 가입 시 전화번호, 패스워드, 이메일 입력
        try {
            System.out.println("post : register");
            System.out.println(authAdminDto.toString());

            // 회원 가입할 사용자 객체 생성
            Member member = Member.builder()
                    .u_phone(authAdminDto.getUserPhone())
                    .u_pw(authAdminDto.getPassword())
                    .u_email(authAdminDto.getUserEmail())
                    .u_name(authAdminDto.getUserName())
                    .c_idx(authAdminDto.getC_idx())
                    .ag_idx(authAdminDto.getAg_idx())
                    .build();
            System.out.println(member.toString());

            authAdminService.join(member);
            Member registeredMember = authAdminService.findRegisteredAdminByPhone(member.getU_phone());
            AuthAdminDto responseAdminDto = AuthAdminDto.builder()
                    .u_idx(registeredMember.getU_idx())
                    .userPhone(registeredMember.getU_phone())
                    .userEmail(registeredMember.getU_email())
                    .userName(registeredMember.getU_name())
                    .c_idx(registeredMember.getC_idx())
                    .ag_idx(registeredMember.getAg_idx())
                    .build();
            return ResponseEntity.ok().body(responseAdminDto);
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResponseEntity.status(444).body(new Result<String>("가입에러"));
        }
    }

    // 로그인
    @PostMapping("/api/admin/login")
    public ResponseEntity<?> authenticate(@RequestBody AuthAdminDto authAdminDto) {
        log.info(String.valueOf(authAdminDto));
        try {
            Member member = authAdminService.getByCredentials(
                    authAdminDto.getUserPhone(),
                    authAdminDto.getPassword(),
                    passwordEncoder
            );

            final String token = tokenProvider.create(member);
            final AuthAdminDto responseAuthAdminDto = AuthAdminDto.builder()
                    .token(token)
                    .u_idx(member.getU_idx())
                    .userPhone(member.getU_phone())
                    .userEmail(member.getU_email())
                    .userName(member.getU_name())
                    .c_idx(member.getC_idx())
                    .ag_idx(member.getAg_idx())
                    .build();
            return ResponseEntity.ok().body(responseAuthAdminDto);
        } catch (Exception e) {
            if (e.getMessage().equals("잘못된 비밀번호,401"))
                return ResponseEntity.status(401).body(new Result<String>("잘못된 비밀번호"));
            else if (e.getMessage().equals("존재하지 않는 아이디,402"))
                return ResponseEntity.status(402).body(new Result<String>("존재하지 않는 아이디"));
            else return ResponseEntity.status(500).body(new Result<String>("기타"));
        }
    }

//    // 로그아웃
//    @PostMapping("/api/logout")
//    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response) {
//        log.info("로그아웃 요청");
//        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//        log.info("로그아웃 auth 정보 : " + auth);
//        if (auth != null && auth.isAuthenticated()) {
//            new SecurityContextLogoutHandler().logout(request, response, auth);
//            log.info("로그아웃 성공");
//            return ResponseEntity.ok().body(new Result<String>("로그아웃 성공"));
//        }
//        else {
//            log.info("로그아웃 실패");
//            return ResponseEntity.status(404).body("로그아웃 실패");
//        }
//    }
}
