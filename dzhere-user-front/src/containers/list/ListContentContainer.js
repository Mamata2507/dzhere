import React, { useEffect, useState } from 'react'
import { Content } from '../../components/list/ListLayout';
import { useDispatch, useSelector } from 'react-redux';
import { loadClassTimeList } from '../../modules/check/check';
import { attendCntLoad, attendListLoad } from '../../modules/list/list';

export default function ListContentContainer() {
    const dispatch = useDispatch();
    const phone = useSelector(({ auth }) => auth.userInfo.userPhone);
    const temp_uphone = phone;
    const [endtime, setEndtime] = useState();
    const [month, setMonth] = useState(0);
    const {classTime} = useSelector(({ check }) => ({
        classTime : check.classTime,
    }));
    const {attendCnt, error} = useSelector(({list}) => ({
        attendCnt : list.attendCnt,
        error : list.error,
    }));

    useEffect(()=>{
        const u_phone = temp_uphone;
        // class time load
        (u_phone) && dispatch(loadClassTimeList(u_phone));
        // attend cnt load
        dispatch(attendCntLoad({u_phone, month}));
        // 퇴실 인정 시간
        setEndtime('23:50:00');
    },[])

    const onMonthChange = ((e)=>{
        (month!==e)&&setMonth(e);
        console.log(month,e);
    })

    const onPressSearch = () => {
        const u_phone = temp_uphone;
        dispatch(attendCntLoad({u_phone, month}));
        dispatch(attendListLoad({u_phone, month}));
    }
    
    useDispatch(()=>{
        console.log(error);
    },[error])

    return (
        <Content
            classTime = {classTime}
            onPressSearch = {onPressSearch}
            onMonthChange = {onMonthChange}
            attendCnt = {attendCnt}
        />
    )
}
