package com.ezo.dzhereback.service.admin;

import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.mapper.admin.AuthAdminMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthAdminService {
    private final AuthAdminMapper authAdminMapper;

    @Autowired
    public AuthAdminService(AuthAdminMapper authAdminMapper) {
        this.authAdminMapper = authAdminMapper;
    }

    public Member findRegisteredAdminByPhone(String u_phone) {
        return authAdminMapper.findRegisteredAdminByPhone(u_phone);
    }

    public int join(final Member member) {
        final String u_phone = member.getU_phone();

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        member.setU_pw(passwordEncoder.encode(member.getU_pw()));
        return authAdminMapper.join(member);
    }

    public Member getByCredentials(final String u_phone, final String u_pw, final PasswordEncoder passwordEncoder) {
        final Member originalMember = authAdminMapper.findByPhone(u_phone);

        // 존재하는 아이디인지 확인
        if (originalMember != null)
            //matches 메소드를 이용해 패스워드가 같은지 확인
            if (passwordEncoder.matches(u_pw, originalMember.getU_pw()))
                return originalMember;
            else throw new RuntimeException("잘못된 비밀번호,401");
        else throw new RuntimeException("존재하지 않는 아이디,402");


    }
}
