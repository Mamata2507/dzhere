package com.ezo.dzhereback.service.admin;

import com.ezo.dzhereback.domain.Agency;
import com.ezo.dzhereback.domain.Lesson;
import com.ezo.dzhereback.domain.Teacher;
import com.ezo.dzhereback.domain.TeacherAttend;
import com.ezo.dzhereback.mapper.admin.TeacherMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {
    private final TeacherMapper teacherMapper;
    @Autowired
    public TeacherService(TeacherMapper teacherMapper) {
        this.teacherMapper=teacherMapper;
    }

    public int getCidx(String c_name){
        return teacherMapper.getCidx(c_name);
    }

    public List<Agency> getAgencyList(String u_phone){
        return teacherMapper.getAgencyList(u_phone);
    }

    public List<Lesson> getLessonList(String u_phone){
        return teacherMapper.getLessonList(u_phone);
    }

    public List<Teacher> getTeacherSearch(int ag_idx, int c_idx, String u_name, int attend_state, int attend_date_state, String start_date, String end_date, int u_auth){
        if(attend_date_state==0){
            switch (attend_state){
                case 0:
                    return teacherMapper.getTeacherSearchAll(ag_idx, c_idx, u_name, u_auth);
                case 1:
                    return teacherMapper.getTeacherSearchAll_01(ag_idx, c_idx, u_name, u_auth, 1);
                case 2:
                    return teacherMapper.getTeacherSearchAll_02(ag_idx, c_idx, u_name, u_auth, 1);
                case 3:
                    return teacherMapper.getTeacherSearchAll_03(ag_idx, c_idx, u_name, u_auth, 1);
                case 4:
                    return teacherMapper.getTeacherSearchAll_04(ag_idx, c_idx, u_name, u_auth, 1);
                default:
                    return null;

            }
        }
        else{
            switch (attend_state){
                case 0:
                    return teacherMapper.getTeacherSearch(ag_idx, c_idx, u_name, start_date, u_auth, end_date);
                case 1:
                    return teacherMapper.getTeacherSearch_01(ag_idx, c_idx, u_name, start_date, end_date, u_auth, 1);
                case 2:
                    return teacherMapper.getTeacherSearch_02(ag_idx, c_idx, u_name, start_date, end_date, u_auth, 1);
                case 3:
                    return teacherMapper.getTeacherSearch_03(ag_idx, c_idx, u_name, start_date, end_date, u_auth, 1);
                case 4:
                    return teacherMapper.getTeacherSearch_04(ag_idx, c_idx, u_name, start_date, end_date, u_auth, 1);
                default:
                    return null;

            }
        }
    }

    public int updateTeacherAttend(TeacherAttend teacherAttend){
        return teacherMapper.updateTeacherUpdate(teacherAttend);
    }
}
