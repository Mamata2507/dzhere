import React, {useEffect} from 'react';
import LoginForm from '../../containers/auth/LoginForm';
import { BackHandler, Alert } from 'react-native';

const UserLoginPage = ({ navigation, route }) => {
    console.log("UserLoginPage");

    // 뒤로가기 앱 종료
    const backAction = () => {
      if (!navigation.isFocused()) {
        return false;
      }
      Alert.alert('잠깐!', 'App을 정말로 종료 하시겠어요?', [
        {
          text: '아니오',
          onPress: () => null,
          style: 'cancel',
        },
        { text: '네', onPress: () => {
            
            BackHandler.exitApp()
          }
        },
      ]);
      return true;
    };
    useEffect(() => {
      BackHandler.addEventListener('hardwareBackPress', backAction);
      return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, []);

    return (
      <LoginForm navigation={navigation} route={route} />
    );
};

export default UserLoginPage;