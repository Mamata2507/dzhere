import axios from "axios";

export const getEmail = u_phone => 
    axios.get(`http://172.22.128.1:8080/api/getEmail/${u_phone}`);

export const updateEmail = ({phone, newEmail}) => 
    axios.post(`http://172.22.128.1:8080/api/updateEmail/${phone}/${newEmail}`);


