import axios from 'axios';
import qs from 'qs';

const checkAxios = axios.create();
// API 기본 주소 설정
checkAxios.defaults.baseURL = 'http://192.168.0.17:8080';

const classURL = '/m/user';

export const loadClasses = (u_phone) => {
    const queryString = qs.stringify({u_phone});
    return checkAxios.get(`${classURL}/class?${queryString}`);
}

export const loadClassTime = async (u_phone) => {
    const queryString = qs.stringify({u_phone});
    return await checkAxios.get(`${classURL}/class/time?${queryString}`);
}

export const insertCheck = (u_phone) => {
    return checkAxios.post(`${classURL}/attend/insert`,{
        u_phone:u_phone
    });
}

export const insertCheckExit = (u_phone) => {
    return checkAxios.post(`${classURL}/attend/exitinsert`,{
        u_phone:u_phone,         
    });
}

export const insertCheckReave = (u_phone) => {
    return checkAxios.post(`${classURL}/attend/reaveinsert`,{
        u_phone:u_phone,         
    });
}

export const loadAttendCnt = async (u_phone,month) => {    
    const queryString = qs.stringify(u_phone,month);
    return await checkAxios.get(`${classURL}/attend/load?${queryString}`);
}

export const loadAttendList = async (u_phone,month) => {    
    const queryString = qs.stringify(u_phone,month);
    return await checkAxios.get(`${classURL}/attend/allload?${queryString}`);
}

export const checkWifi = (wifi_info) => {
    return checkAxios.post(`${classURL}/check/wifi`,{
        ssid: wifi_info.ssid,
        ipAddress: wifi_info.ipAddress,
        bssid: wifi_info.bssid,
        u_phone: wifi_info.u_phone,
    })
}