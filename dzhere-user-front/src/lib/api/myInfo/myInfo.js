import client from "../client";

export const getEmail = phone => 
    client.get(`/api/getEmail/${phone}`);

export const updateEmail = ({phone, newEmail}) => 
    client.post(`/api/updateEmail/${phone}/${newEmail}`);

export const getPw = phone => 
    client.get(`/api/getPw/${phone}`);

export const updatePw = ({phone, newPw}) => 
    client.post(`/api/updatePw/${phone}/${newPw}`);