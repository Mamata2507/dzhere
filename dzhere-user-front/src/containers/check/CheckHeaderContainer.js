
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components/check/CheckLayout';
import { refreshCheckList } from '../../modules/check/check';

export default function CheckHeaderContainer() {
    const dispatch = useDispatch();
    const u_phone = useSelector(({ auth }) => auth.userInfo.userPhone);

    const onRefresh = () => {                
        dispatch(refreshCheckList(u_phone));
    }

    return (
        <Header
            onRefresh = {onRefresh}
        />
    )
}