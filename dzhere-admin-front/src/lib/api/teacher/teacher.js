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