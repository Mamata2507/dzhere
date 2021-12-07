import client from '../client';
import qs from 'qs';

const checkAxios = client;
// API 기본 주소 설정
//checkAxios.defaults.baseURL = 'http://192.168.0.7:8080';

export const getUserName = (u_phone) => {
    const queryString = qs.stringify({u_phone});
    return checkAxios.post(`/get/name?${queryString}`).then(response => {
        console.log("data", response.data);
        return response.data
    });
}

export const loadClasses = (u_phone) => {
    const queryString = qs.stringify({u_phone});
    return checkAxios.get(`/class?${queryString}`);
}

export const loadClassTime = async (u_phone) => {
    const queryString = qs.stringify({u_phone});
    return await checkAxios.get(`/class/time?${queryString}`);
}

export const insertCheck = (u_phone) => {
    return checkAxios.post(`/attend/insert`,{
        u_phone:u_phone
    });
}

export const insertCheckExit = (u_phone) => {
    return checkAxios.post(`/attend/exitinsert`,{
        u_phone:u_phone,         
    });
}

export const insertCheckReave = (u_phone) => {
    return checkAxios.post(`/attend/reaveinsert`,{
        u_phone:u_phone,         
    });
}

export const loadAttendCnt = async (u_phone,month) => {    
    const queryString = qs.stringify(u_phone,month);
    return await checkAxios.get(`/attend/load?${queryString}`);
}

export const loadAttendList = async (u_phone,month) => {    
    const queryString = qs.stringify(u_phone,month);
    return await checkAxios.get(`/attend/allload?${queryString}`);
}

export const checkWifi = async (wifi_info) => {
    console.log('5-1');
    return await checkAxios.post(`/check/wifi`,{
        ssid: wifi_info.ssid,
        ipAddress: wifi_info.ipAddress,
        bssid: wifi_info.bssid,
        u_phone: wifi_info.u_phone,
    })
}

export const loadTodayAttendList = ({u_phone,today}) => {    
    const queryString = qs.stringify({u_phone,today});
    // console.log(`${classURL}/attend/todayload?${queryString}`);
    return checkAxios.get(`/attend/todayload?${queryString}`);
}