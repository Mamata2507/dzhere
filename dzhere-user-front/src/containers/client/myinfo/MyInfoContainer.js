import { Contents } from '../../../components/client/myinfo/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

const LoginContainer = () => {

    AsyncStorage.setItem('u_phone', '01023454710');
    const [data, setData] = useState([]);
  
    useEffect(() => {
      async function getStorage() {
        if (await AsyncStorage.getItem("u_phone")) {
          let LocalData = await AsyncStorage.getItem("u_phone");
          //console.log(LocalData);
          setData(LocalData);
        }
      }
      getStorage();
    },[]);
    
    return (
        // Login -> 컨테이너의 자식 컴포넌트
        <Contents
            // 자식에게 값 전달
            data={data}
            onClick={()=>{onClick()}}
        />
    );
};

export default LoginContainer;