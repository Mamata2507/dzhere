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

export const getStudentList = ({agIdx, selectedClass}) => 
    client.post(`/getStudentList`, {ag_idx: agIdx, c_idx: selectedClass})
    
export const deleteUser = (uid) => 
    client.post(`/deleteUser/${uid}`)
    
export const insertUser = ({agIdx, selectedClassAdd, uName, uPhone, uAuth}) => 
    client.post(`/insertUser`, {ag_idx: agIdx, c_idx: selectedClassAdd, u_name: uName, u_phone: uPhone, u_auth: uAuth})

export const countUser = phone => {
    return client
    .get(`/countUser/${phone}`)
    .then(function (response){
        return response.data.data;
    })
    .catch(function (error) {
        console.log(error);
    });
};

export const getStudentInfo = uid => {
    return client
    .get(`/getStudentInfo/${uid}`)
    .then(function (response){
        return response.data.data;
    })
    .catch(function (error) {
        console.log(error);
    });
};


export const updateUser = ({selectedClassUpdate, uName, uPhone, uid, agIdx}) => 
    client.post(`/updateUser`, {c_idx: selectedClassUpdate, u_name: uName, u_phone: uPhone, u_idx: uid})
