import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components/list/ListLayout';
import { loadClassList } from '../../modules/check/check';

const ListHeaderContainer = () => {
    const dispatch = useDispatch();
    const phone = useSelector(({ auth }) => auth.userInfo.userPhone);
    const temp_uphone = phone;
    const {classList} = useSelector(({ check }) =>({
        classList : check.classList,        
    }));

    // 수업 목록 load
    useEffect(()=>{
        const u_phone = temp_uphone;
        // class list load
        dispatch(loadClassList(u_phone));
    },[])

    return (        
        <Header
            classList = {classList}            
        />        
    )
}
export default ListHeaderContainer;
