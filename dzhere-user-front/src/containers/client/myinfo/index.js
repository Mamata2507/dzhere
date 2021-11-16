import React, { useEffect, useState } from 'react';
import {Header, Footer, Contents} from '../../../components/client/myinfo/index'
import AsyncStorage from '@react-native-async-storage/async-storage';

const index = () => {

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
    }, []);
    console.log(data);
    return (
        // MyInfo -> 컨테이너의 자식 컴포넌트
        <Contents
            data={data}
        />
    );
};

export default index;