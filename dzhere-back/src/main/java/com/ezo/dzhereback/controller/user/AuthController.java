package com.ezo.dzhereback.controller.user;

import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.dto.ResponseDto;
import com.ezo.dzhereback.dto.AuthDto;
import com.ezo.dzhereback.dto.Result;
import com.ezo.dzhereback.service.AuthService;
import com.ezo.dzhereback.jwt.TokenProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

// 우리는 rest api 용도로 쓸 거기 때문에
// @Controller가 아닌 @RestController 어노테이션을 사용한다.
@RestController
@CrossOrigin
@Slf4j
public class AuthController {
    private final AuthService authService;
    private final TokenProvider tokenProvider;
    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    public AuthController(AuthService authService, TokenProvider tokenProvider) {
        this.authService = authService;
        this.tokenProvider = tokenProvider;
    }



    @PostMapping("/api/user/register")
    public ResponseEntity<?> registerMember(@RequestBody AuthDto authDto){
        // 관리자는 사전에 사용자 정보로 전화번호, 이름, auth_role, 강의, 소속 등록
        // 사용자는 회원 가입 시 전화번호, 패스워드, 이메일 입력
        try{
            System.out.println("post : register");
            System.out.println(authDto.toString());
            // 회원 가입할 사용자 객체 생성
            Member member = Member.builder()
                    .u_phone(authDto.getUserPhone())
                    .u_pw(authDto.getPassword())
                    .u_email(authDto.getU_email())
                    .build();
            System.out.println(member.toString());

            // 서비스의 회원가입 함수 호출
//            if(authService.join(member)==1){
//                Member registeredMember = authService.findRegisteredMemberByPhone(member.getU_phone());
//                AuthDto responseMemberDto = AuthDto.builder()
//                        .u_id(registeredMember.getU_id())
//                        .u_phone(registeredMember.getU_phone())
//                        .u_email(registeredMember.getU_email())
//                        .build();
//                return ResponseEntity.ok().body(responseMemberDto);
//            }
            authService.join(member);
            Member registeredMember = authService.findRegisteredMemberByPhone(member.getU_phone());
            AuthDto responseMemberDto = AuthDto.builder()
                    .u_id(registeredMember.getU_id())
                    .u_phone(registeredMember.getU_phone())
                    .u_email(registeredMember.getU_email())
                    .build();
            return ResponseEntity.ok().body(responseMemberDto);
//            else{
//                ResponseDto responseDto = ResponseDto.builder().error("이미 가입한 계정입니다.").build();
//                return ResponseEntity.badRequest().body(responseDto);
//            }
        }catch (Exception e){
            if(e.getMessage().equals("가입 불가 : 이미 가입한 회원,409"))
                return ResponseEntity.status(409).body(new Result<String>("가입 불가 : 이미 가입한 회원"));
            else if(e.getMessage().equals("가입 불가 : 관리자가 등록하지 않은 사용자,410"))
                return ResponseEntity.status(410).body(new Result<String>("가입 불가 : 관리자가 등록하지 않은 사용자"));
            else return ResponseEntity.status(500).body(new Result<String>(e.getMessage()));
//            ResponseDto responseDto = ResponseDto.builder().error(e.getMessage()).build();
//            return ResponseEntity.badRequest().body(responseDto);
        }
    }

    @PostMapping("/api/user/login")
    public ResponseEntity<?> authenticate(@RequestBody AuthDto authDto){
        log.info(String.valueOf(authDto));
        try{
            Member member = authService.getByCredentials(
                    authDto.getUserPhone(),
                    authDto.getPassword(),
                    passwordEncoder
            );

            final String token = tokenProvider.create(member);
            final AuthDto responseAuthDto = AuthDto.builder()
                    .u_id(member.getU_id())
                    .u_email(member.getU_email())
                    .token(token)
                    .build();
            return ResponseEntity.ok().body(responseAuthDto);


//            if(member != null){
//                final String token = tokenProvider.create(member);
//                final AuthDto responseAuthDto = AuthDto.builder()
//                        .u_id(member.getU_id())
//                        .u_email(member.getU_email())
//                        .token(token)
//                        .build();
//                return ResponseEntity.ok().body(responseAuthDto);
//            }
//            else{
//                ResponseDto responseDto = ResponseDto.builder()
//                        .error("로그인 실패")
//                        .build();
//                return ResponseEntity.badRequest().body(responseDto);
//            }
        }
        // 작동 안함. 수정 필요.
        catch(Exception e){
            if(e.getMessage().equals("잘못된 비밀번호,401"))
                return ResponseEntity.status(401).body(new Result<String>("잘못된 비밀번호"));
            else if(e.getMessage().equals("존재하지 않는 계정,402"))
                return ResponseEntity.status(402).body(new Result<String>("존재하지 않는 아이디"));
            else return ResponseEntity.status(500).body(new Result<String>("기타"));
//            return ResponseEntity
//                    .status(HttpStatus.UNAUTHORIZED)
//                    .body(new Result<String>("토큰 불일치"));
        }

    }

//    @PostMapping("/api/user/login")
//    public ResponseEntity<?> authenticate(@RequestBody AuthDto authDto){
//        try{
//            Member member = authService.getByCredentials(
//                    authDto.getU_phone(),
//                    authDto.getU_pw()
//            );
//
//            if(member != null){
//                final String token = tokenProvider.create(member);
//                final AuthDto responseAuthDto = AuthDto.builder()
//                        .u_id(member.getU_id())
//                        .u_email(member.getU_email())
//                        .token(token)
//                        .build();
//                return ResponseEntity.ok().body(responseAuthDto);
//            }
//            else{
//                ResponseDto responseDto = ResponseDto.builder()
//                        .error("로그인 실패")
//                        .build();
//                return ResponseEntity.badRequest().body(responseDto);
//            }
//        }
//        // 작동 안함. 수정 필요.
//        catch(Exception e){
//            return ResponseEntity
//                    .status(HttpStatus.UNAUTHORIZED)
//                    .body(new Result<String>("토큰 불일치"));
//        }
//
//    }

}
