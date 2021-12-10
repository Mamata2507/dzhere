package com.ezo.dzhereback.service.common;

import com.ezo.dzhereback.domain.Member;
import com.ezo.dzhereback.dto.MailDto;
import com.ezo.dzhereback.mapper.common.AuthCommonMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
public class EmailService {

    private final AuthCommonMapper authCommonMapper;
    private final JavaMailSender javaMailSender;

//    private static final String FROM_ADDRESS = "dzhere-support@naver.com";
    @Value("${spring.mail.username}")
    private String FROM_ADDRESS;

    @Autowired
    public EmailService(AuthCommonMapper authCommonMapper, JavaMailSender javaMailSender) {
        this.authCommonMapper = authCommonMapper;
        this.javaMailSender = javaMailSender;
    }

    @Transactional
    public boolean sendNewPasswordMail(String u_email) {
        Member member = authCommonMapper.findByEmail(u_email);

        if(member != null){
            String tempPassword = getTempPassword();
            MailDto mailDto = MailDto.builder()
                    .address(u_email)
                    .title(String.format("[더조은 Here] 임시 비밀번호 안내"))
                    .message(String.format("안녕하세요 %s님,\n" +
                            "귀하께서 요청하신 임시 비밀번호 안내를 위한 이메일입니다.\n" +
                            "\n" +
                            "고객님의 임시 비밀번호는 %s 입니다.\n" +
                            "\n" +
                            "로그인 후에는 보안을 위해 새로운 비밀번호로 변경 부탁드립니다.\n" +
                            "항상 이용해주셔서 감사합니다 :)", member.getU_name(), tempPassword))
                    .build();

            updatePassword(tempPassword, member.getU_idx());

            mailSend(mailDto);
            return true;
        }
        else throw new RuntimeException("실패");
    }

    public void updatePassword(String tempPassword,int u_idx){
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(tempPassword);
        authCommonMapper.updatePw(encodedPassword, u_idx);
    }

    public String getTempPassword(){
        char[] charSet = new char[] { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '~',};

        String tempPassword = "";

        int idx = 0;
        for (int i = 0; i < 12; i++) {
            idx = (int) (charSet.length * Math.random());
            tempPassword += charSet[idx];
        }
        return tempPassword;
    }

    public void mailSend(MailDto mailDto){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(mailDto.getAddress());
        message.setFrom(FROM_ADDRESS);
        message.setSubject(mailDto.getTitle());
        message.setText(mailDto.getMessage());

        javaMailSender.send(message);
        log.info("이메일 전송 완료");
    }
}
