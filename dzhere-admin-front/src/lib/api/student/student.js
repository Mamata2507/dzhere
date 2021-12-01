import client from '../client';

export const getAgName = phone => 
    client.get(`/api/getAgName/${phone}`);

export const getClassList = phone => 
    client.get(`/api/getClassList/${phone}`)

export const getStudentList = ({agIdx, selectedClass}) => 
    client.post(`/api/getStudentList`, {ag_idx: agIdx, c_idx: selectedClass})
    
export const deleteUser = uid => 
    client.post(`/api/deleteUser/${uid}`)
    
export const insertUser = ({agIdx, selectedClassAdd, uName, uPhone}) => 
    client.post(`/api/insertUser`, {ag_idx: agIdx, c_idx: selectedClassAdd, u_name: uName, u_phone: uPhone})

export const countUser = phone => {
    return client
    .get(`/api/countUser/${phone}`)
    .then(function (response){
        return response.data.data;
    })
    .catch(function (error) {
        console.log(error);
    });
};

export const getStudentInfo = uid => 
    client.get(`api/getStudentInfo/${uid}`)

export const updateUser = ({selectedClassUpdate, uName, uPhone, uid}) => 
    client.post(`/api/updateUser`, {c_idx: selectedClassUpdate, u_name: uName, u_phone: uPhone, u_idx: uid})
