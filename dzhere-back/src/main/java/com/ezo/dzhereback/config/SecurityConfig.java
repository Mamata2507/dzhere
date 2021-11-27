package com.ezo.dzhereback.config;

import com.ezo.dzhereback.jwt.JwtAuthenticationFilter;
import com.ezo.dzhereback.service.AuthService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.filter.CorsFilter;

@EnableWebSecurity
@Configuration
@Slf4j
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final AuthService authService;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Autowired
    public SecurityConfig(AuthService authService, JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.authService = authService;
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        // static 디렉터리에 대한 접근에 대해서 접근 권한 인증 절차를 거치지 않도록 ( = 항상통과 )
        web.ignoring().antMatchers("/static/css/**", "/js/**", "/img/**", "/lib/**", "/favicon.ico");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors()
                .configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues())
                .and()
                .csrf()// csrf는 현재 사용하지 않으므로 disable
                .disable()
                .httpBasic()// token을 사용하므로 basic 인증 disable
                .disable()
                .sessionManagement()  // session 기반이 아님을 선언
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
//                .antMatchers("/").permitAll()
                .antMatchers("/api/user/register").permitAll()
                .antMatchers("/api/user/register/**").permitAll()
                .antMatchers("/api/user/login").permitAll()
                .antMatchers("/api/admin/login").permitAll()
                .antMatchers("/api/kre").hasAnyRole("STUDENT", "TEACHER")
                .antMatchers("/api/user/**").hasRole("STUDENT")
                .antMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated();
//                .and()
//                .logout()
//                .logoutRequestMatcher(new AntPathRequestMatcher("/api/logout"))
//                .deleteCookies("JSESSIONID")    // 로그아웃 시 쿠키를 제거 : 로그아웃 했는데 로그인이 되어있다거나 하는 예외 상황 발생하지 않도록.
//                .invalidateHttpSession(true)   // 로그아웃 처리에 대한 spring security와의 url 매핑;
//                .clearAuthentication(true);

        // filter 등록.
        // 매 리퀘스트마다
        // CorsFilter 실행한 후에
        // jwtAuthenticationFilter 실행한다.
        http.addFilterAfter(
                jwtAuthenticationFilter,
                CorsFilter.class
        );
    }
}
