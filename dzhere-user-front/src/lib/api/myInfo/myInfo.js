import axios from "axios";

export const getEmail = phone => 
    axios.get(`http://172.26.160.1:8080/api/getEmail/${phone}`);

export const updateEmail = ({phone, newEmail}) => 
    axios.post(`http://172.26.160.1:8080/api/updateEmail/${phone}/${newEmail}`);

export const getPw = phone => 
    axios.get(`http://172.26.160.1:8080/api/getPw/${phone}`);

export const updatePw = ({phone, newPw}) => 
    axios.post(`http://172.26.160.1:8080/api/updatePw/${phone}/${newPw}`);