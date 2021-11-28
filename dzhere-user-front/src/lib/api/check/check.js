import client from '../client';
import qs from 'qs';

const checkAxios = client;
// API 기본 주소 설정
//checkAxios.defaults.baseURL = 'http://192.168.0.7:8080';

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

export const checkWifi = async (wifi_info) => {
    console.log('5-1');
    return await checkAxios.post(`${classURL}/check/wifi`,{
        ssid: wifi_info.ssid,
        ipAddress: wifi_info.ipAddress,
        bssid: wifi_info.bssid,
        u_phone: wifi_info.u_phone,
    })
}

export const loadTodayAttendList = ({u_phone,today}) => {    
    const queryString = qs.stringify({u_phone,today});
    // console.log(`${classURL}/attend/todayload?${queryString}`);
    return checkAxios.get(`${classURL}/attend/todayload?${queryString}`);
}