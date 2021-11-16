package com.ezo.dzhereback.jwt;

import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.domain.Role;
import com.ezo.dzhereback.mapper.AuthMapper;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Slf4j
@Service
public class TokenProvider {

    private static final String SECRET_KEY = "ZG91em9uZS1lem8tZmluYWwtcHJvamVjdC1hdHRlbmQtbWFuYWdlbWVudC1zeXN0ZW0K";

    private final AuthMapper authMapper;

    @Autowired
    public TokenProvider(AuthMapper authMapper) {
        this.authMapper = authMapper;
    }

    public String create(Member member){
        String u_auth = (authMapper.findAuthByPhone(member.getU_phone()) == 0) ? Role.ADMIN.getValue() : (authMapper.findAuthByPhone(member.getU_phone()) == 1) ? Role.STUDENT.getValue() : Role.TEACHER.getValue();
        Date expiryDate = Date.from(
                Instant.now().plus(1, ChronoUnit.DAYS));

        return Jwts.builder()
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .setSubject(String.format("%s,%s", member.getU_phone(), u_auth))
                .setIssuer("dz final project ezo dzhere")
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .compact();
    }


    public String validateAndGetUserId(String token){
        /**
         * 토큰 디코딩 & 파싱 & 위조 여부 검사
         * parseClaimsJws메서드가 Base 64로 디코딩 및 파싱.
         * 즉, 헤더와 페이로드를 setSigningKey로 넘어온 시크릿을 이용 해 서명 후, token의 서명 과 비교.
         * 위조되지 않았다면 페이로드(Claims) 리턴
         * 그 중 우리는 userId가 필요하므로 getBody를 부른다.
         **/
        Claims claims = Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }
}
