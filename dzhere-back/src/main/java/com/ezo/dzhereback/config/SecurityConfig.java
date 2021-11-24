package com.ezo.dzhereback.config;

import com.ezo.dzhereback.jwt.JwtAuthenticationFilter;
import com.ezo.dzhereback.service.AuthService;

import io.jsonwebtoken.MalformedJwtException;
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
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.filter.CorsFilter;

@EnableWebSecurity
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
    	http.cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues());
    	http.csrf().disable()
                .httpBasic()// token을 사용하므로 basic 인증 disable
                .disable()
                .sessionManagement()  // session 기반이 아님을 선언
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
//                .antMatchers("/").permitAll()
                .antMatchers("/api/kre").permitAll()
                .antMatchers("/api/user/register").permitAll()
                .antMatchers("/api/user/register/**").permitAll()
                .antMatchers("/api/user/login").permitAll()
                .antMatchers("/api/admin/login").permitAll()
                .antMatchers("/api/external/**").hasAnyAuthority("ROLE_STUDENT", "ROLE_TEACHER")
//                .antMatchers("/api/external/select").permitAll()
//                .antMatchers("/api/external/add").permitAll()
//                .antMatchers("/api/external/delete").permitAll()
                .anyRequest().authenticated();

        // filter 등록.
        // 매 리퀘스트마다
        // CorsFilter 실행한 후에
        // jwtAuthenticationFilter 실행한다.
        http.addFilterAfter(
                jwtAuthenticationFilter,
                CorsFilter.class
        );
    }

//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(authService).passwordEncoder(passwordEncoder());
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder(){
//        return new BCryptPasswordEncoder();
//    }

}
