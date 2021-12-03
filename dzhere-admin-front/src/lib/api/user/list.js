import client from '../client';

export const getAgName = phone => 
    client.get(`/getAgName/${phone}`);

export const getClassList = phone => 
    client.get(`/getClassList/${phone}`)

export const getStudentList = ({agIdx, selectedClass}) => 
    client.post(`/getStudentList`, {ag_idx: agIdx, c_idx: selectedClass})

export const getTeacherList = ({agIdx, selectedClass}) => 
    client.post(`/getTeacherList`, {ag_idx: agIdx, c_idx: selectedClass})
    
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
