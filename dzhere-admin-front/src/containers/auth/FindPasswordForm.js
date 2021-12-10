import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, } from '../../modules/auth/auth';
import {apiFindPassword} from '../../lib/api/auth/auth'
import AuthForm from '../../components/auth/AuthForm';
import { Alert, Platform } from 'react-native';

const FindPasswordForm = ({ navigation, route }) => {

    const dispatch = useDispatch();
    const {form, } = useSelector(({auth}) => ({
        form: auth.findPassword,
    }));

    useEffect(() => {
        dispatch(
            changeField({
                form: 'findPassword',
                key: 'userEmail',
                value: '',
            })
        );
    }, [])

    // TextInput 값 변경 이벤트 핸들러
    const onChangeText = e => {
        console.log(e);
        const {value, name} = e;
        dispatch(
            changeField({
                form: 'findPassword',
                key: name,
                value: value,
            })
        );
    };

    // 버튼 onPress 이벤트 핸들러
    const onPress = e => {
        const { userEmail } = form;
        let regexpUserEmail =
          /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,3})$/i;
        // 하나라도 비어 있다면
        if (userEmail.length > 0 && false === regexpUserEmail.test(userEmail)) {
          return Platform.OS == "android"
            ? Alert.alert("알림", "이메일을 정확히 입력해주세요.", [
                {
                  text: "확인",
                  onPress: () => console.log("확인"),
                },
              ])
            : alert("이메일을 정확히 입력해주세요.");
        } else {
          apiFindPassword(userEmail)
            .then(async (res) => {
              if (res.result) {
                console.log("입력하신 이메일로 임시 비밀번호를 발급해드렸습니다. :)");
                Platform.OS == "android"
                  ? Alert.alert("알림", "입력하신 이메일로 임시 비밀번호를 \n발급해드렸습니다. :)", [
                      {
                        text: "확인",
                        onPress: () => navigation.navigate("AdminLoginPage"),
                      },
                    ])
                  : alert("입력하신 이메일로 임시 비밀번호를 발급해드렸습니다. :)");
                dispatch(
                    changeField({
                        form: 'findPassword',
                        key: 'userEmail',
                        value: '',
                    })
                );
              } else {
                console.log("해당 이메일 정보에 대한 계정을 찾을 수 없습니다.\n이메일을 다시 확인해주세요.", res.error);
                Platform.OS == "android"
                  ? Alert.alert("알림", "해당 이메일 정보에 대한\n계정을 찾을 수 없습니다.\n이메일을 다시 확인해주세요.", [
                      {
                        text: "확인",
                        onPress: () => console.log("확인"),
                      },
                    ])
                  : alert("해당 이메일 정보에 대한 계정을 찾을 수 없습니다.\n이메일을 다시 확인해주세요.");
                dispatch(
                    changeField({
                        form: 'findPassword',
                        key: 'userEmail',
                        value: '',
                    })
                );
              }
            })
            .catch((e) => {
              console.log("apiFindPassword.catch - e:", e);
            });
        }
    };

    

    return (
        <AuthForm
            type='findPw'
            form={form}
            onChangeText={onChangeText}
            onPress={onPress}
            navigation={navigation}
            route = {route}
        />
    );
};

export default FindPasswordForm;