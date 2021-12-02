import client from "../client";

export const apiAgencyList = () => {
    return client.get("/api/admin/teacher/agency-list")
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
    return client.get("/api/admin/teacher/class-list",{
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
    return client.get("/api/admin/teacher/teacher-list",{
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
    return client.post("/api/admin/teacher/add",
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
    return client.post("/api/admin/teacher/update",
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
    return client.post("/api/admin/teacher/delete",
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