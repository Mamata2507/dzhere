import { Contents } from '../../../components/client/myinfo/MyInfo'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const LoginContainer = () => {

    AsyncStorage.setItem('u_phone', '01023454710');
    //const [data, setData] = useState([]);

    const { userPhone } = useSelector(({ myinfo }) => ({
      userPhone: myinfo.userInfo.userPhone,
    }));

    const dispatch = useDispatch();

    useEffect(() => {
      async function getStorage() {
        if (await AsyncStorage.getItem("u_phone")) {
          let LocalPhone = await AsyncStorage.getItem("u_phone");
          console.log(LocalData);
          //setData(LocalPhone);
          dispatch(read_myInfo({userPhone: LocalPhone}));
        }
      }
      getStorage();
    }, []);

    function onPress(){
      Alert.alert('asyncStorage & 704p 참고');
    }
    
    return (
        // Login -> 컨테이너의 자식 컴포넌트
        <Contents
            // 자식에게 값 전달
            userPhone={userPhone}
            //onClick={()=>{onClick()}}
        />
    );
};

export default LoginContainer;