import axios from "axios";

export const getAgName = phone => 
    axios.get(`http://172.26.160.1:8080/api/getAgName/${phone}`);

export const getClassList = phone => 
    axios.get(`http://172.26.160.1:8080/api/getClassList/${phone}`)

export const getStudentList = ({agIdx, selectedClass}) => 
    axios.post("http://172.26.160.1:8080/api/getStudentList", {ag_idx: agIdx, c_idx: selectedClass})

export const deleteUser = uid => 
    axios.post(`http://172.26.160.1:8080/api/deleteUser/${uid}`)