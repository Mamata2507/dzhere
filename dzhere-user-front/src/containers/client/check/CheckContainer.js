import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Contents } from '../../../components/client/check/CheckLayout';
import { loadClassList, loadClassTimeList, checkInsert, checkExitInsert } from '../../../modules/client/check/check';
import { AsyncStorage, Platform } from 'react-native';

const CheckContainer = () => {
    const temp_uphone = '01088630406';
    // (Platform.OS==='android')&&AsyncStorage.setItem("u_phone", "01088630406");
    const [endtime, setEndtime] = useState();
    const [btnDisable, setBtnDisable] = useState(false);
    const [exitBtnDisable, setExitBtnDisable] = useState(true);
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const {classTime,classList,result,classLoadError,classTimeLoadError,attendError} = useSelector(({ check }) =>({
        classTime : check.classTime,
        classList : check.classList,
        result: check.result,
        classLoadError : check.classLoadError,
        classTimeLoadError : check.classTimeLoadError,
        attendError : check.attendError,
    }));

    // 출석 시간 저장 state
    const [attendStartTime, setAttendStartTime] = useState({});
    const [attendEndTime, setAttendEndTime] = useState({});
    const [attendList, setAttendList] = useState([]);

    // 출석 버튼 이벤트
    const onPressStartTime = async () => {     
        // const u_phone = (Platform.OS==='android')? AsyncStorage.getItem('u_phone'):temp_uphone;   
        const u_phone = temp_uphone;
        const ID = Date.now().toString();
        const nowTime = moment().format('YYYY-MM-DD hh:mm:ss');
        const newCheckObject = {id: ID, time: nowTime, attendState:'출석'};
        if(attendStartTime){
            dispatch(checkInsert(u_phone));
            setAttendStartTime(nowTime);
            setAttendList(attendList.concat(newCheckObject)); 
            setBtnDisable(true);
            setExitBtnDisable(false);
        }    
    }

    // 퇴실 버튼 이벤트
    const onPressExitTime = async () => {
        // const u_phone = (Platform.OS==='android')? AsyncStorage.getItem('u_phone'):temp_uphone;
        const u_phone = temp_uphone;
        const ID = Date.now().toString();
        const nowTime = moment().format('YYYY-MM-DD hh:mm:ss');
        const newCheckObject = {id: ID, time: nowTime, attendState:'퇴실'};
        // 출석을 한 경우에만 퇴실 가능
        if(attendStartTime){
            dispatch(checkExitInsert(u_phone));
            setAttendEndTime(nowTime);
            setAttendList(attendList.concat(newCheckObject));
            setExitBtnDisable(true);
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
        
        // 퇴실 인정 시간
        setEndtime('23:50:00');
    },[])

    // useEffect(()=>{
    //     console.log(result);
    //     (result==='ok') && alert('insert success');
        
    // },[result])

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
    },[classLoadError,classTimeLoadError,attendError])

    useEffect(()=>{
        if(error){
            // alert(error);
            // console.log(error);
            setError(null);
        }
    },[error])

    return (
        <Contents
            onPressStartTime = {onPressStartTime}
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