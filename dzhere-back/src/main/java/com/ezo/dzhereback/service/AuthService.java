package com.ezo.dzhereback.service;

import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.mapper.AuthMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@Slf4j
public class AuthService {
    private final AuthMapper authMapper;

    @Autowired
    public AuthService(AuthMapper authMapper) {
        this.authMapper = authMapper;
    }

    public int join(final Member member) {
        final String u_phone = member.getU_phone();

        if (!authMapper.existsByPhone(u_phone))
            throw new RuntimeException("가입 불가 : 관리자가 등록하지 않은 사용자,410");
        else if (authMapper.findAcceptByPhone(u_phone) == 1) {
            throw new RuntimeException("가입 불가 : 이미 가입한 회원,409");
        }
        else {
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            member.setU_pw(passwordEncoder.encode(member.getU_pw()));
            return authMapper.join(member);
        }
    }

    public Member findRegisteredMemberByPhone(String u_phone) {
        return authMapper.findRegisteredMemberByPhone(u_phone);
    }

    public Member getByCredentials(final String u_phone, final String u_pw, final PasswordEncoder passwordEncoder) {
        final Member originalMember = authMapper.findByPhone(u_phone);

        // 존재하는 아이디인지 확인
        if (originalMember != null)
            //matches 메소드를 이용해 패스워드가 같은지 확인
            if (passwordEncoder.matches(u_pw, originalMember.getU_pw()))
                return originalMember;
            else throw new RuntimeException("잘못된 비밀번호,401");
        else throw new RuntimeException("존재하지 않는 아이디,402");


    }

//    @Override
//    public UserDetails loadUserByUsername(String userPhone){
//        Optional<Member> memberWrapper = Optional.ofNullable(authMapper.findByPhone(userPhone));
//        Member member = memberWrapper.isPresent() ? memberWrapper.get() : null;
//
//        List<GrantedAuthority> authorities = new ArrayList<>();
//
//        if ((member.getU_auth()) == 0) {
//            authorities.add(new SimpleGrantedAuthority(Role.ADMIN.getValue()));
//        } else if ((member.getU_auth()) == 1) {
//            authorities.add(new SimpleGrantedAuthority(Role.STUDENT.getValue()));
//        } else if ((member.getU_auth()) == 2) {
//            authorities.add(new SimpleGrantedAuthority(Role.TEACHER.getValue()));
//        }
//
//        return new User(member.getU_phone(), member.getU_pw(), authorities);
//    }
}
