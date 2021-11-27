import { Contents } from '../../components/myinfo/MyInfoEmailUpdate'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readEmail } from '../../modules/myinfo/myInfo'
import axios from 'axios';

const LoginContainer = () => {

    const dispatch = useDispatch();

    AsyncStorage.setItem('u_phone', '01023454710');

    const { userEmail, userPhone } = useSelector(({ myinfo }) => ({
      userEmail: myinfo.readEmail.userEmail,
      userPhone: myinfo.readPhone.userPhone,
    }));

    const [newEmail, onChangeNewEmail] = React.useState(null);
    console.log(newEmail);

    useEffect(() => {
    async function getStorage() {
      if (await AsyncStorage.getItem("u_phone")) {
        let LocalData = await AsyncStorage.getItem("u_phone");
        dispatch(readEmail({LocalData}))

        axios({
          method: "GET",
          url: "http://192.168.0.112:8080/api/getEmail/"+LocalData,
        }).then((res) => {
          let LocalEmail = res.data.data.u_email;
          dispatch(readEmail({userEmail: LocalEmail}));
          dispatch(readPhone({userPhone: LocalData}));
        });
      }
    }
    getStorage();
  }, []);
  
  function onPress(){
    console.log(newEmail);
    console.log(userPhone);
    axios({
      method: "POST",
      url: "http://192.168.0.112:8080/api/updateEmail/"+userPhone+"/"+newEmail,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    }).then((res) => {
      let newEmail = res.data.data.u_email;
      console.log('하이----------->'+newEmail);
      dispatch(readEmail({userEmail: newEmail}));
    });
    }
    
    return (
        // Login -> 컨테이너의 자식 컴포넌트
        <Contents
            // 자식에게 값 전달
            userEmail={userEmail}
            onPress={onPress}
            newEmail={newEmail}
            onChangeNewEmail={onChangeNewEmail}
        />
    );
};

export default LoginContainer;