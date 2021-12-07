import client from '../client';

export const updateTeacherAttend = (e) =>
    client.post('/teacher/web/attend/update', {
        a_idx: e.a_idx,
        u_idx : e.u_idx,
        a_attend_time: e.editAttendTime,
        a_exit_time: e.editExitTime,
        a_late_status: e.editLateStatus,
        a_leave: e.editLeave,
        a_absent: e.editAbsent,
        a_not_exit: e.editNotExit,
        start_date : e.startDate,
        end_date : e.endDate,
    })

export const getTeacherAttendListAll = (u_idx) => 
    client.get(`/teacher/web/attend-list-all`, {params:{u_idx: u_idx}})

export const apiTeacherAttendList = ({u_idx, start_date, end_date}) => {
    console.log('apiTeacherAttendList : ', u_idx, start_date, end_date);
    return client.get("teacher/web/attend-list",
        {
            params : {
                uIdx : u_idx,
                startDate : start_date,
                endDate : end_date,
            }
            
        },
    )
    .then(res => {
        return {
            result: true,
            teacherAttendList: res.data.data
        }
    })
    .catch(e => {
        return {
            result: false,
            error: e,
        }
    })
}

export const getTeacherIdxName = c_idx =>
    client.get(`/teacher/web/teacher-iname`, {params:{c_idx: c_idx}});

export const getAgName = phone => 
    client.get(`/getAgName/${phone}`);

export const getClassList = phone => 
    client.get(`/getClassList/${phone}`)
