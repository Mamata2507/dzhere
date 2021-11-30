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

export const countUser = phone => 
    client.get(`/api/countUser/${phone}`);

