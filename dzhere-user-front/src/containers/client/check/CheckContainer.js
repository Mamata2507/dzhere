import React, { useCallback, useEffect, useState } from 'react'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import Netinfo from '@react-native-community/netinfo';
import * as Location from 'expo-location';
import { Contents } from '../../../components/client/check/CheckLayout';
import { loadClassList, loadClassTimeList, checkInsert, checkLeaveInsert, checkExitInsert, checkWifi } from '../../../modules/client/check/check';
import { AsyncStorage, Platform } from 'react-native';

const CheckContainer = () => {
    const temp_uphone = '01088630406';
    // (Platform.OS==='android')&&AsyncStorage.setItem("u_phone", "01088630406");
    const [endtime, setEndtime] = useState();
    const [btnDisable, setBtnDisable] = useState(false);  // 버튼 토글용 상태
    const [exitBtnDisable, setExitBtnDisable] = useState(true);
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const {classTime,classList,result,checkWifiInfo,classLoadError,classTimeLoadError,attendError,checkWifiError} = useSelector(({ check }) =>({
        classTime : check.classTime,
        classList : check.classList,
        result: check.result,
        checkWifiInfo: check.checkWifiInfo,
        classLoadError : check.classLoadError,
        classTimeLoadError : check.classTimeLoadError,
        attendError : check.attendError,
        checkWifiError : check.checkWifiError,
    }));

    // 출석 시간 저장 state
    const [attendStartTime, setAttendStartTime] = useState({});
    const [attendEndTime, setAttendEndTime] = useState({});
    const [attendList, setAttendList] = useState([]);
    // wifi 정보 저장용 state
    const [wifiInfo, setWifiInfo] = useState({});

    const initWifi = useCallback(
        ()=>testSetWifi()
        ,[wifiInfo]
    )

    async function testNetInfo(){
        const u_phone = temp_uphone;
        await Netinfo.fetch('wifi').then(connectInfo=>{
            console.log(444);        
            setWifiInfo({
                wifiInfo: {
                    connect: connectInfo.isConnected,
                    ssid: connectInfo.details.ssid,
                    ipAddress: connectInfo.details.ipAddress,
                    bssid: connectInfo.details.bssid,
                    u_phone: u_phone,
                }
            });
            console.log(wifiInfo);
        })
    }

    function testSetWifi(){        
        console.log(222);
        if(Location.requestForegroundPermissionsAsync()){
            console.log(333);
            testNetInfo();
        }
    }

    function testWifi() {
        console.log(111);
        testSetWifi();
        // wifi 연결 되어 있는지 확인 
        if((wifiInfo)&&wifiInfo.wifiInfo.connect){                        
            console.log(555);
            dispatch(checkWifi(wifiInfo.wifiInfo));
            return true;
        }else{                    
            alert('wifi를 연결해 주세요.');
            return false;
        }
            
    }

    // 출석 버튼 이벤트
    const onPressStartTime = async () => {     
        // const u_phone = (Platform.OS==='android')? AsyncStorage.getItem('u_phone'):temp_uphone;   
        const attend_starttime = (classTime)&&classTime[0].ct_attend_starttime;
        const u_phone = temp_uphone;
        const ID = Date.now().toString();        
        const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
        const newCheckObject = {id: ID, time: nowTime, attendState:'출석'};
        
        // const testResult = testWifi();
        // console.log('testResult : '+testWifi());
        if(testWifi()){
            if(checkWifiInfo==='ok'){                
                if(attendStartTime && (moment().format('HH:mm:ss')>attend_starttime) ){                    
                    dispatch(checkInsert(u_phone));
                    setWifiInfo('');
                    setAttendStartTime(nowTime);
                    setAttendList(attendList.concat(newCheckObject)); 
                    setBtnDisable(true);
                    setExitBtnDisable(false);
                }else{
                    alert('출석 인증 시간이 아닙니다.');
                }
            }else{
                alert('등록된 장소가 아닙니다.')
                return;
            }
        }else{
            alert('error')
        }
    }

    // 조퇴 버튼 이벤트
    const onPressLeaveTime = async () => {
        // const u_phone = (Platform.OS==='android')? AsyncStorage.getItem('u_phone'):temp_uphone;
        const u_phone = temp_uphone;
        const ID = Date.now().toString();
        const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
        const newCheckObject = {id: ID, time: nowTime, attendState:'조퇴'};
        // 출석을 한 경우에만 퇴실 가능
        if(testWifi()){
            if(checkWifiInfo==='ok'){ 
                if(attendStartTime){
                    dispatch(checkLeaveInsert(u_phone));
                    setWifiInfo('');
                    setAttendEndTime(nowTime);
                    setAttendList(attendList.concat(newCheckObject));
                    setExitBtnDisable(true);
                }
            }
        }
    }

    // 퇴실 버튼 이벤트
    const onPressExitTime = async () => {
        // const u_phone = (Platform.OS==='android')? AsyncStorage.getItem('u_phone'):temp_uphone;
        const u_phone = temp_uphone;
        const ID = Date.now().toString();
        const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
        const newCheckObject = {id: ID, time: nowTime, attendState:'퇴실'};
        // 출석을 한 경우에만 퇴실 가능
        if(testWifi()){
            if(checkWifiInfo==='ok'){ 
                if(attendStartTime){
                    dispatch(checkExitInsert(u_phone));
                    setWifiInfo('');
                    setAttendEndTime(nowTime);
                    setAttendList(attendList.concat(newCheckObject));
                    setExitBtnDisable(true);
                }
            }
        }
    }
    
    // 수업 목록 load
    useEffect(async()=>{
        // const u_phone = (Platform.OS==='android')? AsyncStorage.getItem('u_phone'):temp_uphone;
        const u_phone = temp_uphone;
        // class list load
        dispatch(loadClassList(u_phone));
        // class time load
        setTimeout(() => {
            (u_phone) && dispatch(loadClassTimeList(u_phone));
        }, 1000);
        initWifi();
        // 퇴실 인정 시간
        setEndtime('23:50:00');
    },[])

    // test
    useEffect(()=>{
        console.log(checkWifiInfo);
    },[checkWifiInfo])

    // Error
    useEffect(()=>{
        if(classLoadError){
            console.log('CLASS LOAD 오류 발생');
            setError(classLoadError);
            return;
        }
        if(classTimeLoadError){
            console.log('CLASS TIME LOAD 오류 발생');
            setError(classTimeLoadError);
            return;
        }
        if(attendError) {
            console.log('ATTEND INSET 오류 발생');
            setError(attendError);
            return;
        }
        if(checkWifiError) {
            console.log('CHECK WIFI 오류 발생');
            setError(checkWifiError);
            return;
        }
    },[classLoadError,classTimeLoadError,attendError,checkWifiError])

    useEffect(()=>{
        if(error){
            // console.log(error);
            setError(null);
        }
    },[error])

    return (
        <Contents            
            onPressStartTime = {onPressStartTime}
            onPressLeaveTime = {onPressLeaveTime}
            onPressExitTime = {onPressExitTime}
            classList = {classList}
            classTime = {classTime}
            endtime = {endtime}
            attendList = {attendList}
            btnDisable = {btnDisable}
            exitBtnDisable = {exitBtnDisable}
        />
    );
}

export default CheckContainer;

