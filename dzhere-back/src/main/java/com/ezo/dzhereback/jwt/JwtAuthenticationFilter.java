package com.ezo.dzhereback.jwt;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private TokenProvider tokenProvider;

    @Autowired
    public JwtAuthenticationFilter(TokenProvider tokenProvider) {
        this.tokenProvider = tokenProvider;
    }

    private String parseBearerToken(HttpServletRequest request) {
        // HTTP 요청의 헤더를 파싱해 Bearer 토큰을 리턴
        String bearerToken = request.getHeader("Authorization");
        log.info(bearerToken);
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        } else return null;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            // Client 요청으로부터 토큰을 가져온다.
            String token = parseBearerToken(request);
            log.info("Filter is running");
            log.info(token);
            // 토큰을 검사한다.
            if (token != null && !token.equalsIgnoreCase("null")) {
                // userId, 권한 가져오기. 위조 된 경우 예외 처리
                String headerSubject = tokenProvider.validateAndGetUserIdAndUserAuth(token);

                log.info("헤더 서브젝트 : " + headerSubject);
                String userId = headerSubject.split(",")[0];
                String userAuth = headerSubject.split(",")[1];
                log.info("Authenticated user ID : " + userId);
                log.info("User Auth : " + userAuth);

                // 인증 완료. SecurityContextHolder에 등록해야 인증된 사용자로 인지.
                List<GrantedAuthority> roles = new ArrayList<GrantedAuthority>();
                roles.add(new SimpleGrantedAuthority(userAuth));
                AbstractAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        userId,
                        null,
                        roles
                );
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
                securityContext.setAuthentication(authentication);
                SecurityContextHolder.setContext(securityContext);
            }
        } catch (Exception e) {
            /**
             *      토큰 위조 : SignatureException
             *      만료 : ExpiredJwtException
             **/

            log.error("Could not set user authentication in security context\n" + e);
            log.info("에러 정보 : " + e.getClass().getSimpleName());
        }
        filterChain.doFilter(request, response);
    }

}
