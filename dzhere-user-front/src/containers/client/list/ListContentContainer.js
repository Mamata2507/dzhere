import React, { useEffect, useState } from 'react'
import { Content } from '../../../components/client/list/ListLayout';
import { useDispatch, useSelector } from 'react-redux';
import { loadClassTimeList } from '../../../modules/client/check/check';
import { attendListLoad } from '../../../modules/client/list/list';

export default function ListContentContainer() {
    const dispatch = useDispatch();
    const temp_uphone = '01088630406';
    const [endtime, setEndtime] = useState();
    const [month, setMonth] = useState(1);
    const {classTime, attendList, error} = useSelector(({ check }) =>({
        classTime : check.classTime,
        attendList : check.attendList,
        error : check.error,
    }));

    useEffect(()=>{
        const u_phone = temp_uphone;
        // class time load
        (u_phone) && dispatch(loadClassTimeList(u_phone));
        // 퇴실 인정 시간
        setEndtime('23:50:00');
    },[])

    const onMonthChange = ((e)=>{
        (month!==e)&&setMonth(e);
        console.log(month,e);
    })

    const onPressSearch = () => {
        const u_phone = temp_uphone;
        dispatch(attendListLoad({u_phone, month}));
    }
    
    console.log(attendList);
    
    useDispatch(()=>{
        console.log(error);
    },[error])

    return (
        <Content
            classTime = {classTime}
            onPressSearch = {onPressSearch}
            onMonthChange = {onMonthChange}
            attendList = {attendList}
        />
    )
}
