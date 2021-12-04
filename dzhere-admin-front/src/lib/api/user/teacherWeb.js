import client from "../client";

export const apiAgencyList = () => {
    return client.get("teacher/web/agency-list")
    .then(res => {
        return {
            result : true,
            agencyList: res.data.data
        }
    })
    .catch(e => {
        return {
            result : false,
            error : e
        }
    })
}

export const apiClassList = (agIdx) => {
    return client.get("teacher/web/class-list",{
        params: {
            agIdx: agIdx
        }
    })
    .then(res => {
        return {
            result : true,
            classList: res.data.data
        }
    })
    .catch(e => {
        return {
            result : false,
            error : e
        }
    })
}

export const apiTeacherList = (cIdx, agIdx) => {
    return client.get("teacher/web/teacher-list",{
        params: {
            cIdx : cIdx,
            agIdx : agIdx,
        }
    })
    .then(res => {
        return {
            result : true,
            teacherList: res.data.data
        }
    })
    .catch(e => {
        return {
            result : false,
            error : e
        }
    })
}

export const apiAddTeacher = (u_name, u_phone, u_email, c_idx, ag_idx) => {
    console.log('apiAddTeacher : ', u_name, u_phone, u_email, c_idx, ag_idx);
    return client.post("teacher/web/add",
        {
            c_idx : c_idx,
            ag_idx : ag_idx,
            u_name : u_name,
            u_phone : u_phone,
            u_email : u_email,
        },
    )
    .then(res => {
        return {
            result: true,
            teacherList: res.data.data
        }
    })
    .catch(e => {
        return {
            result: false,
            error: e,
        }
    })
}

export const apiEditTeacher = (u_idx, u_name, u_phone, u_email, c_idx, ag_idx) => {
    console.log('apiEditTeacher : ', u_idx, u_phone, u_email);
    return client.post("teacher/web/update",
        {
            u_idx : u_idx,
            c_idx : c_idx,
            ag_idx : ag_idx,
            u_name : u_name,
            u_phone : u_phone,
            u_email : u_email,
        },
    )
    .then(res => {
        return {
            result: true,
            teacherList: res.data.data
        }
    })
    .catch(e => {
        return {
            result: false,
            error: e,
        }
    })
}

export const apiRemoveTeacher = (checkedList, cIdxTmp, agIdxTmp) => {
    console.log('apiRemoveTeacher : ', checkedList, cIdxTmp, agIdxTmp);
    return client.post("teacher/web/delete",
        {
            u_idxes : [...checkedList],
            c_idx : cIdxTmp,
            ag_idx : agIdxTmp,
        },
    )
    .then(res => {
        return {
            result: true,
            teacherList: res.data.data
        }
    })
    .catch(e => {
        return {
            result: false,
            error: e,
        }
    })
}

export const apiTeacherAttendList = (u_idx, start_date, end_date) => {
    console.log('apiTeacherAttendList : ', u_idx, start_date, end_date);
    return client.get("teacher/web/attend-list",
        {
            params : {
                u_idx : u_idx,
                start_date : start_date,
                end_date : end_date,
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

export const apiTeacherAttendListAll = (u_idx) => {
    console.log('apiTeacherAttendList : ', u_idx);
    return client.get("teacher/web/attend-list-all",
        {
            params : {
                u_idx : u_idx,
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

export const apiTeacherIdxName = (c_idx) => {
    console.log('apiTeacherIdx : ', c_idx);
    return client.get("teacher/web/teacher-iname",
        {
            params : {
                c_idx : c_idx,
            }
        },
    )
    .then(res => {
        return {
            result: true,
            teacherIdxName: res.data.data
        }
    })
    .catch(e => {
        return {
            result: false,
            error: e,
        }
    })
}
