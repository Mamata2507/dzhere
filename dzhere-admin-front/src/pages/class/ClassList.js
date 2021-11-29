import * as React from 'react';
import ClassListContainer from '../../containers/class/ClassListContainer';
import { Alert, BackHandler } from 'react-native';
import { useEffect } from 'react';

const ClassList = ({navigation}) => {

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
   <ClassListContainer />
  );
};

export default ClassList;
