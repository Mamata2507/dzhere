import React, { useState } from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Contents } from '../../../components/client/check/check_layout';

const CheckContainer = () => {
    console.log(333);
    const dispatch = useDispatch();
    // 출석 시간 저장 state
    const [checkStartTime, setCheckStartTime] = useState({});
    const [checkEndTime, setCheckEndTime] = useState({});
    
    // 출석 버튼 이벤트
    const onPressStartTime = () => {
        alert('test');
        // const ID = Date().toString();
        // const nowTime = moment().format('YYYY-MM-DD hh:mm:ss');
        // const newCheckObject = {
        //     [ID] : {id:ID, time:nowTime}
        // };
        // (checkStartTime==='')? setCheckStartTime(newCheckObject) : setCheckEndTime(newCheckObject);
        // console.log(nowTime);
        // dispatch()
    }
    return (
        <Contents
            onPressStartTime = {onPressStartTime}
        />
    );
}

export default CheckContainer;