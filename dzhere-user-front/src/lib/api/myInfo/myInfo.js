import client from "../client";

export const getEmail = phone => 
    client.get(`/api/getEmail/${phone}`);

export const updateEmail = ({phone, newEmail}) => 
    client.post(`/api/updateEmail/${phone}/${newEmail}`);

export const checkPw = ({currentPassword, phone}) => 
    client.post('/api/checkPw', {u_pw: currentPassword, u_phone: phone});

export const updatePw = ({newPassword, phone}) => 
    client.post('/api/updatePw', {u_pw: newPassword, u_phone: phone});
