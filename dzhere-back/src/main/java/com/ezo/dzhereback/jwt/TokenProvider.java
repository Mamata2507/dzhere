package com.ezo.dzhereback.jwt;

import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.domain.Role;
import com.ezo.dzhereback.mapper.AuthMapper;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
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

        // 토큰 생성
        return Jwts.builder()
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .setSubject(String.format("%s,%s", member.getU_phone(), u_auth))
                .setIssuer("dz final project ezo dzhere")
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .compact();
    }

    // Jwt 토큰에서 아이디 추출    
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
//    
    // Jwt 토큰 유효성 검사
    public static boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token);
            return true;
        } catch (SignatureException ex) {
            log.error("Invalid JWT signature");
        } catch (MalformedJwtException ex) {
            log.error("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            log.error("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            log.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            log.error("JWT claims string is empty.");
        }
        return false;
    }
    
//    public boolean validateToken(String token) {
//    	try {
//    		Jws<Claims> claims = Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token);
//    		if(claims.getBody().getExpiration().before((new Date()))){
//    			return false;
//    		}
//    		return true;
//    	}catch(JwtException | IllegalArgumentException e) {
//    		return false;
//    	}
//    }
}
