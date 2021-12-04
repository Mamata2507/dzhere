package com.ezo.dzhereback.service.admin;


import com.ezo.dzhereback.domain.Agency;
import com.ezo.dzhereback.domain.Lesson;
import com.ezo.dzhereback.dto.*;
import com.ezo.dzhereback.mapper.admin.TeacherAdminMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;

@Service
@Slf4j
public class TeacherAdminService {
    private final TeacherAdminMapper teacherAdminMapper;

    @Autowired
    public TeacherAdminService(TeacherAdminMapper teacherAdminMapper) {
        this.teacherAdminMapper = teacherAdminMapper;
    }

    public List<Agency> getAgencyList(){
        return teacherAdminMapper.findAgencyAll();
    }

    public List<Lesson> getLessonListByAgencyId(int agIdx){
        return teacherAdminMapper.findLessonListByAgencyId(agIdx);
    }

    public List<TeacherInfoDto> getTeacherListByLessonIdAndAgencyId(int cIdx, int agIdx){
        return teacherAdminMapper.findTeacherListByLessonIdAndAgencyId(cIdx, agIdx);
    }

    @Transactional
    public TeacherInfoDto createTeacher(TeacherAddDto teacherAddDto){
        try {
            System.out.println(teacherAddDto);
            int result = teacherAdminMapper.insertTeacher(teacherAddDto);
            log.info("insert query result : " + result);
            TeacherInfoDto resultInfo = teacherAdminMapper.findTeacherByPhone(teacherAddDto.getU_phone());
            return resultInfo;
        }catch (Exception e){
            log.info(e.getClass().getSimpleName());
            throw e;
        }
    }

    @Transactional
    public TeacherInfoDto updateTeacher(TeacherUpdateDto teacherUpdateDto){
        int result = -1;
        try{
            System.out.println(teacherUpdateDto);
            if(!(teacherUpdateDto.getU_phone()==null) && !(teacherUpdateDto.getU_email()==null) && !(teacherUpdateDto.getU_name()==null))
                result = teacherAdminMapper.updateTeacher(teacherUpdateDto);
            if(!(teacherUpdateDto.getU_phone()==null) && !(teacherUpdateDto.getU_email()==null) && (teacherUpdateDto.getU_name()==null))
                result = teacherAdminMapper.updateTeacherPhoneEmail(teacherUpdateDto);
            if(!(teacherUpdateDto.getU_phone()==null) && (teacherUpdateDto.getU_email()==null) && !(teacherUpdateDto.getU_name()==null))
                result = teacherAdminMapper.updateTeacherPhoneName(teacherUpdateDto);
            if(!(teacherUpdateDto.getU_phone()==null) && (teacherUpdateDto.getU_email()==null) && (teacherUpdateDto.getU_name()==null))
                result = teacherAdminMapper.updateTeacherPhone(teacherUpdateDto);
            if((teacherUpdateDto.getU_phone()==null) && !(teacherUpdateDto.getU_email()==null) && !(teacherUpdateDto.getU_name()==null))
                result = teacherAdminMapper.updateTeacherEmailName(teacherUpdateDto);
            if((teacherUpdateDto.getU_phone()==null) && !(teacherUpdateDto.getU_email()==null) && (teacherUpdateDto.getU_name()==null))
                result = teacherAdminMapper.updateTeacherEmail(teacherUpdateDto);
            if((teacherUpdateDto.getU_phone()==null) && (teacherUpdateDto.getU_email()==null) && !(teacherUpdateDto.getU_name()==null))
                result = teacherAdminMapper.updateTeacherName(teacherUpdateDto);

            log.info("update query result : " + result);
            TeacherInfoDto resultInfo = teacherAdminMapper.findTeacherByIdx(teacherUpdateDto.getU_idx());
            return resultInfo;
        }catch (Exception e){
            log.info(e.getClass().getSimpleName());
            throw e;
        }
    }

    public int deleteTeacher(int[] uIdxes) {
        int result = -1;
        if(uIdxes.length==0)
            result = teacherAdminMapper.deleteTeacher(uIdxes[0]);
        else{
            String uIdxes_ = Arrays.toString(uIdxes).replace("[", "(").replace("]", ")").replaceAll(" ", "");
            System.out.println("u_idxes : " + uIdxes_);
            result = teacherAdminMapper.deleteTeachers(uIdxes_);
        }

        return result;
    }

    public List<TeacherAttendYJDto> getTeacherAttendListAll(int uIdx) {
        return teacherAdminMapper.findTeacherAttendListAll(uIdx);
    }

    public List<TeacherAttendYJDto> getTeacherAttendList(int uIdx, String start_date, String end_date) {
        return teacherAdminMapper.findTeacherAttendListByDateRange(uIdx, start_date, end_date);
    }

    public TeacherIdxNameDto getTeacherIdxName(int cIdx) {
        return teacherAdminMapper.findTeacherIdxNameByCIdx(cIdx);
    }
}
