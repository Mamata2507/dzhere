import client from '../client';

export const getAgName = phone => 
    client.get(`/api/getAgName/${phone}`);

export const getClassList = phone => 
    client.get(`/api/getClassList/${phone}`)

export const getStudentList = ({agIdx, selectedClass}) => 
    client.post(`/api/getStudentList`, {ag_idx: agIdx, c_idx: selectedClass})

export const deleteUser = uid => 
    client.post(`/api/deleteUser/${uid}`)