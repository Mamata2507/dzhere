package com.ezo.dzhereback.service;

import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.domain.Role;
import com.ezo.dzhereback.mapper.AuthMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service @Slf4j
public class AuthService implements UserDetailsService {
    private final AuthMapper authMapper;

    @Autowired
    public AuthService(AuthMapper authMapper) {
        this.authMapper = authMapper;
    }

    public int join(final Member member){
        if(member == null || member.getU_phone().equals(null) || member.getU_pw().equals(null))
            throw new RuntimeException("가입 할 사용자 객체가 유효하지 않거나 아이디 혹은 비밀번호를 입력하지 않았습니다.");

        final String u_phone = member.getU_phone();

        if(!authMapper.existsByPhone(u_phone))
            throw new RuntimeException("가입 불가 : 관리자가 등록하지 않은 사용자");
        else if(authMapper.findAcceptByPhone(u_phone) == 1){
            throw new RuntimeException("가입 불가 : 이미 가입한 회원");
        }
        else{
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//        memberDto.setPassword(passwordEncoder.encode(memberDto.getPassword()));
            member.setU_pw(passwordEncoder.encode(member.getU_pw()));
            return authMapper.join(member);
        }
    }

    public Member findRegisteredMemberByPhone(String u_phone) {
        return authMapper.findRegisteredMemberByPhone(u_phone);
    }

//    public Member getByCredentials(final String u_phone, final String u_pw){
//        return authMapper.findByPhoneAndPassword(u_phone, u_pw);
//    }

    public Member getByCredentials(final String u_phone, final String u_pw, final PasswordEncoder passwordEncoder){
        final Member originalMember = authMapper.findByPhone(u_phone);

        //matches 메소드를 이용해 패스워드가 같은지 확인
        if(originalMember != null && passwordEncoder.matches(u_pw, originalMember.getU_pw()))
            return originalMember;
        else
            return null;
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return null;
    }

//    // Spring Security 가 제공하는 로그인 처리 로직.
//    @Override
//    public UserDetails loadUserByUsername(String u_phone) throws UsernameNotFoundException {
//        Optional<Member> memberWrapper = authMapper.findByPhone(u_phone);
//        Member member = memberWrapper.isPresent() ? memberWrapper.get() : null;
//
//        List<GrantedAuthority> authorities = new ArrayList<>();
//
//        if (member.getU_auth()==0) {
//            authorities.add(new SimpleGrantedAuthority(Role.ADMIN.getValue()));
//        } else if (member.getU_auth()==1) {
//            authorities.add(new SimpleGrantedAuthority(Role.STUDENT.getValue()));
//        } else if (member.getU_auth()==2) {
//            authorities.add(new SimpleGrantedAuthority(Role.TEACHER.getValue()));
//        }
//
//        return new User(member.getU_phone(), member.getU_pw(), authorities);
//    }

}
